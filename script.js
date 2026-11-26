// SkillBridge Africa JavaScript

console.log("Welcome to SkillBridge Africa!");

document.addEventListener("DOMContentLoaded", function () {

    // Registration form
    const skillsForm = document.getElementById("skillsForm");
    const formMessage = document.getElementById("formMessage");

    if (skillsForm && formMessage) {
        skillsForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value;

            formMessage.textContent =
                "Thank you, " + fullName +
                "! Your profile has been received successfully.";

            skillsForm.reset();
        });
    }

    // Opportunity filters
    const filterButtons = document.querySelectorAll(".filter-button");
    const opportunityCards = document.querySelectorAll(".opportunity-card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            opportunityCards.forEach(function (card) {

                const matches =
                    selectedCategory === "all" ||
                    card.dataset.category === selectedCategory;

                card.style.display = matches ? "block" : "none";

            });

        });

    });

});