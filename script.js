// ================================
// Mobile Navigation
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {
            menuToggle.textContent = "×";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    // Close menu after clicking a navigation link
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}


// ================================
// Dark / Light Mode
// ================================

const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    // Load saved theme
    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    updateThemeIcon();

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();
    });
}

function updateThemeIcon() {
    if (!themeToggle) return;

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }
}


// ================================
// Scroll Reveal Animations
// ================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    // Fallback for older browsers
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}