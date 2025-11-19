# GA4 Audit Report - matteoricci.net

## Issue Summary
The site matteoricci.net was registering pages from messymind.it in GA4, indicating potential Measurement ID contamination between the two sites.

## Audit Findings

### 1. Location of GA4 Tag
**Before the fix:**
GA4 tracking code was **hardcoded** in 3 separate layout files:
- `_layouts/blog.html` (lines 37-48)
- `_layouts/post.html` (lines 29-38)  
- `_layouts/portfolio.html` (lines 58-69)

**After the fix:**
- Created centralized include: `_includes/analytics.html`
- All layouts now use `{% include analytics.html %}`
- Single source of truth for GA4 configuration

### 2. Measurement ID Found
**Current ID in use:** `G-MLB32YW721`

**Location:** Configured in `_config.yml` line 20:
```yaml
google_analytics: G-MLB32YW721        # GA4
```

### 3. Verification Needed ⚠️

**CRITICAL:** The Measurement ID needs to be verified in Google Analytics 4 Admin.

According to the issue:
- **MatteoRicci.net** should use property: `352111958`
- **MessyMind.it** should use property: `498950157`

**To verify which property G-MLB32YW721 belongs to:**

1. Log into Google Analytics 4: https://analytics.google.com
2. Click Admin (gear icon, bottom left)
3. Check the **Property** dropdown - you'll see the property ID number
4. Click **Data Streams** under the Property column
5. Select the web data stream
6. Check if the Measurement ID matches `G-MLB32YW721`

### 4. Possible Issues Identified

#### Issue A: Wrong Measurement ID
If `G-MLB32YW721` belongs to MessyMind (property 498950157), then:
- **Problem:** matteoricci.net is sending data to MessyMind's GA4 property
- **Solution:** Update `_config.yml` with the correct Measurement ID for MatteoRicci property (352111958)

#### Issue B: Shared Configuration
If matteoricci.net and messymind.it share the same `_config.yml` or include files:
- **Problem:** Both sites use the same configuration
- **Solution:** Ensure complete separation:
  - Separate repositories for each site, OR
  - Separate `_config.yml` files for each domain
  - No shared `_includes/` directory between sites

### 5. Changes Made

✅ **Created:** `_includes/analytics.html`
- Centralized GA4 tracking code
- Reads Measurement ID from `_config.yml` (`site.google_analytics`)
- Includes GDPR-compliant consent settings
- Added documentation comments

✅ **Updated:** All layout files to use the include
- `_layouts/blog.html`
- `_layouts/post.html`
- `_layouts/portfolio.html`

✅ **Benefits:**
- Single source of truth for GA4 configuration
- Easier to maintain and update
- Measurement ID defined in one place (`_config.yml`)
- Prevents code duplication errors

### 6. How to Fix (If Wrong Measurement ID)

If verification shows `G-MLB32YW721` is MessyMind's ID:

1. Get the correct Measurement ID for MatteoRicci.net from GA4 Admin
2. Update `_config.yml`:
   ```yaml
   google_analytics: G-XXXXXXXXX  # Replace with correct MatteoRicci ID
   ```
3. Rebuild the Jekyll site
4. Deploy the changes
5. Verify tracking in GA4 Real-Time reports

### 7. Verification Checklist

After fixing (if needed), verify:

- [ ] GA4 Real-Time report shows traffic only for matteoricci.net
- [ ] No messymind.it pages appear in matteoricci.net's GA4 property
- [ ] Page views are tracked correctly on matteoricci.net
- [ ] Events (page_view, user_engagement, etc.) are recorded properly
- [ ] The Measurement ID in `_config.yml` matches the one in GA4 Admin for property 352111958

### 8. Site Separation Best Practices

To prevent future contamination:

1. **Separate Repositories:** matteoricci.net and messymind.it should have completely separate repos
2. **No Shared Includes:** Each site should have its own `_includes/analytics.html`
3. **Different Measurement IDs:** Verify each site uses its own unique GA4 Measurement ID
4. **Separate Deployments:** Each site should deploy independently
5. **Testing:** Use GA4 DebugView to verify correct tracking before deployment

## Conclusion

The GA4 implementation has been **refactored and centralized**. However, **verification is required** to confirm the Measurement ID `G-MLB32YW721` belongs to the correct property (MatteoRicci 352111958, not MessyMind 498950157).

**Next Action Required:** Check GA4 Admin to verify the property ownership of G-MLB32YW721, and update `_config.yml` if needed.
