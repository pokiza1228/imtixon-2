const faqs = document.querySelector(".faqs__item-btn");

faqs.addEventListener("click", function() {
    faqs.classList.toggle("faqs__item-btn--opened");
})


const burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    burger.classList.toggle("burger--opened");
})


