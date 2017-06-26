$(document).ready(function (){

//arrow-1
$(".arrow_1").click(function (){
   $('html, body').animate({
     scrollTop: $('#slide_2').offset().top
}, 500, 'linear');
});
// arrow_2_top
$(".arrow_2_top").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_1').offset().top
}, 500, 'linear');
});
// arrow_2_down
$(".arrow_2_down").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_3').offset().top
}, 500, 'linear');
});
// arrow_3_top
$(".arrow_3_top").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_2').offset().top
}, 500, 'linear');
});
// arrow_3_down
$(".arrow_3_down").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_4').offset().top
}, 500, 'linear');
});
// arrow_4_top
$(".arrow_4_top").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_3').offset().top
}, 500, 'linear');
});


//menu
//fa-gamepad
$(".fa-gamepad").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_2').offset().top
}, 500, 'linear');
});

//menu mobile
$(".fix").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_1').offset().top
}, 500, 'linear');
});

$(".fa-gamepad_click").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_2').offset().top
}, 500, 'linear');
});

$(".fa-code_click").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_3').offset().top
}, 500, 'linear');
});

$(".fa-envelope_click").click(function (){
    $('html, body').animate({
      scrollTop: $('#slide_4').offset().top
}, 500, 'linear');
});
//menu burger


$(".menu-burger").click(function () {

		event.preventDefault();
  $(this).toggleClass("color");
  $(this).next().slideToggle();
  $(this).next().css("display","block")
})
///////////////////////////////////////////////////

let slider = document.querySelector(".slider_main");
let ulAll = slider.querySelectorAll("ul");
[...ulAll].forEach(function (ul) {
  ul.classList.add("slider");
});

let left_arr=document.querySelector(".arrow_2_left");//wybieram guzik next
let right_arr=document.querySelector(".arrow_2_right");

var liAll=[...document.querySelectorAll(".slider li")];
var count=0;

liAll[count].classList.add("visible");

right_arr.addEventListener("click",function (event) {


  liAll[count].classList.remove("visible");
  if (count>=liAll.length -1) {
    count = -1;
  }
  count++;

  liAll[count].classList.add("visible");

});
left_arr.addEventListener("click",function (event) {
  liAll[count].classList.remove("visible");
  if (count <= 0) {
    count=liAll.length;
  }
  count--;
  liAll[count].classList.add("visible");
});



function DomContentLoaded() {

}
DomContentLoaded();










     });
