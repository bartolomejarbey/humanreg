/* ==========================================================================
   Refresh Studio Kadaň — Global JavaScript
   Mobile menu, navbar scroll state, scroll reveal, floating CTA, stat counters.
   ========================================================================== */

(function () {
  "use strict";

  /* --- Mobile Menu Toggle --- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mainNav.querySelectorAll(".main-nav__link").forEach(function (link) {
      // Dropdown toggle (Služby) na mobilu se NEzavírá menu, jen expanduje sub-list
      if (link.classList.contains("main-nav__dropdown-toggle")) return;
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Dropdown link uvnitř Služby — kliknutí zavře celé mobile menu
    mainNav.querySelectorAll(".main-nav__dropdown-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024 && mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  /* --- Služby dropdown toggle (klik = toggle aria-expanded) --- */
  var dropdownToggles = document.querySelectorAll(".main-nav__dropdown-toggle");
  dropdownToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var expanded = btn.getAttribute("aria-expanded") === "true";
      dropdownToggles.forEach(function (other) {
        if (other !== btn) other.setAttribute("aria-expanded", "false");
      });
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-nav__item--dropdown")) {
      dropdownToggles.forEach(function (btn) {
        btn.setAttribute("aria-expanded", "false");
      });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dropdownToggles.forEach(function (btn) {
        btn.setAttribute("aria-expanded", "false");
      });
    }
  });

  /* --- Navbar scroll state + Floating CTA visibility --- */
  var header = document.querySelector(".site-header");
  var floatingCta = document.querySelector(".floating-cta");

  var onScroll = function () {
    var y = window.scrollY;

    if (header) {
      header.classList.toggle("scrolled", y > 80);
    }

    if (floatingCta) {
      floatingCta.classList.toggle("show", y > 600);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Scroll Reveal (IntersectionObserver) --- */
  var revealElements = document.querySelectorAll(".fade-in, .reveal");

  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
      el.classList.add("visible");
    });
  }

  /* --- Stat Counter Animation --- */
  var statNumbers = document.querySelectorAll(".stat-number[data-target]");

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";

    // Pro malá čísla nedává count-up smysl — skoč rovnou na cíl
    if (!isFinite(target) || target <= 5) {
      el.textContent = prefix + target.toLocaleString("cs-CZ") + suffix;
      return;
    }

    var duration = 1800;
    var start = performance.now();

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(target * eased);
      el.textContent = prefix + current.toLocaleString("cs-CZ") + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  if (statNumbers.length > 0 && "IntersectionObserver" in window) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }
})();
