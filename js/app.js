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
let banner_beer=document.querySelector(".banner_beer");

btn_beer.style.display="none";
play_again.style.display="none";
let x=8400;
let img_width=375;
let time=0;
let click=0;
let MyInterval;




function again() {

btn_start.addEventListener("click",function (event) {
  btn_start.style.display="none";
  banner_beer.style.display="none";
  btn_beer.style.display="block";
  MyInterval=  setInterval(function () {
    time++;
    p_win.innerText="Twój czas to : " + time;
  },100);

});



btn_beer.addEventListener("click",function (event) {
  click++;
  x++;


  counter=x-img_width;
  gif_div.style.backgroundPosition=counter+"px";
  img_width=img_width + 350;
  if (click>22) {
    btn_beer.style.display="none";
    play_again.style.display="block";
    clearInterval(MyInterval);

  }

});


}

// btn_start.addEventListener("mouseover", function (event) {
//   time=0;
//   x=2;
//   counter=0;
// })
  again();

play_again.addEventListener("click", function (event) {
  click=0;
  time=0;
  x=2;
  counter=0;
  img_width=375;
  gif_div.style.backgroundPosition=-350+"px";
  p_win.innerText='';
  btn_start.style.display="block";
  banner_beer.style.display="block";
  play_again.style.display="none";
  // again();
})


//////////////////////////
//SLIDE23
let textHi_back="Aby oglądnąć zejdź niżej";
let textHi="Witam na stronie mojego portfolio!";
let puls_back=document.querySelector(".puls2");
let puls=document.querySelector(".puls");
let length_puls2= textHi_back.length;

let letter=0;
let back_letter=length_puls2;

let letterInterval=setInterval(function () {
  letter++;
  puls.innerText=textHi.substr(0,letter);
  if (letter >33) {
    clearInterval(letterInterval);
  }
},150);




let back_letterInterval=setInterval(function () {
  back_letter--;
  puls_back.innerText=textHi_back.substr(back_letter,length_puls2);
    if (back_letter <= 0) {
    clearInterval(back_letterInterval);
  }
},200)










     });
