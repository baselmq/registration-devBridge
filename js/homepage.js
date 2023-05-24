/* ------------- scroll reveal -------------*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".hompage-title, .section-header", { origin: "top" });

ScrollReveal().reveal(
  ".hompage-text, .homepage-buttons, .home-and-about-img, .about-text, .about-button, .courses-button, .contact-form",
  {
    origin: "bottom",
  }
);
