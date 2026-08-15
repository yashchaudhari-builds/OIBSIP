// ===============================
// TYPING ANIMATION
// ===============================

const text = [
    "Yash Chaudhari",
    "Web Developer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    if (i < text.length) {

        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        }

        else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.getElementById("typing").textContent = current;

        if (j === text[i].length) {
            isDeleting = true;
        }

        if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ===============================
// CARD SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll('.card');

function showCards() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener('scroll', showCards);

// Run once when page loads
showCards();