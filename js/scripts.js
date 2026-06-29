// Bezpieczne opakowanie kodu, aby upewnić się, że HTML zdążył się załadować
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. PRZYCISK POWROTU NA GÓRĘ (TOP)
    // ==========================================
    const topBtnElement = document.querySelector("#topBtn");

    if (topBtnElement) {
        window.addEventListener("scroll", () => {
            // Przycisk pojawia się po przewinięciu o 400px
            topBtnElement.style.display = window.scrollY > 400 ? "flex" : "none";
        });

        topBtnElement.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }

    // ==========================================
    // 3. ZMIANA MOTYWU (LIGHT / DARK THEME)
    // ==========================================
    const themeBtn = document.getElementById("themeBtn");

    function loadTheme() {
        const theme = localStorage.getItem("theme");

        if (theme === "light") {
            document.body.classList.add("light");
            if (themeBtn) {
                themeBtn.innerHTML = "🌙";
            }
        } else {
            document.body.classList.remove("light");
            if (themeBtn) {
                themeBtn.innerHTML = "☀️";
            }
        }
    }

    // Wczytanie zapisanego motywu użytkownika na starcie strony
    loadTheme();

    if (themeBtn) {
        themeBtn.onclick = function() {
            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {
                localStorage.setItem("theme", "light");
                themeBtn.innerHTML = "🌙";
            } else {
                localStorage.setItem("theme", "dark");
                themeBtn.innerHTML = "☀️";
            }
        };
    }
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", function () {

        lightbox.classList.add("active");
        lightboxImg.src = this.src;

    });

});
