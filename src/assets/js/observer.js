// Define the callback function for when an element intersects with the viewport
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("visible")
      observer.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer instance with the callback function
const observer = new IntersectionObserver(observerCallback, {
  root: null, // The element that is used as the viewport for checking visibility. If not specified, the browser viewport is used.
  rootMargin: '0px', // Margin around the root. Can have values similar to the CSS margin property (e.g., '10px 20px 30px 40px')
  threshold: 0.5, // The percentage of the target's visibility that triggers the callback. A value of 0 means that even when just a single pixel is visible, the callback will be run.
});

// Observe a target element
const elements = document.querySelectorAll("[data-observe='true']").forEach((el) => observer.observe(el))
