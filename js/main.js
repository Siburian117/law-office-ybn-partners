/* ==================================================
   YBN & PARTNERS
   MAIN JAVASCRIPT
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ==========================================
           MOBILE MENU
        ========================================== */

        const menuToggle =
            document.querySelector(".menu-toggle");

        const mobileMenu =
            document.querySelector(".mobile-menu");


        if (menuToggle && mobileMenu) {


            menuToggle.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.toggle("active");

                }
            );


            const mobileLinks =
                mobileMenu.querySelectorAll("a");


            mobileLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            mobileMenu.classList.remove(
                                "active"
                            );

                        }
                    );

                }
            );

        }


        /* ==========================================
           HEADER SCROLL
        ========================================== */

        const header =
            document.querySelector(".site-header");


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 50) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            }
        );


        /* ==========================================
           SCROLL REVEAL
        ========================================== */

        const revealElements =
            document.querySelectorAll(
                ".section-heading, .value-card, .practice-card, .lawyer-card, .contact-block"
            );


        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                revealObserver.observe(
                    element
                );

            }
        );


    }
);
