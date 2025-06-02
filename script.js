// Ensure JavaScript is linked correctly in HTML
document.addEventListener("DOMContentLoaded", () => {

    // Step 1: Toggle Navigation Menu (for mobile hamburger menu)
    function toggleMenu() {
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("active");
    }

    // Assuming there's a hamburger icon in HTML
    const menuButton = document.querySelector(".menu-toggle");
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    // Step 2: Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Step 3: Filter Projects by Category
    function filterProjects(category) {
        const projects = document.querySelectorAll("#projects article");
        projects.forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    // Assume there are category buttons in HTML
    document.querySelectorAll(".filter-button").forEach(button => {
        button.addEventListener("click", () => {
            filterProjects(button.dataset.category);
        });
    });

    // Step 4: Lightbox Effect for Project Images
    function openLightbox(imgSrc) {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `<div class="lightbox-content">
                                <img src="${imgSrc}" alt="Project Image">
                                <button class="close-lightbox">Close</button>
                              </div>`;
        document.body.appendChild(lightbox);

        document.querySelector(".close-lightbox").addEventListener("click", () => {
            lightbox.remove();
        });
    }

    document.querySelectorAll("#projects img").forEach(img => {
        img.addEventListener("click", () => {
            openLightbox(img.src);
        });
    });

    // Step 5: Form Validation
    function validateForm(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill in all fields before submitting. I beg you!");
        }
    }

    document.querySelector("form").addEventListener("submit", validateForm);

    // Step 6: Debugging (console logs for verification)
    console.log("JavaScript loaded successfully!");
});
