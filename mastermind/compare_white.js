function compare_white(){
  //1 est référence
  if (document.querySelector('.choix_1').style.backgroundColor===reponse_2 ||  document.querySelector('.choix_1').style.backgroundColor===reponse_2
|| document.querySelector('.choix_1').style.backgroundColor===reponse_3 || document.querySelector('.choix_1').style.backgroundColor ===reponse_4) {
   console.log("1 est mal placé");
   document.querySelector('.essai_1').style.backgroundColor='white';
 }
 //2 est référence
 if (document.querySelector('.choix_2').style.backgroundColor===reponse_1 ||  document.querySelector('.choix_2').style.backgroundColor===reponse_3
 || document.querySelector('.choix_2').style.backgroundColor ===reponse_4) {
  console.log("2 est mal placé");
  document.querySelector('.essai_2').style.backgroundColor='white';
}
//3 est référence
if (document.querySelector('.choix_3').style.backgroundColor===reponse_1
||  document.querySelector('.choix_3').style.backgroundColor===reponse_2
|| document.querySelector('.choix_3').style.backgroundColor ===reponse_4) {
 console.log("3 est mal placé");
 document.querySelector('.essai_3').style.backgroundColor='white';
}
//4 est référence
if (document.querySelector('.choix_4').style.backgroundColor===reponse_1 ||  document.querySelector('.choix_4').style.backgroundColor===reponse_2
|| document.querySelector('.choix_4').style.backgroundColor===reponse_3 || document.querySelector('.choix_1').style.backgroundColor ===reponse_4) {
 console.log("4 est mal placé");
 document.querySelector('.essai_4').style.backgroundColor='white';
}
}
