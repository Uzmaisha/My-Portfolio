// Typing Effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Frontend Developer", "Graphic Designer", "Freelancer", "Figma Artist"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', function () {
    const moreText = this.previousElementSibling;
    moreText.classList.toggle('show');
    if (moreText.classList.contains('show')) {
      this.textContent = "Show Less";
    } else {
      this.textContent = "Learn More";
    }
  });
});
function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay + 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (words.length) setTimeout(type, 500);
});

// Entry Animation
window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 300);
  });
});
// Services: toggle expand
document.querySelectorAll('.learn-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.service-card');
    const expanded = card.classList.toggle('expanded');
    btn.textContent = expanded ? 'Show Less' : 'Learn More';
    // optional: scroll into view when expanded on mobile
    if (expanded && window.innerWidth < 700) {
      setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
    }
  });
});

function animateSkills() {
  // Technical Skills Bars
  document.querySelectorAll('.progress').forEach(bar => {
    const target = parseInt(bar.getAttribute('data-progress'));
    let count = 0;
    const percentText = bar.querySelector('.percent');
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        percentText.textContent = count + '%';
        bar.style.width = count + '%';
      }
    }, 15);
  });

  // Professional Skills Circles
  document.querySelectorAll('.circle').forEach(circle => {
    const target = parseInt(circle.getAttribute('data-percent'));
    let count = 0;
    const percentText = circle.querySelector('.percent');
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        percentText.textContent = count + '%';
        circle.style.background = `conic-gradient(#ff69b4 ${count}%, #ffe4e1 0%)`;
      }
    }, 20);
  });
}

// Trigger animation on scroll
function checkScroll() {
  const section = document.querySelector('.skills-section');
  const position = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    animateSkills();
    window.removeEventListener('scroll', checkScroll);
  }
}

window.addEventListener('scroll', checkScroll);
// Projects Fade-In Animation on Load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 300);
  });
});
