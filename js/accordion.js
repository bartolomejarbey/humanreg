/* ==========================================================================
   Refresh Studio — FAQ Accordion
   Used on human-regenerator.html and ems-kegel-chair.html
   ========================================================================== */

(function () {
  "use strict";

  var faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq__question");
    var answer = item.querySelector(".faq__answer");

    if (!btn || !answer) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // Close all other items
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          var otherAnswer = other.querySelector(".faq__answer");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          var otherBtn = other.querySelector(".faq__question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove("is-open");
        answer.style.maxHeight = null;
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
