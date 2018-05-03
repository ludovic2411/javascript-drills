let cookie=document.getElementsByClassName('affichage')[0];
let score=70;
let multiplier=1;
let bonus_value=2;
let prix=1;
let bonus_mode=false;
let boost_mode=false;
let autoclick=document.querySelector('.autoclick');
let bonus_button=document.querySelector('.bonus');
bonus_button.style.visibility='hidden';
autoclick.style.visibility='hidden';
document.querySelector('.multiplier').style.visibility='hidden';

function click(){

  if (bonus_mode==false) {
    score=score+multiplier;
  }else if (bonus_mode==true) {
    score=score+(multiplier*2);
  }
  if (score>=10){
    document.querySelector('.multiplier').style.visibility='visible';
  }
  if (score>=50) {
    autoclick.style.visibility='visible';
  }
  if (score>=70) {
    bonus_button.style.visibility='visible';
  }
  document.getElementsByTagName('p')[0].innerHTML='Your score: '+score;
}

function augmenter_multiplier(){
  if (score>0) {
    score=score-5*prix++;
    document.getElementsByTagName('p')[2].innerHTML='Next purchase '+5*prix++;
    document.getElementsByTagName('p')[1].innerHTML='Multiplier:X '+multiplier;
    multiplier++;
    document.getElementsByTagName('p')[1].innerHTML='Multiplier:X '+multiplier;
  }else {
    document.getElementsByTagName('p')[1].innerHTML='You have to wait';
  }
}
function boost(){
  boost_on();
  boost_off();
  if(boost_mode==true){
    document.getElementsByTagName('p')[5].innerHTML='boost mode on!';
    setInterval(function(){
    cookie.click();
  },200);
}
  }

function boost_on(){
  boost_mode=true;
}

function boost_off(){
  setTimeout(function(){
    boost_mode=false;
    console.log(boost_mode);
  },5000);
}

function bonus(){
  bonus_button.style.display='none';
  bonus_mode=true;
    document.getElementsByTagName('p')[3].innerHTML="Bonus mode!"
    setTimeout(function(){
      bonus_mode=false;
      document.getElementsByTagName('p')[3].innerHTML="Bonus mode finished!"
      },5000);
    }

let time=6;
let fin=0;
function chrono(){
  time--;
  if(time>0){
    setTimeout(chrono,1000)
  }
  else{
  time=fin
  }
  document.getElementsByTagName('p')[4].innerHTML=time;
}
function cookie_initial(){
  cookie.style.transform='scale(1,1)';
}

function cookie_transform(){
  cookie.style.transform='scale(0.5,0.5)';
  setTimeout(function(){
    cookie.style.transform='scale(.8,0.8)';
  },100);
}

document.querySelector('.multiplier').addEventListener('click',augmenter_multiplier);
cookie.addEventListener('click',click);
cookie.addEventListener('click',cookie_transform);
//cookie.addEventListener('click',cookie_initial);
autoclick.addEventListener('click', boost);
//autoclick.addEventListener('click', boost_off);
bonus_button.addEventListener('click',bonus);
bonus_button.addEventListener('click',chrono);
