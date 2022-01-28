const body = document.body.style;
var footer = document.querySelector(".footer");

window.addEventListener('scroll', function () {
    footer.style.display = "none";
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.display = "block";
  }
});