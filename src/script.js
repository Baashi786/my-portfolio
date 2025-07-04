var typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 1,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
  });
});

