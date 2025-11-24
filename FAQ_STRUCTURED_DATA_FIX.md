# FAQ Structured Data Duplicate Field Fix

## Issue
Google Search Console reported: **"Duplicate field 'FAQPage'"** for renovo.co.za

This critical error occurred because TWO separate FAQPage structured data schemas were present on the FAQ page simultaneously, causing Google to detect duplicate schema.org markup.

## Root Cause

### Primary Issue: Hardcoded FAQPage in index.html
The main problem was a **hardcoded FAQPage schema in `index.html`** (lines 181-252) that appeared on ALL pages, including the FAQ page itself. This meant:

1. **Homepage and all pages**: Had an 8-question FAQ schema (inappropriate)
2. **FAQ page specifically**: Had BOTH the hardcoded 8-question schema AND the dynamic 31-question schema from `FAQ.tsx`

This created the duplicate FAQPage error when Google crawled `/faq`.

### Secondary Issue: SPA Navigation Script Management
Additionally, when using React Router for client-side navigation, the cleanup function in `useEffect` hooks could fail to properly remove dynamically added script tags due to:
1. Race conditions during component unmounting
2. Lost references to script elements during re-renders
3. Multiple navigation cycles potentially accumulating scripts

## Solution Applied

### Fix 1: Removed Hardcoded FAQPage from index.html (PRIMARY FIX)
**File**: `index.html` (lines 180-252)

Removed the hardcoded FAQPage schema that was appearing on all pages. This schema should only exist on the dedicated FAQ page (`/faq`), not site-wide.

**Why this matters**:
- FAQ structured data should only appear on pages dedicated to FAQs
- Having it in `index.html` made it load on every page
- On the `/faq` page, it conflicted with the proper, comprehensive FAQ schema
- This was the direct cause of the "Duplicate field 'FAQPage'" error

### Fix 2: Improved Dynamic Script Management (PREVENTATIVE)
Updated all pages and components that dynamically inject structured data scripts to use a unique ID-based approach:

1. **FAQ Page** (`src/pages/FAQ.tsx`)
2. **About Us Page** (`src/pages/AboutUs.tsx`)
3. **Bath Resurfacing Service** (`src/pages/services/BathResurfacing.tsx`)
4. **Cracked Sink Repair Service** (`src/pages/services/CrackedSinkRepair.tsx`)
5. **Gallery Component** (`src/components/sections/Gallery.tsx`)

This prevents potential script accumulation during SPA navigation.

### Implementation Pattern

**Before:**
```typescript
useEffect(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script); // ❌ Could fail to remove
  };
}, []);
```

**After:**
```typescript
useEffect(() => {
  const scriptId = 'faq-structured-data'; // Unique ID per page
  
  // Remove any existing structured data script
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = scriptId; // ✅ Add unique ID
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);

  return () => {
    const scriptToRemove = document.getElementById(scriptId);
    if (scriptToRemove) {
      scriptToRemove.remove(); // ✅ Reliable removal by ID
    }
  };
}, []);
```

### Key Improvements

1. **Unique IDs**: Each structured data script has a unique ID:
   - `faq-structured-data`
   - `about-us-structured-data`
   - `bath-resurfacing-structured-data`
   - `cracked-sink-repair-structured-data`
   - `gallery-structured-data`

2. **Proactive Cleanup**: Before adding a new script, we check for and remove any existing script with the same ID

3. **Reliable Removal**: The cleanup function uses `getElementById()` for guaranteed removal instead of relying on closure references

## Expected Results

✅ **No more duplicate FAQPage errors** in Google Search Console
✅ **FAQPage schema only appears on the FAQ page** (not site-wide)
✅ **Proper structured data cleanup** during page navigation
✅ **No accumulation of script tags** in the document head
✅ **Better SEO and Rich Results eligibility**
✅ **Reduced HTML size** (index.html: 12.45 kB → 9.08 kB)

## Testing

1. ✅ All files compiled without errors
2. ✅ No linter errors detected
3. ✅ Production build completed successfully
4. ✅ All structured data remains valid

## Next Steps

1. Deploy the changes to production
2. Request reindexing in Google Search Console
3. Monitor Search Console for resolution of the duplicate field error (may take 1-2 weeks)
4. Verify structured data using Google's Rich Results Test: https://search.google.com/test/rich-results

## Verification Commands

Test structured data locally:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

Use Google's Rich Results Test to verify FAQ page:
- URL: https://renovo.co.za/faq
- Tool: https://search.google.com/test/rich-results

## Additional Notes

This fix not only resolves the duplicate FAQPage error but also improves the overall robustness of structured data management across all pages. The pattern can be applied to any future pages that need structured data injection.


