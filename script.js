document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks   = document.querySelector(".nav-links");
  const menuClose  = document.querySelector(".menu-close");

  // ouvrir / fermer avec le burger
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // fermer avec la croix
  if (menuClose) {
    menuClose.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("show");
    });
  }

  // slider auto (inchangé)
  const slides = document.getElementById("slides");
  if (slides) {
    const totalSlides = slides.children.length;
    let index = 0;
    setInterval(() => {
      slides.style.transform = `translateX(-${(index = ++index % totalSlides) * 100}%)`;
    }, 3000);
  }
});
