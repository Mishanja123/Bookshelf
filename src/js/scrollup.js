let btn = document.querySelector(".scroll-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
    btn.classList.add("show");
  } else {
    btn.style.display = "none";
        btn.classList.remove("show");

  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

btn.addEventListener('click', topFunction)


