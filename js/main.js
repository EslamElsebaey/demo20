window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    navigation: {
      nextEl: ".mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  //**************************************************************************************************

  // Donation Counter
  document.querySelectorAll(".donation-counter").forEach((counter) => {
    const incrementBtn = counter.querySelector(".increment");
    const decrementBtn = counter.querySelector(".decrement");
    const num = counter.querySelector(".num");

    incrementBtn.addEventListener("click", () => {
      let current = parseInt(num.textContent);
      num.textContent = current + 1;
    });

    decrementBtn.addEventListener("click", () => {
      let current = parseInt(num.textContent);
      if (current > 1) {
        num.textContent = current - 1;
      }
    });
  });
  //**************************************************************************************************

  // Donation Modal
  let body = document.querySelector("body");
  let donationModal = document.querySelector(".donation-modal");
  let donateBtns = document.querySelectorAll(".program-item .donate-btn");
  let donationBox = document.querySelector(".donation-box");
  let closeBoxBtns = document.querySelectorAll(".closeBoxBtn");

  if (donateBtns && donationModal && donationBox && closeBoxBtns) {
    donateBtns.forEach((donateBtn) => {
      donateBtn.addEventListener("click", function () {
        if (donationModal) {
          donationModal.classList.add("show");
        }
        donationBox.classList.add("transition-donation-box");
        body.classList.add("overflowHidden");
      });
    });

    closeBoxBtns.forEach((closeBoxBtn) => {
      closeBoxBtn.addEventListener("click", function () {
        donationModal.classList.remove("show");
        donationBox.classList.remove("transition-donation-box");
        body.classList.remove("overflowHidden");
      });
    });

    donationModal.addEventListener("click", function () {
      donationModal.classList.remove("show");
      donationBox.classList.remove("transition-donation-box");
      body.classList.remove("overflowHidden");
    });

    donationBox.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  //**************************************************************************************************

  // show and hide search

  let openSearch = document.querySelector(".open-search");
  let search = document.querySelector(".search");
  let searchForm = document.querySelector(".search-form");

  if (openSearch && search && searchForm) {
    openSearch.addEventListener("click", function () {
      search.classList.toggle("show-search-box");
      body.classList.add("overflowHidden");
    });

    search.addEventListener("click", function () {
      this.classList.remove("show-search-box");
      body.classList.remove("overflowHidden");
    });

    searchForm.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  //**************************************************************************************************

  // open and close side Menu
  let openNavBtn = document.querySelector(".openNavBtn");
  let siteNav = document.querySelector(".site-nav");
  let closeNavBtn = document.querySelector(".closeNavBtn");
  if (openNavBtn && siteNav && closeNavBtn) {
    openNavBtn.addEventListener("click", function () {
      siteNav.classList.add("show-site-nav");
      body.classList.add("overflowHidden");
    });

    closeNavBtn.addEventListener("click", function () {
      siteNav.classList.remove("show-site-nav");
      body.classList.remove("overflowHidden");
    });
  }

  //**************************************************************************************************

  // Fixed Header

  let header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    });
  }

  // **************************************************************************************************

  // Footer mobile nav

  let titles = document.querySelectorAll(".footer-item-title");
  if (window.innerWidth < 768) {
    titles.forEach((title) => {
      title.addEventListener("click", function (e) {
        e.preventDefault();
        const Collapsible = this.nextElementSibling;

        if (Collapsible.style.maxHeight) {
          Collapsible.style.maxHeight = null;
          this.classList.remove("arrow-rotate");
        } else {
          titles.forEach((other) => {
            if (other !== this) {
              const otherCollapsible = other.nextElementSibling;
              if (
                otherCollapsible &&
                otherCollapsible.classList.contains("collapsible")
              ) {
                otherCollapsible.style.maxHeight = null;
                other.classList.remove("arrow-rotate");
              }
            }
          });
          Collapsible.style.maxHeight = Collapsible.scrollHeight + "px";
          this.classList.add("arrow-rotate");
        }
      });
    });
  }

  // **************************************************************************************************

  // to top button

  let toTopBtn = document.querySelector(".toTop");
  if (toTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        toTopBtn.classList.add("showToTop");
      } else {
        toTopBtn.classList.remove("showToTop");
      }
    });

    toTopBtn.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
  }

  // **************************************************************************************************
}); // End of document ready
