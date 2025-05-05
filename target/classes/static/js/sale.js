document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script Loaded!");

    // ✅ Mobile menu toggle
    const menuButton = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector("nav");
    const authButtons = document.querySelector(".auth-buttons");

    menuButton.addEventListener("click", function () {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
        authButtons.style.display = authButtons.style.display === "flex" ? "none" : "flex";
    });

    // ✅ Property estimate form submission
    const estimateForm = document.getElementById("property-estimate-form");
    if (estimateForm) {
        estimateForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert(
                "Thank you for submitting your property information. One of our agents will contact you within 24 hours with a valuation estimate."
            );
            estimateForm.reset(); // Reset form
        });
    }

    // ✅ FAQ Toggle Functionality
    console.log("✅ FAQ script loaded!"); // Debugging
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const faqItem = this.closest(".faq-item");
            const answer = faqItem.querySelector(".faq-answer");
            const toggle = faqItem.querySelector(".faq-toggle");
            const isActive = faqItem.classList.contains("active");

            // Close all other FAQ items
            document.querySelectorAll(".faq-item").forEach((item) => {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = "0px";
                item.querySelector(".faq-toggle").textContent = "+";
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                faqItem.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                toggle.textContent = "-";
            }
        });
    });

    // ✅ Testimonial Slider Functionality
    let currentSlide = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".slider-dot");
    const slidesContainer = document.querySelector(".testimonials-container");

    if (testimonials.length > 0 && dots.length > 0 && slidesContainer) {
        function goToSlide(index) {
            currentSlide = index;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; // ✅ Fixed template literal

            // Update active dot
            dots.forEach((dot) => dot.classList.remove("active"));
            dots[currentSlide].classList.add("active");
        }

        // Add event listeners to dots
        dots.forEach((dot, index) => {
            dot.addEventListener("click", function () {
                goToSlide(index);
            });
        });

        // Auto slide every 5 seconds
        setInterval(function () {
            currentSlide = (currentSlide + 1) % testimonials.length;
            goToSlide(currentSlide);
        }, 5000);
    }
});
