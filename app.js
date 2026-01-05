// ===== AÑO AUTOMÁTICO =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== SCROLL REVEAL =====
const faders = document.querySelectorAll(".fade");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});

// ===== NAV LINK ACTIVO =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
