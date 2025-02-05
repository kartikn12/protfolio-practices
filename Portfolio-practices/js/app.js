// Header scroll fix
window.onscroll = function () {
  const doScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (doScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};


// Navbar links
const navbar = document.querySelector(".navbar");
const a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  });
});

// Portfolio gallery filter
const filterbtn = document.querySelector("#filterbtn").children;
const items = document.querySelector(".gallery").children;

for (let i = 0; i < filterbtn.length; i++) {
  filterbtn[i].addEventListener("click", function () {
    for (let j = 0; j < filterbtn.length; j++) {
      filterbtn[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target === items[k].getAttribute("data-id") || target === "all") {
        items[k].style.display = "block";
      }
    }
  });
}

// Lightbox functionality
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboximg = lightbox.querySelector("img");

// Show lightbox with the clicked image
const galleryItems = document.querySelectorAll(".item");
galleryItems.forEach(function (element) {
  element.querySelector(".fa-plus").addEventListener("click", function () {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboximg.src = element.querySelector("img").getAttribute("src");
  });
});

// Close lightbox when clicking outside the image or on the close button
lightbox.addEventListener("click", function (event) {
  if (event.target !== lightboximg) {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  }
});

closeLightbox.addEventListener("click", function () {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});
