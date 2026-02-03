
# Mobile Optimization for "Why Choose Cowford Painting" Section

## Summary
Optimize the "Why Choose Cowford Painting" section for mobile devices by fixing text overflow issues in the carousel, adjusting spacing, and improving the overall layout for smaller screens.

## Issues Identified
1. **Carousel text overflow** - Long benefit text gets cut off horizontally instead of wrapping
2. **Large spacing** - Section padding is too generous for mobile
3. **Professional Excellence box** - Takes up too much vertical space on mobile with the large paintbrush icon
4. **Carousel height inconsistency** - Different text lengths cause layout shifts during auto-scroll

## Changes Required

### 1. Update `src/components/WhyChooseUsCarousel.tsx`
- Change the text container to allow proper text wrapping on mobile
- Add a minimum height to prevent layout shifts as items rotate
- Adjust icon and text sizing for better mobile readability
- Change from horizontal flex to a layout that works better on narrow screens

**Before:**
```tsx
<div className="flex-[0_0_100%] min-w-0 flex items-center gap-3 py-3">
  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
  <span className="text-foreground text-lg">{item}</span>
</div>
```

**After:**
```tsx
<div className="flex-[0_0_100%] min-w-0 flex items-start gap-3 py-3 min-h-[72px]">
  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
  <span className="text-foreground text-base md:text-lg leading-relaxed">{item}</span>
</div>
```

### 2. Update `src/pages/Index.tsx` - Why Choose Us Section
- Reduce vertical padding on mobile (`py-12 md:py-20`)
- Add responsive gap sizing for the grid
- Scale down the "Professional Excellence" box on mobile
- Reduce the paintbrush icon size on mobile

**Key changes:**
- Section: `py-20` → `py-12 md:py-20`
- Grid gap: `gap-12` → `gap-8 lg:gap-12`
- Paintbrush icon: Add responsive sizing `h-16 w-16 md:h-24 md:w-24`
- Professional Excellence text: Reduce size on mobile

## Technical Notes
- Using `items-start` instead of `items-center` allows the icon to align with the first line of wrapped text
- Adding `min-h-[72px]` ensures consistent carousel slide height
- Responsive text sizing (`text-base md:text-lg`) improves readability on mobile
- The `leading-relaxed` utility improves line spacing for wrapped text

## Files to Modify
1. `src/components/WhyChooseUsCarousel.tsx` - Fix text wrapping and layout
2. `src/pages/Index.tsx` - Adjust section spacing and Professional Excellence box sizing
