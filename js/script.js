document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navBar = document.querySelector('.nav-bar');
    
    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('open');
        this.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-bar nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
