document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Script Loaded!");

    // ✅ Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');

    if (menuButton && nav && authButtons) {
        menuButton.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // ✅ Contact form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const name = document.getElementById('name')?.value || "Guest";
            const email = document.getElementById('email')?.value;
            const phone = document.getElementById('phone')?.value;
            const subject = document.getElementById('subject')?.value;
            const message = document.getElementById('message')?.value;

            alert(`Thank you for your message, ${name}! We'll get back to you shortly.`);

            // Reset the form
            contactForm.reset();
        });
    }

    // ✅ FAQ Toggle Functionality
    console.log("✅ FAQ script loaded!");

    const faqQuestions = document.querySelectorAll(".faq-question");

    if (faqQuestions.length === 0) {
        console.warn("⚠ No FAQ questions found! Make sure your HTML contains .faq-question elements.");
        return; // Stop script if no FAQ items exist
    }

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const faqItem = this.closest(".faq-item");
            const answer = faqItem.querySelector(".faq-answer");
            const toggleIcon = faqItem.querySelector(".faq-icon");

            if (!answer || !toggleIcon) {
                console.error("⚠ Missing FAQ elements inside:", faqItem);
                return;
            }

            const isActive = faqItem.classList.contains("active");

            // Close all other FAQ items before opening the clicked one
            document.querySelectorAll(".faq-item").forEach((item) => {
                item.classList.remove("active");
                const itemAnswer = item.querySelector(".faq-answer");
                const itemToggle = item.querySelector(".faq-icon");

                if (itemAnswer) itemAnswer.style.maxHeight = "0px";
                if (itemToggle) itemToggle.textContent = "+";
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                faqItem.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
                toggleIcon.textContent = "-";
            } else {
                faqItem.classList.remove("active");
                answer.style.maxHeight = "0px"; // Collapse the answer
                toggleIcon.textContent = "+";
            }
        });
    });

    console.log("✅ FAQ functionality initialized successfully!");
});
