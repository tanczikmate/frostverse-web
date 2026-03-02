document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.querySelector(".navbar-toggler");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuLinks = document.querySelectorAll("#mobileMenu a");
    const menuIcon = document.getElementById("menuIcon");

    function closeMenu() {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

    toggleBtn.addEventListener("click", function () {
        if (window.innerWidth <= 992) {

            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");

            if (mobileMenu.classList.contains("active")) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
            } else {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

});