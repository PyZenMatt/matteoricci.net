#after any changes to the Gemfile, execute bundle update!
source "https://rubygems.org"
gem "jekyll-agency", git: "https://github.com/raviriley/agency-jekyll-theme.git"
# Delete the following lines if not on Windows: 
# Performance-booster for watching directories on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?
source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.3.4"

# Aggiungi qui il tema che vuoi usare
gem "jekyll-agency", git: "https://github.com/raviriley/agency-jekyll-theme.git"

# Se vuoi usare GitHub Pages, rimuovi la gem "jekyll" sopra e
# usa la gemma github-pages (decommentala se necessario):
# gem "github-pages", group: :jekyll_plugins

# Se hai altri plugin, aggiungili qui!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
