const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".mobile-list");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  
  if (!menu.classList.contains("hidden")) {
    toggleMenu.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  } else {
    toggleMenu.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  }
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    toggleMenu.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  });
});

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opac");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".para, .timeline-item, .skill-card, .image-column, .review-card, .underline").forEach(el => {
  observer.observe(el);
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: data-url click handlers (kept for compatibility)
document.querySelectorAll("[data-url]").forEach(el => {
  if (el.dataset.url) {
    el.addEventListener("click", () => {
      location.href = el.dataset.url;
    });
  }
});
