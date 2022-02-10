const faqs = document.querySelector(".faqs__item-btn");
const burger = document.querySelector(".burger");


faqs.addEventListener("click", function() {
    faqs.classList.toggle("faqs__item-btn--opened");
})
burger.addEventListener("click", function() {
    burger.classList.toggle("burger--opened");
})