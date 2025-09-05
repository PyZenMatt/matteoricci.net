#!/usr/bin/env python3
"""
Generate _site/sitemap.xml by scanning the built site.
Usage: run after `bundle exec jekyll build`.
"""
import os
import sys
import time
from urllib.parse import urljoin
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(__file__))
SITE_DIR = os.path.join(ROOT, '_site')
CONFIG_FILE = os.path.join(ROOT, '_config.yml')

def read_site_url():
    # naive parsing of _config.yml to extract url; works for simple config
    try:
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line.startswith('url:'):
                    # url: "https://example.com"
                    parts = line.split(':', 1)
                    if len(parts) > 1:
                        return parts[1].strip().strip('"').strip("'")
    except Exception:
        pass
    return 'https://example.com'

def should_include(path):
    # include html files and directories that have index.html
    if path.endswith('.html'):
        # exclude 404
        if path.endswith('/404.html') or path.endswith('404.html'):
            return False
        return True
    return False

def isoformat_timestamp(ts):
    # return ISO 8601 with timezone offset local
    return time.strftime('%Y-%m-%dT%H:%M:%S%z', time.localtime(ts))

def main():
    if not os.path.isdir(SITE_DIR):
        print('Error: _site directory not found. Run jekyll build first.', file=sys.stderr)
        sys.exit(1)

    site_url = read_site_url()
    urls = []
    for root, dirs, files in os.walk(SITE_DIR):
        for fn in files:
            rel = os.path.relpath(os.path.join(root, fn), SITE_DIR)
            rel = rel.replace(os.path.sep, '/')
            if should_include(rel):
                fullpath = os.path.join(root, fn)
                mtime = os.path.getmtime(fullpath)
                # construct URL
                # ensure leading slash
                if rel == 'index.html':
                    path = '/'
                else:
                    path = '/' + rel
                urls.append((path, mtime))

    # build XML
    urlset = ET.Element('urlset', {
        'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
        'xmlns:xhtml': 'http://www.w3.org/1999/xhtml'
    })

    for path, mtime in sorted(urls):
        url = ET.SubElement(urlset, 'url')
        loc = ET.SubElement(url, 'loc')
        loc.text = urljoin(site_url.rstrip('/') + '/', path.lstrip('/'))
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = isoformat_timestamp(mtime)

    tree = ET.ElementTree(urlset)
    out = os.path.join(SITE_DIR, 'sitemap.xml')
    tree.write(out, encoding='utf-8', xml_declaration=True)
    print('Wrote', out)

if __name__ == '__main__':
    main()
