

# Fix Mobile Horizontal Scrolling Issues

## Summary
Prevent horizontal scrolling on mobile by adding overflow controls and adjusting the "Why Choose Cowford Painting" section layout for narrow screens.

## Issues Identified
1. **No global overflow control** - The page lacks `overflow-x: hidden` to prevent horizontal scrolling
2. **Fixed aspect-square box** - The "Professional Excellence" box uses `aspect-square` which forces a square shape even on narrow screens, pushing content outside the viewport
3. **Container padding on mobile** - The 2rem (32px) padding combined with the fixed aspect ratio causes overflow

## Changes Required

### 1. Add Global Overflow Control in `src/index.css`
Add `overflow-x: hidden` to the body or html element to prevent any horizontal scrolling at the page level.

```css
body {
  @apply bg-background text-foreground overflow-x-hidden;
}
```

### 2. Update `src/pages/Index.tsx` - "Why Choose Us" Section
Make the Professional Excellence box responsive:
- Remove `aspect-square` on mobile, keep it only for larger screens
- Ensure the box content stays within bounds with proper padding
- Add `overflow-hidden` to containers that might overflow

**Current code (lines 168-178):**
```tsx
<div className="relative">
  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-6 md:p-8 flex items-center justify-center">
    <div className="text-center">
      <Paintbrush className="mx-auto h-16 w-16 md:h-24 md:w-24 text-primary mb-4 md:mb-6" />
      <p className="text-xl md:text-2xl font-semibold mb-2">Professional Excellence</p>
      <p className="text-sm md:text-base text-muted-foreground">
        Small-business integrity with professional-grade results
      </p>
    </div>
  </div>
</div>
```

**Proposed changes:**
- Change `aspect-square` to only apply on larger screens: `md:aspect-square`
- Add `py-12` for mobile to give vertical breathing room without forcing square
- Add `overflow-hidden` to the container
- Optionally, add `w-full` and `max-w-full` constraints

### 3. Add overflow-hidden to the main wrapper
In the main page wrapper, add `overflow-x-hidden` to catch any remaining overflow issues.

## Files to Modify
1. `src/index.css` - Add overflow-x-hidden to body
2. `src/pages/Index.tsx` - Fix the Professional Excellence box aspect ratio for mobile

## Technical Notes
- Using `aspect-square` forces a 1:1 width-to-height ratio, which on mobile can create boxes wider than the viewport
- Adding `overflow-x-hidden` at the body level is a safety net but the root cause should still be fixed
- The `md:aspect-square` breakpoint means the square will only apply at 768px and above

