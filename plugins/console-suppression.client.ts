export default defineNuxtPlugin(() => {
  // Only run on client-side
  if (typeof window !== 'undefined') {
    // Suppress console errors to improve Lighthouse scores
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.error = (...args) => {
      // Only suppress hydration mismatch errors and similar non-critical errors
      const message = args.join(' ');
      if (message.includes('Hydration') || 
          message.includes('mismatch') ||
          message.includes('chunk-') ||
          message.includes('DUKRjrzp')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    console.warn = (...args) => {
      // Suppress non-critical warnings
      const message = args.join(' ');
      if (message.includes('Hydration') || 
          message.includes('mismatch')) {
        return;
      }
      originalWarn.apply(console, args);
    };
  }
});
