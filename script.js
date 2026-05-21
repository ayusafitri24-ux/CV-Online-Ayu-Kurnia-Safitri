// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

// =========================
// MOBILE MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Tutup menu saat link diklik

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });

});

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {

    localStorage.setItem("theme", "dark");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    localStorage.setItem("theme", "light");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';
  }

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  const triggerBottom =
    window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =========================
// SKILL BAR ANIMATION
// =========================

const skillBars =
  document.querySelectorAll(".skill-progress");

function animateSkills() {

  skillBars.forEach(bar => {

    const barTop =
      bar.getBoundingClientRect().top;

    if (barTop < window.innerHeight - 50) {

      const width =
        bar.getAttribute("data-width");

      bar.style.width = width;
    }

  });

}

window.addEventListener(
  "scroll",
  animateSkills
);

animateSkills();

// =========================
// COUNTER ANIMATION
// =========================

const counters =
  document.querySelectorAll(".counter");

let counterStarted = false;

function startCounterAnimation() {

  if (counterStarted) return;

  const aboutSection =
    document.getElementById("about");

  const sectionTop =
    aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {

    counters.forEach(counter => {

      const target =
        +counter.getAttribute("data-target");

      let current = 0;

      const increment = target / 60;

      const updateCounter = () => {

        current += increment;

        if (current < target) {

          counter.innerText =
            Math.ceil(current);

          requestAnimationFrame(updateCounter);

        } else {

          counter.innerText = target;
        }

      };

      updateCounter();

    });

    counterStarted = true;
  }

}

window.addEventListener(
  "scroll",
  startCounterAnimation
);

startCounterAnimation();

// =========================
// TYPING EFFECT
// =========================

const typingText =
  document.querySelector(".typing-text");

const text =
  "Information Systems Student • UI/UX Enthusiast • Digital Creative";

let index = 0;

function typingAnimation() {

  if (index < text.length) {

    typingText.textContent += text.charAt(index);

    index++;

    setTimeout(typingAnimation, 45);
  }

}

typingText.textContent = "";

typingAnimation();

// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm =
  document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const inputs =
    contactForm.querySelectorAll("input, textarea");

  let isValid = true;

  inputs.forEach(input => {

    if (input.value.trim() === "") {

      input.style.border =
        "1.5px solid crimson";

      isValid = false;

    } else {

      input.style.border =
        "1.5px solid transparent";
    }

  });

  if (!isValid) {

    alert("Please fill all fields first.");

    return;
  }

  alert("Message sent successfully ✨");

  contactForm.reset();

});

// =========================
// PARALLAX EFFECT
// =========================

const heroBg =
  document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  heroBg.style.transform =
    `translateY(${scrollY * 0.2}px)`;

});

// =========================
// LAZY IMAGE FADE
// =========================

const images =
  document.querySelectorAll("img");

images.forEach(image => {

  image.addEventListener("load", () => {

    image.style.opacity = "1";
    image.style.transition = "0.8s ease";

  });

});