// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*slideshow*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var amazing = document.getElementById("Amazing");
var gold = document.getElementById("Gold");
var seen = document.getElementById("Seen");
var capable = document.getElementById("Capable");
var strong = document.getElementById("Strong");
var trying = document.getElementById("Trying");

function play1() {
 amazing.play();
}
function play2() {
  gold.play();
 }
function play3() {
 seen.play();
}
function play4() {
   capable.play();
}
function play5() {
   strong.play();
}
function play6() {
   trying.play();
}
$("#about").click(function() {
  $("html,body").animate({
    scrollTop: $(".aboutus").offset().top},
    "slow");
});
$("#donate").click(function() {
  $("html,body").animate({
    scrollTop: $(".donateToday").offset().top},
    "slow");
});
$("#support").click(function() {
  $("html,body").animate({
    scrollTop: $(".support").offset().top},
    "slow");
});
$("#helping").click(function() {
  $("html,body").animate({
    scrollTop: $(".helpinghands").offset().top},
    "slow");
});
$("#information").click(function() {
  $("html,body").animate({
    scrollTop: $(".info").offset().top},
    "slow");
});
