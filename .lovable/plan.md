

# Fix Mobile Horizontal Overflow in "Why Choose Cowford Painting" Section

## Summary
The carousel and section layout are still causing horizontal scrolling on mobile. This plan adds targeted overflow controls and width constraints specifically to the "Why Choose Cowford Painting" section to ensure content stays within the mobile viewport.

## Root Cause Analysis
The Embla Carousel uses a flex container where all 5 slides are positioned side-by-side (totaling 500% width). Even with `overflow-hidden` on parent elements, the browser can still detect this wider content and enable horizontal scrolling if not properly contained at every level.

## Changes Required

### 1. Update `src/components/WhyChooseUsCarousel.tsx`
Add explicit width constraints and additional overflow protection to the carousel wrapper.

**Current:**
```tsx
<div className="overflow-hidden" ref={emblaRef}>
```

**Updated:**
```tsx
<div className="overflow-hidden w-full max-w-full" ref={emblaRef}>
```

### 2. Update `src/pages/Index.tsx` - Why Choose Us Section
Add overflow controls to the section and its inner containers to create multiple layers of protection.

**Changes to the section (line 158):**
- Add `overflow-hidden` to the section element itself

**Changes to the grid container (line 160):**
- Add `overflow-hidden` to prevent any grid items from overflowing

**Changes to the first grid column (line 161):**
- Add `overflow-hidden` and `min-w-0` to ensure the carousel text container properly constrains its width

The `min-w-0` is critical because flex and grid children have an implicit `min-width: auto` which can prevent them from shrinking below their content size.

## Files to Modify
1. `src/components/WhyChooseUsCarousel.tsx` - Add width constraints to carousel wrapper
2. `src/pages/Index.tsx` - Add overflow and width constraints to the Why Choose Us section

## Technical Notes
- `min-w-0` on flex/grid children overrides the default `min-width: auto` behavior, allowing content to shrink properly
- Multiple layers of `overflow-hidden` ensure that even if one layer fails, others catch the overflow
- Adding `w-full max-w-full` explicitly sets maximum width constraints that work with the carousel's percentage-based sizing

