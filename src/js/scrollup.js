let btn = document.querySelector(".scroll-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "flex";
    btn.classList.add("show");
  } else {
    btn.style.display = "none";
        btn.classList.remove("show");

  }
}

function topFunction() {
  window.scrollTo({
  top: 0,
  behavior: "smooth",
})
}

btn.addEventListener('click', topFunction)


