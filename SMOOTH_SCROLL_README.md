# Smooth Scroll with Lenis

This project includes a smooth scroll implementation using Lenis that provides a smooth scrolling experience with proper cleanup and TypeScript support.

## Features

- ✅ Smooth scrolling with Lenis
- ✅ Proper cleanup with `lenis.destroy()`
- ✅ TypeScript support
- ✅ React hooks for easy integration
- ✅ Automatic RAF loop management
- ✅ Touch device optimization

## Usage

### Basic Hook

```tsx
import { useLenisScroll } from "@/contexts/SmoothScrollContext";

function MyComponent() {
  const lenis = useLenisScroll();
  
  // Access the Lenis instance directly
  const handleScrollToTop = () => {
    lenis?.scrollTo(0, { duration: 2 });
  };
  
  return <button onClick={handleScrollToTop}>Scroll to Top</button>;
}
```

### Enhanced Hook

```tsx
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function MyComponent() {
  const { 
    scrollToTop, 
    scrollToBottom, 
    scrollToElement, 
    scrollToPosition,
    stop,
    start 
  } = useSmoothScroll();
  
  return (
    <div>
      <button onClick={() => scrollToTop(2)}>Scroll to Top (2s)</button>
      <button onClick={() => scrollToBottom(1.5)}>Scroll to Bottom (1.5s)</button>
      <button onClick={() => scrollToElement("#section-1", { offset: -100 })}>
        Go to Section 1
      </button>
      <button onClick={() => scrollToPosition(500, 1)}>Go to 500px (1s)</button>
      <button onClick={stop}>Stop Scrolling</button>
      <button onClick={start}>Resume Scrolling</button>
    </div>
  );
}
```

### Scroll to Element

```tsx
// Scroll to element by ID
scrollToElement("#contact-section");

// Scroll to element by reference
const elementRef = useRef<HTMLDivElement>(null);
scrollToElement(elementRef.current);

// With custom options
scrollToElement("#hero", { 
  duration: 2, 
  offset: -50 
});
```

### Event Listeners

```tsx
useEffect(() => {
  if (!lenis) return;
  
  const handleScroll = (e: any) => {
    console.log("Scroll progress:", e.progress);
    console.log("Scroll velocity:", e.velocity);
  };
  
  lenis.on("scroll", handleScroll);
  
  return () => {
    lenis.off("scroll", handleScroll);
  };
}, [lenis]);
```

## Configuration

The Lenis instance is configured with these default settings:

```tsx
new Lenis({
  duration: 1.2,                    // Animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: "vertical",            // Scroll direction
  gestureDirection: "vertical",     // Gesture direction
  smooth: true,                     // Enable smooth scrolling
  smoothTouch: false,               // Disable smooth scrolling on touch devices
  touchMultiplier: 2,               // Touch sensitivity multiplier
});
```

## Cleanup

The provider automatically handles cleanup when the component unmounts:

- Stops the RAF loop
- Calls `lenis.destroy()`
- Cleans up event listeners
- Sets the reference to null

## Performance

- Uses `requestAnimationFrame` for optimal performance
- Automatically stops when not in viewport
- Touch device optimization
- Minimal memory footprint

## Browser Support

- Modern browsers with ES6+ support
- Touch devices (with `smoothTouch: false`)
- Mobile Safari and Chrome
- Desktop browsers

## Troubleshooting

### Scroll not working
- Ensure the component is wrapped in `SmoothScrollProvider`
- Check that Lenis is properly initialized
- Verify the element exists before scrolling to it

### Performance issues
- Consider reducing animation duration
- Disable smooth scrolling on mobile if needed
- Use `stop()` and `start()` to pause/resume scrolling

### Touch device issues
- Touch devices have `smoothTouch: false` by default
- Adjust `touchMultiplier` if needed
- Consider enabling smooth touch for better UX on tablets
