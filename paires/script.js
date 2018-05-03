let imgs=document.getElementsByTagName('img');
let img1=document.getElementsByTagName('img')[0];
let img2=document.getElementsByTagName('img')[1];
let img3=document.getElementsByTagName('img')[2];
let img4=document.getElementsByTagName('img')[3];
let img5=document.getElementsByTagName('img')[4];
let img6=document.getElementsByTagName('img')[5];
let img7=document.getElementsByTagName('img')[6];
let img8=document.getElementsByTagName('img')[7];
let img9=document.getElementsByTagName('img')[8];
let img10=document.getElementsByTagName('img')[9];
let img11=document.getElementsByTagName('img')[10];
let img12=document.getElementsByTagName('img')[11];
let pic=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];
let click=0;
let pick_compare=[];
let time=30;
let fin=0;
for ( u = 0; u < 12; u++) {
  document.getElementsByTagName('img')[u].src="img/Iskra_2.jpg";
}

function random(){
  let pic_src=['img/anehihan.jpg','img/chatminou.jpg','img/chientoutou.jpg','img/lapinscrottes.jpg','img/lionnegraou.jpg','img/oursbaby.jpg'];
  let random_1=Math.floor(Math.random() * 6) + 0;
  paire_1=pic_src[random_1];
  pic_src.splice(random_1,1);
  let random_2=Math.floor(Math.random() * 5) + 0;
  paire_2=pic_src[random_2];
  pic_src.splice(random_2,1);
  let random_3=Math.floor(Math.random() * 4) + 0;
  paire_3=pic_src[random_3];
  pic_src.splice(random_3,1);
  let random_4=Math.floor(Math.random() * 3) + 0;
  paire_4=pic_src[random_4];
  pic_src.splice(random_4,1);
  let random_5=Math.floor(Math.random() * 2) + 0;
  paire_5=pic_src[random_5];
  pic_src.splice(random_5,1);
  let random_6=Math.floor(Math.random() * 1) + 0;
  paire_6=pic_src[random_6];
}
random()

function click_function(){
click=click+1;
if ( click>=3) {
  for(let i=0;i<12;i++){
    document.getElementsByTagName('img')[i].style.visibility='hidden';
  }
  setTimeout(function(){
    for(let i=0;i<12;i++){
      document.getElementsByTagName('img')[i].style.visibility='visible';
      document.getElementsByTagName('img')[i].src="img/Iskra_1.jpg"
    }
  },1000);
  document.getElementsByTagName('p')[0].innerHTML='C'+'est pas bien de tricher';
  click=0;
}
}
function compare(){
  if (pick_compare[0]==pick_compare[1]) {
    for ( c = 0; c < 12; c++) {
      document.getElementsByTagName('img')[c].src="img/Iskra_3.jpg";
    }
    document.getElementsByTagName('h1')[0].innerHTML='Gagné';
    document.getElementsByTagName('p')[0].innerHTML='Iskra est fière de toi';
  }else {
    for ( c = 0; c < 12; c++) {
      document.getElementsByTagName('img')[c].src="img/Iskra_1.jpg";
    }
    document.getElementsByTagName('h1')[0].innerHTML='Perdu';
    document.getElementsByTagName('p')[0].innerHTML='Iskra te motive à recommencer';
    time=30;
    click=0;
    pick_compare=[];
  }
}

function chrono(){
  time--;
  if(time>0){
    setTimeout(chrono,1000)
  }
  document.getElementsByTagName('p')[1].innerHTML=time;
}

console.log(pick_compare);
img1.addEventListener('click',click_function);
img2.addEventListener('click',click_function);
img3.addEventListener('click',click_function);
img4.addEventListener('click',click_function);
img5.addEventListener('click',click_function);
img6.addEventListener('click',click_function);
img7.addEventListener('click',click_function);
img8.addEventListener('click',click_function);
img9.addEventListener('click',click_function);
img10.addEventListener('click',click_function);
img11.addEventListener('click',click_function);
img12.addEventListener('click',click_function);
document.getElementsByTagName('button')[0].addEventListener('click',compare);
//document.getElementsByTagName('p')[1].addEventListener('load',chrono);
