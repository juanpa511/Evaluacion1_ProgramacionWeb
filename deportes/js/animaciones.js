document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-list a");
  
    // Abrir/Cerrar menú
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });
  
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });
  });
  