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
var countClick=0;

liAll[countClick].classList.add("visible");

right_arr.addEventListener("click",function (event) {


  liAll[countClick].classList.remove("visible");
    if (countClick>=liAll.length -1) {
      countClick = -1;
    }
    countClick++;

  liAll[countClick].classList.add("visible");

  liAll[countClick].classList.add("w3-animate-right");

});


left_arr.addEventListener("click",function (event) {
  liAll[countClick].classList.remove("visible");
    if (countClick <= 0) {
      countClick=liAll.length;
    }
  countClick--;
  liAll[countClick].classList.add("visible");
  liAll[countClick].classList.add("w3-animate-left");

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




let back_letterInterval=setTimeout(function () {
  puls_back.innerText=textHi_back
},5500)



//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//CHINCZYK//
});

document.addEventListener("DOMContentLoaded", function () {

const cube=document.querySelector(".cube");
const btn_thru=document.querySelector(".btn_thru");
const btn_thru3=document.querySelector(".btn_thru3");
const player1=document.querySelector(".field-1");
const doIt=document.querySelector(".doIt");
const doIt2=document.querySelector(".doIt2");
const doIt3=document.querySelector(".doIt3");
const play_two_player=document.querySelector(".two_player");
const play_three_player=document.querySelector(".three_player");
const How_many_players=document.querySelector(".How_many_players");
const again_chine=document.querySelector(".again_chine");
const task=document.querySelector(".task");
const win50=document.querySelector(".field-50");
player1.style.backgroundColor="red";
cube.style.display="none";
task.style.display="none";

function RandomNumber() {
  return Math.floor((Math.random() * 6) + 1);
  // return 5;
}

/////click cube
let turn=1;
let count=1;
let count2=1
let count3=1
const arr=[
  "Piją wszyscy","Pijesz Ty i kolega","Arek stawia WSZYSTKIM !","Mateusz gdzie jest to PIWo !?","Każ wypić komuś 2 razy",
  "Wracasz na start!","Iza gdzie jest to PIWo !?","Pije ślicznotka, którą wybierzesz","Opuszczasz kojelkę",
  "Jak skończy się alko to idziesz je kupić","Pijesz Tyle ile masz oczu","PIJ! :)","Mateusz stawia WSZYSTKIM !","Piją Ci co mają wiek nieparzysty",
  "Ola stawia WSZYSTKIM !","Cofasz się na pole 9","Nie masz przy sobie 10zł, pijesz","Pijecie wszyscy",
  "Kto jest przed Tobą, pije","Ten kto ma najmniej monet przy sobie pije","Pije każdy kto ma siostrę","JEEEZUU pijżesz","Rzuć monetą, będzie orzeł to pij- jak prawdziwy POLAK",
  "Wracasz na 7 i pijesz jeszcze raz","Piją wszyscy","Antoni gdzie jest to PIWo !?","Piją wszyscy oprócz Cb","Piją Chłopaki",
  "Marek gdzie jest to PIWo !?","Wracasz na start!","Ktoś Pije dwa Razy","Pije ślicznotka, którą wybierzesz","Opuszczasz kojelkę",
  "Jak skończy się alko to idziesz je kupić","Pijesz Tyle ile masz oczu","PIJ! :)","NIC","Piją Ci co mają wiek nieparzysty",
  "Zbyszek stawia WSZYSTKIM !","Cofasz się na pole 9","Nie masz przy sobie 10zł, pijesz","Pijecie wszyscy",
  "Kto jest przed Tobą, pije","Piotrek stawia WSZYSTKIM !","Pije każdy kto ma siostrę","JEEEZUU pijżesz","Rzuć monetą, będzie orzeł to pij- jak prawdziwy POLAK",
  "Wracasz na 7 i pijesz jeszcze raz","Wraczasz na Start","WYGRAŁEŚ",
];




let current=document.querySelector(".field-1");
let current2=document.querySelector(".field-1");
let current3=document.querySelector(".field-1");
let currnet_mix1;
let currnet_mix2;
let currnet_mix3;
let go;
let go2;
let go3;


function again_chine_fn() {
  again_chine.classList.add("visible");


}


btn_thru.addEventListener("click",function(){
  if (turn%2!==0) {
    btn_thru.style.backgroundColor="blue"
    btn_thru.innerText="Rzuca Grasz 2"

    doIt.innerText="WYGRAŁEŚ";
    if (count >=50) {
    again_chine_fn();
    win50.style.backgroundColor="gold";



  }
    else{
      player1.style.background="none";
      current=document.querySelector(".field-"+count);
      let numberClass=RandomNumber();
      current.style.background="none";
      count=count + numberClass;
      go=document.querySelector(".field-"+count);
      go.style.backgroundColor="red";
      doIt.innerText=arr[count];
      doIt.style.color="red";

  if (count == 5 || count == 49 || count==30) {
    count=1;
    current=document.querySelector(".field-1");
    go.style.background="none";
    current.style.backgroundColor="red";
  }

  if(count ==15 || count==39){
    count=9;
    current=document.querySelector(".field-9");
    go.style.background="none";
    current.style.backgroundColor="red";
  }
  if(count ==23 || count ==47){
    count=7;
    current=document.querySelector(".field-7");
    go.style.background="none";
    current.style.backgroundColor="red";
  }
  if (numberClass == 1 ) {
      cube.style.backgroundPosition="-12px";
  }
    else if (numberClass == 2) {
      cube.style.backgroundPosition="-83px";
  }
    else if (numberClass == 3 ) {
      cube.style.backgroundPosition="-83px -83px";
  }
    else if (numberClass == 4 ) {
      cube.style.backgroundPosition="-83px 85px";
  }
    else if (numberClass == 5 ) {
      cube.style.backgroundPosition="-225px";
  }
    else if (numberClass == 6 ) {
      cube.style.backgroundPosition="-155px";
  }
}
doIt2.innerText='';
}//Kociec PL1



else{   //player 2
    btn_thru.style.backgroundColor="red"
      btn_thru.innerText="Rzuca Grasz 1"
  if (count2 >=50) {
    doIt2.innerText="WYGRAŁEŚ";
    current=document.querySelector(".field-1");
    current2=document.querySelector(".field-2");
    win50.style.backgroundColor="gold";
    again_chine_fn();

  }
    else{
      player1.style.background="none";
      let numberClass=RandomNumber();
      current2=document.querySelector(".field-"+count2);
      current2.style.background="none";
      count2=count2 + numberClass;
      go2=document.querySelector(".field-"+count2);
      go2.style.backgroundColor="blue";
      doIt2.innerText=arr[count2];
      doIt2.style.color="blue";

  if (count == 5 || count == 49 || count==30) {
      count2=1;
      current2=document.querySelector(".field-1");
      go2.style.background="none";
      current2.style.backgroundColor="blue";
  }
  if(count2 ==15  || count==39){
      count2=9;
      current2=document.querySelector(".field-9");
      go2.style.background="none";
      current2.style.backgroundColor="blue";
  }if(count2 ==24 || count ==47){
      count2=7;
      current2=document.querySelector(".field-7");
      go2.style.background="none";
      current2.style.backgroundColor="blue";
  }
  if (numberClass == 1 ) {
      cube.style.backgroundPosition="-12px";
  }
    else if (numberClass == 2) {
        cube.style.backgroundPosition="-83px";
  } else if (numberClass == 3 ) {
      cube.style.backgroundPosition="-83px -83px";
  }
    else if (numberClass == 4 ) {
      cube.style.backgroundPosition="-83px 85px";
  }
    else if (numberClass == 5 ) {
      cube.style.backgroundPosition="-225px";
  }
    else if (numberClass == 6 ) {
      cube.style.backgroundPosition="-155px";
  }


  }
doIt.innerText='';
 }

 currnet_mix2=document.querySelector(".field-"+count2);
 currnet_mix1=document.querySelector(".field-"+count);
   if (count==count2) {
     currnet_mix1.classList.add("mix12")
     currnet_mix2.classList.add("mix12");
   }
    else{
       currnet_mix2.classList.remove("mix12");
       currnet_mix1.classList.remove("mix12");
     }
 turn++;//Koniec PL2
//
///koniec Two_player
});//koniec CLICK
/////click cube
///////////////////////////
// trzech graczy



btn_thru3.addEventListener("click",function(){
  if (turn==1) {
    btn_thru3.style.backgroundColor="blue"
    btn_thru3.innerText="Rzuca Grasz 2"
  if (count >=50) {
    doIt.innerText="WYGRAŁEŚ";
    again_chine_fn();
    win50.style.backgroundColor="gold";



  }
    else{
      player1.style.background="none";
      let numberClass=RandomNumber();
      let current=document.querySelector(".field-"+count);
      current.style.background="none";

      count=count + numberClass;
      go=document.querySelector(".field-"+count);
      go.style.backgroundColor="red";

      doIt.innerText=arr[count];
      doIt.style.color="red";
  if (count == 5 || count == 49 || count==30) {
    count=1;
    let current=document.querySelector(".field-1");
    go.style.background="none";
    current.style.backgroundColor="red";
  }
  if(count ==15 || count==39){
    count=9;
    let current=document.querySelector(".field-9");
    go.style.background="none";
    current.style.backgroundColor="red";
  }if(count ==24 || count ==47){
    count=7;
    let current=document.querySelector(".field-7");
    go.style.background="none";
    current.style.backgroundColor="red";
  }
  if (numberClass == 1 ) {
      cube.style.backgroundPosition="-12px";
  }
    else if (numberClass == 2) {
      cube.style.backgroundPosition="-83px";
  }
    else if (numberClass == 3 ) {
      cube.style.backgroundPosition="-83px -83px";
  }
    else if (numberClass == 4 ) {
      cube.style.backgroundPosition="-83px 85px";
  }
    else if (numberClass == 5 ) {
      cube.style.backgroundPosition="-225px";
  }
    else if (numberClass == 6 ) {
      cube.style.backgroundPosition="-155px";
  }


}
 turn++;
doIt2.innerText='';
doIt3.innerText='';
}//Kociec PL1



else if(turn==2){   //player 2
  btn_thru3.style.backgroundColor="green"
  btn_thru3.innerText="Rzuca Grasz 3"
  if (count2 >=50) {
    doIt2.innerText="WYGRAŁEŚ";
    again_chine_fn();
    win50.style.backgroundColor="gold";
  }
    else{
      player1.style.background="none";
      let numberClass=RandomNumber();
      let current2=document.querySelector(".field-"+count2);
      current2.style.background="none";
      count2=count2 + numberClass;
      go2=document.querySelector(".field-"+count2);
      go2.style.backgroundColor="blue";
      doIt2.innerText=arr[count2];
      doIt2.style.color="blue";
  if (count2 == 5 || count2 == 49 || count==30) {
    count2=1;
    let current2=document.querySelector(".field-1");
    go2.style.background="none";
    current2.style.backgroundColor="blue";
  }
  if(count2 ==15 || count==39){
    count2=9;
    let current2=document.querySelector(".field-9");
    go2.style.background="none";
    current2.style.backgroundColor="blue";
  }if(count2 ==24 || count ==47){
    count2=7;
    let current2=document.querySelector(".field-7");
    go2.style.background="none";
    current2.style.backgroundColor="blue";
  }
  if (numberClass == 1 ) {
      cube.style.backgroundPosition="-12px";
  }
    else if (numberClass == 2) {
      cube.style.backgroundPosition="-83px";
  }
    else if (numberClass == 3 ) {
      cube.style.backgroundPosition="-83px -83px";
  }
    else if (numberClass == 4 ) {
      cube.style.backgroundPosition="-83px 85px";
  }
    else if (numberClass == 5 ) {
      cube.style.backgroundPosition="-225px";
  }
    else if (numberClass == 6 ) {
      cube.style.backgroundPosition="-155px";
  }


  }
 turn++;
doIt.innerText='';
doIt3.innerText='';
 }




 else if (turn==3) {
   btn_thru3.style.backgroundColor="red"
   btn_thru3.innerText="Rzuca Grasz 1"
    if (count3 >=50) {
     doIt3.innerText="WYGRAŁEŚ";
     again_chine_fn();
     win50.style.backgroundColor="gold";
    }else{
       player1.style.background="none";
       let numberClass=RandomNumber();
       let current3=document.querySelector(".field-"+count3);
       current3.style.background="none";

       count3=count3 + numberClass;
       go3=document.querySelector(".field-"+count3);
       go3.style.backgroundColor="green";

       doIt3.innerText=arr[count3];
       doIt3.style.color="green";
    if (count3 == 5 || count3 == 49 || count==30) {
       count3=1;
       let current3=document.querySelector(".field-1");
       go3.style.background="none";
       current3.style.backgroundColor="green";
   }
   if(count3 ==15 || count==39){
     count3=9;
     let current3=document.querySelector(".field-9");
     go3.style.background="none";
     current3.style.backgroundColor="green";
   }if(count3 ==24  || count ==47){
       count3=7;
       let current3=document.querySelector(".field-7");
       go3.style.background="none";
       current3.style.backgroundColor="green";
   }
   if (numberClass == 1 ) {
       cube.style.backgroundPosition="-12px";
   }
    else if (numberClass == 2) {
       cube.style.backgroundPosition="-83px";
   }
    else if (numberClass == 3 ) {
       cube.style.backgroundPosition="-83px -83px";
   }
    else if (numberClass == 4 ) {
       cube.style.backgroundPosition="-83px 85px";
   }
    else if (numberClass == 5 ) {
       cube.style.backgroundPosition="-225px";
   }
    else if (numberClass == 6 ) {
       cube.style.backgroundPosition="-155px";
   }


   }
   turn=1;
 doIt.innerText='';
 doIt2.innerText='';
 }
//Koniec PL2
//
currnet_mix1=document.querySelector(".field-"+count);
currnet_mix2=document.querySelector(".field-"+count2);
currnet_mix3=document.querySelector(".field-"+count3);
  if (count==count2) {
    currnet_mix2.classList.add("mix12");
    currnet_mix1.classList.add("mix12");
    }else{
      currnet_mix2.classList.remove("mix12");
      currnet_mix1.classList.remove("mix12");
}


if (count==count3) {
  currnet_mix3.classList.add("mix13");
  currnet_mix1.classList.add("mix13");
}
  else{
    currnet_mix3.classList.remove("mix13");
    currnet_mix1.classList.remove("mix13");
}
if (count2==count3) {
  currnet_mix3.classList.add("mix23");
  currnet_mix2.classList.add("mix23");
}
  else{
    currnet_mix2.classList.remove("mix23");
    currnet_mix3.classList.remove("mix23");

}


if (count==count2 && count==count3 && count2==count3) {
  currnet_mix1.classList.add("mix123");
  currnet_mix2.classList.add("mix123");
  currnet_mix3.classList.add("mix123");
}
    else{
    currnet_mix1.classList.remove("mix123");
    currnet_mix2.classList.remove("mix123");
    currnet_mix3.classList.remove("mix123");
    }




});//koniec CLICK
/////click cube

///koniec Three_player

play_two_player.addEventListener("click",function (event) {

  current.style.background="none";
  current2.style.background="none";
  How_many_players.style.display="none";
  btn_thru3.style.display="none";
  btn_thru.style.display="block"
  cube.style.display="block";
  task.style.display="block";
  go.style.background="none";
  go2.style.background="none";
  turn=1;
  count=1;
  count2=1;
  count3=1;
})

play_three_player.addEventListener("click",function (event) {

  current.style.background="none";
  current2.style.background="none";
  current3.style.background="none";
  How_many_players.style.display="none";
  btn_thru.style.display="none";
  btn_thru3.style.display="block";
  cube.style.display="block";
  task.style.display="block";
  go.style.background="none";
  go2.style.background="none";
  go3.style.background="none";
  turn=1;
  count=1;
  count2=1;
  count3=1;
})

again_chine.addEventListener("click",function () {
  How_many_players.style.display="block";
  again_chine.classList.remove("visible");
  win50.style.background="none";
  btn_thru.style.display="none"
  cube.style.display="none";
  task.style.display="none";
  console.log(count);
  turn=1;
  count=1;
  count2=1;
  count3=1;
});

})
