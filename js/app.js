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

  liAll[count].classList.add("w3-animate-right");

});


left_arr.addEventListener("click",function (event) {
  liAll[count].classList.remove("visible");
  if (count <= 0) {
    count=liAll.length;
  }
  count--;
  liAll[count].classList.add("visible");
  liAll[count].classList.add("w3-animate-left");

});

//////////////////////////////////
// DRINK BEER

let btn_beer=document.querySelector(".btn_beer");
let gif_div=document.querySelector(".gif");
let p_win=document.querySelector(".win");
let btn_start=document.querySelector(".btn_start");
let play_again=document.querySelector(".play_again");
btn_beer.style.display="none";
play_again.style.display="none";
let x=2;
let time=0;


btn_start.addEventListener("click",function (event) {
  btn_start.style.display="none";
  btn_beer.style.display="block";
  let MyInterval=  setInterval(function () {
    time++;
    p_win.innerText="Twój czas to : " + time;
  },100);




btn_beer.addEventListener("click",function (event) {
  x++;
  let count=200*x;
  gif_div.style.backgroundPosition=count+"px";
  console.log(count + x);
  if (count>2000) {
    btn_beer.style.display="none";
    play_again.style.display="block";
    clearInterval(MyInterval);
  }



  if (count>1000) {

  }
})


});


function DomContentLoaded() {

}
DomContentLoaded();










     });
