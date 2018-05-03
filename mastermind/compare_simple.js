function compare_simple(){
  //Si tout est bon
  if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor===reponse_3 && document.querySelector('.choix_4').style.backgroundColor===reponse_4){
  document.getElementsByTagName('h1')[0].innerHTML='Correct!';
  document.getElementsByTagName('h1')[0].style.color='green';
  solution();
  }else {
    document.getElementsByTagName('h1')[0].innerHTML='Incorrect!';
  }
  //1 est référence
  if (document.querySelector('.choix_1').style.backgroundColor===reponse_1) {
   console.log("1 est bien placé");
   document.querySelector('.essai_1').style.backgroundColor='black';
 }
 //2 est référence
 if (document.querySelector('.choix_2').style.backgroundColor===reponse_2){
  console.log("2 est bien placé");
  document.querySelector('.essai_2').style.backgroundColor='black';
}
//3 est référence
if (document.querySelector('.choix_3').style.backgroundColor===reponse_3){
 console.log("3 est bien placé");
 document.querySelector('.essai_3').style.backgroundColor='black';
}
//4 est référence
if (document.querySelector('.choix_4').style.backgroundColor===reponse_4){
 console.log("4 est bien placé");
 document.querySelector('.essai_4').style.backgroundColor='black';
}
 compare_white();
}
