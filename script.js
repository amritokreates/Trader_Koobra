// ==============================
// Elements
// ==============================

const card = document.querySelector(".card");
const joinBtn = document.querySelector(".join-btn");
const boxes = document.querySelectorAll(".box");
const liveBadge = document.querySelector(".live-badge");

// ==============================
// Card Mouse Tilt
// ==============================

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (0.5 - y / rect.height) * 12;

    card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
    `;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

});

// ==============================
// Button Ripple Effect
// ==============================

joinBtn.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.left = (e.clientX - rect.left - size / 2) + "px";
    circle.style.top = (e.clientY - rect.top - size / 2) + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {

        circle.remove();

    }, 700);

});

// ==============================
// Scroll Reveal
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

boxes.forEach(box => {

    observer.observe(box);

});

// ==============================
// Floating Animation
// ==============================

setInterval(() => {

    card.animate([

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-6px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 3500,
        easing: "ease-in-out"

    });

}, 3500);

// ==============================
// Live Badge Glow
// ==============================

setInterval(() => {

    liveBadge.classList.toggle("active");

}, 900);

// ==============================
// Counter Animation
// ==============================

const numbers = document.querySelectorAll(".box h2");

numbers.forEach(el => {

    const text = el.innerText;

    const match = text.match(/\d+/);

    if (!match) return;

    const end = parseInt(match[0]);

    let start = 0;

    const timer = setInterval(() => {

        start += Math.ceil(end / 50);

        if (start >= end) {

            start = end;

            clearInterval(timer);

        }

        el.innerText = text.replace(match[0], start);

    }, 20);

});