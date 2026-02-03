

# Fast-Moving Carousel for "Why Choose Cowford Painting" Section

## Summary
Convert the static bullet points in the "Why Choose Cowford Painting?" section into a fast-moving auto-scrolling carousel that cycles through the benefits continuously.

## Changes Required

### 1. Install New Dependency
- Add `embla-carousel-autoplay` package for auto-scrolling functionality

### 2. Create New Component: `src/components/WhyChooseUsCarousel.tsx`
A new carousel component specifically for the "Why Choose Us" section that:
- Uses Embla Carousel with the Autoplay plugin
- Loops infinitely through the 5 bullet points
- Auto-scrolls quickly (approximately 2-3 second delay between slides)
- Shows one item at a time with a clean, animated transition
- Includes the CheckCircle2 icon with each item
- Has a modern, sleek design that fits the section

### 3. Update `src/pages/Index.tsx`
- Import the new `WhyChooseUsCarousel` component
- Replace the static `<ul>` list (lines 165-172) with the new carousel component
- Pass the `whyChooseUs` array to the carousel

## Visual Design
The carousel will:
- Display one benefit at a time in a centered, prominent style
- Auto-advance every 2-3 seconds for a "fast-moving" feel
- Include smooth fade/slide transitions between items
- Maintain the CheckCircle2 icon styling for brand consistency
- Optionally show dot indicators for current position

## Technical Details

**New dependency:**
```
embla-carousel-autoplay
```

**Carousel configuration:**
- Loop: enabled (infinite scroll)
- Autoplay delay: 2000-2500ms for fast movement
- Pause on interaction: enabled (good UX)

**Component structure:**
```text
WhyChooseUsCarousel
├── Embla viewport container
│   └── Flex container with slides
│       └── Individual benefit items with CheckCircle2 icons
└── Optional dot indicators
```

## Files to Create
1. `src/components/WhyChooseUsCarousel.tsx` - New carousel component

## Files to Modify
1. `src/pages/Index.tsx` - Replace static list with carousel component
2. `package.json` - Add embla-carousel-autoplay dependency

