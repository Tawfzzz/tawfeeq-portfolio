/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        NAVBAR SCROLL EFFECT
=========================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        navbar.style.padding = "15px 8%";

    } else {

        navbar.style.background = "rgba(10,15,28,.75)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 8%";

    }

});

/*=========================================
        ACTIVE NAV LINKS
=========================================*/

const sections = document.querySelectorAll("section, header");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".project-card,.skill-card,.info-card,.contact-card,.about-text,.hero-left,.hero-right"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

/*=========================================
        FLOATING IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".image-wrapper");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 45;

    const y = (window.innerHeight / 2 - e.pageY) / 45;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});

/*=========================================
        HERO TYPING EFFECT
=========================================*/

const typingText = document.querySelector(".hero h2");

const words = [

    "Big Data & Analytics Student",

    "Aspiring Data Analyst",

    "Cloud Data Enthusiast",

    "SQL • Python • Tableau",

    "Power BI Developer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn,.btn-outline,.project-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

/*=========================================
        PRELOADER FADE (OPTIONAL)
=========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(

"%c👋 Welcome to Mohamed Tawfeeq's Portfolio!",

"color:#3B82F6;font-size:18px;font-weight:bold;"

);

console.log(

"%cInterested in collaborating? Feel free to reach out!",

"color:white;font-size:14px;"

);
