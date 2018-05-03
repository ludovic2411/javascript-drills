function compare(event){
  if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor===reponse_3 && document.querySelector('.choix_4').style.backgroundColor===reponse_4){
  document.getElementsByTagName('h1')[0].innerHTML='Correct!';
  document.getElementsByTagName('h1')[0].style.color='green';
  }else {
    document.getElementsByTagName('h1')[0].innerHTML='Incorrect!';
  }
  // 1 est référence
   if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor===reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
    console.log("1,2,3 sont corrects. 4 n'" +"est pas correct");
    document.querySelector('.essai_1').style.backgroundColor='black';
    document.querySelector('.essai_2').style.backgroundColor='black';
    document.querySelector('.essai_3').style.backgroundColor='black';
  }
  if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor !==reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
   console.log("1,2 sont corrects. 3 et 4 n'" +"ne sont pas correct");
   document.querySelector('.essai_1').style.backgroundColor='black';
   document.querySelector('.essai_2').style.backgroundColor='black';

}
if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor !==reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
 console.log("1 est correct. 2,3 et 4 n'" +"ne sont pas correct");
 document.querySelector('.essai_1').style.backgroundColor='black';
}
if (document.querySelector('.choix_1').style.backgroundColor===reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor ===reponse_3 && document.querySelector('.choix_4').style.backgroundColor ===reponse_4) {
 console.log("1,3 et 4 sont corrects" +" 2 n'est pas correct");
 document.querySelector('.essai_1').style.backgroundColor='black';
 document.querySelector('.essai_3').style.backgroundColor='black';
 document.querySelector('.essai_4').style.backgroundColor='black';
}
//2 est référence
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor ===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor !==reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
 console.log("2 est correct'" +"1,3,4 ne sont pas correct");
 document.querySelector('.essai_2').style.backgroundColor='black';
}
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor ===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor ===reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
 console.log("2,3 sont corrects. 1 et 4" +"ne sont pas corrects");
 document.querySelector('.essai_2').style.backgroundColor='black';
 document.querySelector('.essai_3').style.backgroundColor='black';
}
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor ===reponse_2
&& document.querySelector('.choix_3').style.backgroundColor ===reponse_3 && document.querySelector('.choix_4').style.backgroundColor ===reponse_4) {
 console.log("2,3 et 4 sont corrects. 1 et 4" +"1n'est pas correct");
 document.querySelector('.essai_2').style.backgroundColor='black';
 document.querySelector('.essai_3').style.backgroundColor='black';
 document.querySelector('.essai_4').style.backgroundColor='black';
}
// 3 est référence
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor ===reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
 console.log("3 est correct. 1,2 et 4 n'" +"ne sont pas correct");
 document.querySelector('.essai_3').style.backgroundColor='black';
}
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor ===reponse_3 && document.querySelector('.choix_4').style.backgroundColor ===reponse_4) {
 console.log("3 et 4 sont corrects." +" 1 et 2 ne sont pas correct");
 document.querySelector('.essai_3').style.backgroundColor='black';
 document.querySelector('.essai_4').style.backgroundColor='black';
}
//4 est référence
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor !==reponse_3 && document.querySelector('.choix_4').style.backgroundColor ===reponse_4) {
 console.log("4 est correct. 1,2 et 3 n'" +"ne sont pas correct");
 document.querySelector('.essai_4').style.backgroundColor='black';
}
//Rien n'est bon
if (document.querySelector('.choix_1').style.backgroundColor!==reponse_1 && document.querySelector('.choix_2').style.backgroundColor !==reponse_2
&& document.querySelector('.choix_3').style.backgroundColor !==reponse_3 && document.querySelector('.choix_4').style.backgroundColor !==reponse_4) {
 console.log("Rien n'est correct");
}
compare_white();
}
