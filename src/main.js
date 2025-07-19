// Theme Management
const themeToggle = document.getElementById(
  "theme-toggle"
);
const body = document.body;

// Check for saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";

function setTheme(theme) {
  if (theme === "dark") {
    body.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.checked = true;
  } else {
    body.removeAttribute("data-theme");
    if (themeToggle) themeToggle.checked = false;
  }
  localStorage.setItem("theme", theme);
}

// Set initial theme
setTheme(savedTheme);

// Theme toggle event listener
if (themeToggle) {
  themeToggle.addEventListener("change", function () {
    const newTheme = this.checked ? "dark" : "light";
    setTheme(newTheme);
  });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (!href) return;
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 64; // Height of fixed navbar
      const targetPosition = (target).offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".animate-fade-in").forEach((el) => {
  observer.observe(el);
});

// Navbar background on scroll
var lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }

  lastScroll = currentScroll;
});

// Responsive mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
  // Optional: Close on outside click
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Set initial theme
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Add loading animation
  setTimeout(() => {
    document.querySelectorAll(".animate-fade-in").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 100);
});
