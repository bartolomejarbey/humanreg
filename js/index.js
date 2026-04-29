/* ==========================================================================
   Refresh Studio Kadaň — Homepage JavaScript
   Hero clean→darken→fade-in timing, video cinema overlay, reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  /* --- Hero intro: 3s clean video → darken overlay → fade-in content --- */
  var heroOverlay = document.getElementById("heroOverlay");
  var heroContent = document.getElementById("heroContent");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    if (heroOverlay) heroOverlay.classList.add("darken");
    if (heroContent) heroContent.classList.add("visible");
  } else {
    if (heroOverlay) {
      setTimeout(function () {
        heroOverlay.classList.add("darken");
      }, 3000);
    }
    if (heroContent) {
      setTimeout(function () {
        heroContent.classList.add("visible");
      }, 3800);
    }
  }

  /* --- Video Cinema Overlay (play button → expanded YouTube) --- */
  var playBtn = document.querySelector(".hero__play-btn");
  var cinema = document.getElementById("videoCinema");
  var cinemaFrame = document.getElementById("cinemaFrame");
  var closeBtn = cinema ? cinema.querySelector(".video-cinema__close") : null;

  if (playBtn && cinema && cinemaFrame && closeBtn) {
    var videoId = playBtn.getAttribute("data-video-id");

    function openCinema() {
      cinemaFrame.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0&modestbranding=1";
      cinema.classList.add("is-active");
      document.body.style.overflow = "hidden";
      closeBtn.tabIndex = 0;
      closeBtn.focus();
    }

    function closeCinema() {
      cinema.classList.remove("is-active");
      document.body.style.overflow = "";
      closeBtn.tabIndex = -1;
      cinemaFrame.src = "about:blank";
      playBtn.focus();
    }

    playBtn.addEventListener("click", openCinema);
    closeBtn.addEventListener("click", closeCinema);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && cinema.classList.contains("is-active")) {
        closeCinema();
      }
    });

    cinema.addEventListener("click", function (e) {
      if (e.target === cinema) {
        closeCinema();
      }
    });
  }

  /* --- Reduced-motion: pause hero video if user prefers --- */
  var heroVideo = document.querySelector(".hero__video-bg video");
  if (heroVideo && reducedMotion) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
  }

  /* --- Hero AR sync: nastav aspect-ratio kontejneru přesně podle videa.
     Tím dosáhneme: žádné černé pruhy (jako u contain), žádný crop loga
     (jako u cover) — protože kontejner má přesný AR videa.
     POZN: pod 768px (mobil) AR nepřepisuje — tam má hero auto height
     a min-height z CSS, jinak by hero text přetékal. --- */
  var heroEl = document.querySelector(".hero");
  if (heroVideo && heroEl) {
    var applyAspectIfDesktop = function () {
      if (window.innerWidth < 768) {
        heroEl.style.aspectRatio = "";
        return;
      }
      if (heroVideo.videoWidth > 0 && heroVideo.videoHeight > 0) {
        heroEl.style.aspectRatio = heroVideo.videoWidth + " / " + heroVideo.videoHeight;
      }
    };
    if (heroVideo.readyState >= 1) {
      applyAspectIfDesktop();
    } else {
      heroVideo.addEventListener("loadedmetadata", applyAspectIfDesktop);
    }
    // Re-apply on resize (přepnutí orientace, devtools)
    window.addEventListener("resize", applyAspectIfDesktop);
  }
})();
