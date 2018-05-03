// On établit les couleurs
let yellow_choice=document.querySelector('.yellow');
let green_choice=document.querySelector('.green');
let red_choice=document.querySelector('.red');
let orange_choice=document.querySelector('.orange');
let purple_choice=document.querySelector('.purple');
let blue_choice=document.querySelector('.blue');
document.querySelector('.solution').style.visibility='hidden';
yellow_choice.style.backgroundColor="yellow";
green_choice.style.backgroundColor="green";
red_choice.style.backgroundColor="red";
orange_choice.style.backgroundColor="orange";
purple_choice.style.backgroundColor="purple";
blue_choice.style.backgroundColor="blue";

//On établit les réponses
let reponse_1;//=reponse_possibles[random_1];
let reponse_2;//=reponse_possibles[random_2];
let reponse_3;//=reponse_possibles[random_3];
let reponse_4;//=reponse_possibles[random_4];

function create_random(){
let reponse_possibles=['blue','green','orange','purple','yellow','red'];
let random_1=Math.floor(Math.random() * 5) + 0;
reponse_1=reponse_possibles[random_1];
reponse_possibles.splice(random_1,1);
//console.log(reponse_possibles);
let random_2=Math.floor(Math.random() * 4) + 0;
reponse_2=reponse_possibles[random_2];
reponse_possibles.splice(random_2,1);
//console.log(reponse_possibles);
let random_3=Math.floor(Math.random() * 3) + 0;
reponse_3=reponse_possibles[random_3];
reponse_possibles.splice(random_3,1);
//console.log(reponse_possibles);
let random_4=Math.floor(Math.random() * 2) + 0;
reponse_4=reponse_possibles[random_4];
reponse_possibles.splice(random_4,1);
//console.log(reponse_possibles);
}

create_random();
document.querySelector('.solution_1').style.backgroundColor=reponse_1;
document.querySelector('.solution_2').style.backgroundColor=reponse_2;
document.querySelector('.solution_3').style.backgroundColor=reponse_3;
document.querySelector('.solution_4').style.backgroundColor=reponse_4;
console.log(reponse_1);
console.log(reponse_2);
console.log(reponse_3);
console.log(reponse_4);
let counterChoix = 1;
let counterHisto=1
function yellow_color(event){
  if (counterChoix<=4) {
      document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='yellow';
      document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='yellow';
      yellow_choice.style.visibility='hidden';
  }
}
function green_color(event){
  if (counterChoix<=4) {
  document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='green';
  document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='green';
  green_choice.style.visibility='hidden';
}
}
function red_color(event){
  if (counterChoix<=4) {
    document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='red';
    document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='red';
    red_choice.style.visibility='hidden';
  }
}
function orange_color(event){
  if (counterChoix<=4) {
    document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='orange';
    document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='orange';
    orange_choice.style.visibility='hidden';
  }
}
function purple_color(event){
    if (counterChoix<=4) {
    document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='purple';
    document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='purple';
    purple_choice.style.visibility='hidden';
  }
}
function blue_color(event){
    if (counterChoix<=4) {
    document.querySelector('.choix_'+(counterChoix++)).style.backgroundColor='blue';
    document.querySelector('.histo_'+(counterHisto++)).style.backgroundColor='blue';
    blue_choice.style.visibility='hidden';
  }
}
function clear(event){
  for (let i = 1; i <=4; i++) {
      document.querySelector('.choix_'+i).style.backgroundColor='transparent';
      yellow_choice.style.visibility='visible';
      green_choice.style.visibility='visible';
      red_choice.style.visibility='visible';
      orange_choice.style.visibility='visible';
      purple_choice.style.visibility='visible';
      blue_choice.style.visibility='visible';
  }
  counterChoix=1;
}
function replay(){
  location.reload();
}
function solution(){
document.querySelector('.solution').style.visibility='visible';
}
  yellow_choice.addEventListener('click',yellow_color);
  green_choice.addEventListener('click',green_color);
  red_choice.addEventListener('click',red_color);
  orange_choice.addEventListener('click',orange_color);
  purple_choice.addEventListener('click',purple_color);
  blue_choice.addEventListener('click',blue_color);
  document.getElementsByTagName('button')[0].addEventListener('click', clear);
  document.getElementsByTagName('button')[1].addEventListener('click',compare_simple);
  document.getElementsByTagName('button')[2].addEventListener('click',replay);
  document.getElementsByTagName('button')[3].addEventListener('click',solution);
