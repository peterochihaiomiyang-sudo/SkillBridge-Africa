
// SkillBridge Africa JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Navigation
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to:", link.textContent);
        });
    });

    // Join Us button
    const joinButton = document.querySelector(".join-btn");

    if (joinButton) {
        joinButton.addEventListener("click", function () {
            console.log("Welcome to SkillBridge Africa!");
        });
    }

    // Project cards animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.borderBottomColor = "#075c3b";
        });

        card.addEventListener("mouseleave", function () {
            card.style.borderBottomColor = "#d9a32d";
        });

    });

    // Registration Form
    const registrationForm =
        document.getElementById("registrationForm");

    const formMessage =
        document.getElementById("formMessage");

    if (registrationForm && formMessage) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            formMessage.textContent =
                "Thank you! Your demonstration registration was successful. No information has been sent or stored.";

            registrationForm.reset();

        });

    }

    console.log("SkillBridge Africa website loaded successfully!");

});
