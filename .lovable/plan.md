

# Update Contact Information

## Summary
Update the phone number from `904-236-9511` to `904-300-0365` and the email from `Cowfordpainting@gmail.com` to `quotes@cowfordpainting.com` across all locations in the website.

## Changes Required

### 1. src/pages/Index.tsx
Update 10 instances of contact information:

**Phone Number Updates (5 locations):**
- Hero section: Phone button `href` and display text (lines 82-85)
- Contact section: Phone link `href` and display text (lines 199-204)
- Contact section: "Call Now" button `href` (line 216)
- Mobile footer: "Call" button `href` (line 230)

**Email Updates (5 locations):**
- Hero section: "Get a Quote" button `href` - change to `mailto:quotes@cowfordpainting.com`
- Contact section: Email link `href` and display text - change to `quotes@cowfordpainting.com`
- Contact section: "Email Us" button `href` - change to `mailto:quotes@cowfordpainting.com`
- Mobile footer: "Email" button `href` - change to `mailto:quotes@cowfordpainting.com`

### 2. src/components/StickyHeader.tsx
Update 2 instances of contact information:

**Phone Number Updates (1 location):**
- Sticky header: Phone button `href` and display text - change to `904-300-0365`

**Email Updates (1 location):**
- Sticky header: "Get a Quote" button `href` - change to `mailto:quotes@cowfordpainting.com`

## Technical Notes
- The `tel:` links handle phone call routing natively through the browser/device
- The `mailto:` links handle email routing natively through the browser/device's default email client
- No backend changes are needed since these are standard HTML link protocols
- All changes are purely in the UI layer

## Files to Modify
1. `src/pages/Index.tsx` - 10 updates
2. `src/components/StickyHeader.tsx` - 2 updates

