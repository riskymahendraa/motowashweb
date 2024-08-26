document.addEventListener("scroll", function () {
  var element = document.querySelector(".about-page");
  var position = element.getBoundingClientRect();

  // Checking if the element is in the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
});

document.addEventListener("scroll", function () {
  var element = document.getElementById("services");
  var position = element.getBoundingClientRect();

  // Checking if the element is in the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
});

document.addEventListener("scroll", function () {
  var element = document.getElementById("detail_kontak");
  var position = element.getBoundingClientRect();

  // Checking if the element is in the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
});

const active = document.querySelectorAll(".link-animation");

active.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all active
    active.forEach((l) => l.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
