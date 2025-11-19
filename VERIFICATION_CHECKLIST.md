# GA4 Verification Checklist

## 🎯 Purpose
This checklist helps you verify that matteoricci.net is using the **correct** Google Analytics 4 Measurement ID and is not contaminated with MessyMind's tracking.

---

## ✅ Step 1: Verify Current Measurement ID in GA4 Admin

### Instructions:
1. **Log into Google Analytics 4:** https://analytics.google.com
2. **Check MatteoRicci Property:**
   - Look at the Property dropdown (top left)
   - Find the property with ID: **352111958**
   - This should be labeled something like "matteoricci.net" or "MatteoRicci"
3. **Get the Measurement ID:**
   - While viewing property 352111958, click **Admin** (gear icon, bottom left)
   - Under the **Property** column, click **Data Streams**
   - Click on your web data stream (should be for matteoricci.net)
   - On the stream details page, you'll see the **Measurement ID** (format: G-XXXXXXXXX)
   - **Write it down:** `G-________________`

### ✅ Checkpoint:
- [ ] I found the MatteoRicci property (ID: 352111958)
- [ ] I copied the correct Measurement ID: `G-________________`

---

## ✅ Step 2: Compare with Current Configuration

### Current configuration in this repository:
- **File:** `_config.yml` (line 20)
- **Current ID:** `G-MLB32YW721`

### ✅ Checkpoint:
- [ ] The Measurement ID from GA4 Admin **MATCHES** `G-MLB32YW721`
  - ✅ **If YES:** You're all set! No changes needed. Skip to Step 4.
  - ❌ **If NO:** Continue to Step 3 to fix it.

---

## ❌ Step 3: Fix Incorrect Measurement ID (Only if needed)

### If the IDs don't match:

1. **Edit `_config.yml`:**
   ```yaml
   # Line 20
   google_analytics: G-CORRECT-ID-HERE  # Replace with the correct ID from Step 1
   ```

2. **Commit and push:**
   ```bash
   git add _config.yml
   git commit -m "Fix GA4 Measurement ID for matteoricci.net"
   git push
   ```

3. **Wait for deployment:**
   - The site will rebuild automatically via GitHub Actions
   - Wait 2-5 minutes for deployment to complete

### ✅ Checkpoint:
- [ ] I updated `_config.yml` with the correct Measurement ID
- [ ] I pushed the changes
- [ ] The site has been redeployed

---

## ✅ Step 4: Verify Tracking is Working

### Real-Time Test:
1. **Open GA4 Real-Time Report:**
   - In GA4, go to **Reports** → **Real-time**
   - Make sure you're viewing property 352111958 (MatteoRicci)

2. **Visit your site:**
   - Open https://matteoricci.net in a **new incognito/private window**
   - Accept cookies when prompted
   - Navigate to 2-3 different pages (home, blog, portfolio)

3. **Verify in GA4:**
   - Within 30 seconds, you should see your visit in Real-Time
   - Check that the **page paths** show matteoricci.net URLs
   - **IMPORTANT:** Make sure you don't see any messymind.it URLs

### ✅ Checkpoint:
- [ ] I see my test visit in GA4 Real-Time
- [ ] The pages shown are from matteoricci.net
- [ ] I do NOT see any messymind.it pages

---

## ✅ Step 5: Verify MessyMind Separation

### Check MessyMind property:
1. **Switch to MessyMind property:**
   - In GA4, switch to property **498950157** (MessyMind)
   - Open **Real-time** report

2. **Visit matteoricci.net again:**
   - Visit https://matteoricci.net
   - Navigate to a few pages

3. **Verify NO tracking:**
   - MessyMind's Real-Time should **NOT** show your matteoricci.net visits
   - If it does, the Measurement ID is still wrong

### ✅ Checkpoint:
- [ ] MessyMind property (498950157) does NOT show matteoricci.net traffic
- [ ] Only messymind.it traffic appears in MessyMind property

---

## 🎉 Final Verification

### All checks passed:
- [ ] MatteoRicci property (352111958) has the correct Measurement ID
- [ ] _config.yml is configured with the correct ID
- [ ] matteoricci.net traffic appears ONLY in MatteoRicci property
- [ ] messymind.it traffic appears ONLY in MessyMind property
- [ ] No cross-contamination between the two sites

---

## 📋 Quick Reference

### Property IDs:
- **MatteoRicci.net** → Property: `352111958`
- **MessyMind.it** → Property: `498950157`

### Configuration Files:
- **Measurement ID location:** `_config.yml` line 20
- **Analytics implementation:** `_includes/analytics.html`
- **Layouts using analytics:** All 4 layouts (blog, post, portfolio, default)

### Support:
- **Full Audit Report:** See `GA4_AUDIT_REPORT.md`
- **Questions?** Open an issue in this repository

---

## 🚨 If Problems Persist

If you still see messymind.it pages in matteoricci.net's GA4 property after following this checklist:

1. **Check browser cache:** Clear cache and test in incognito mode
2. **Check DNS:** Verify both domains resolve to different sites
3. **Check shared hosting:** Ensure sites don't share the same server/config
4. **Check for iframes:** Make sure matteoricci.net doesn't embed messymind.it content
5. **Check GTM:** If using Google Tag Manager, verify it's not configured with wrong IDs

**Still stuck?** Document the issue with:
- Screenshots of GA4 Real-Time showing the problem
- The Measurement IDs from both properties
- Any error messages
- Open a GitHub issue for further investigation
