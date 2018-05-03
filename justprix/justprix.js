let message='';
let essai=0;
let min=20;
let max=80;
let prix= Math.floor(Math.random() *80);
if (prix>=20 && prix<=80){
function game(){
  while (guess != prix){
    let prix= Math.floor(Math.random() *80);
    if (prix>=20 && prix<=80){
  document.write(prix);
  let guess=prompt('devinez le prix');
  if (guess==prix) {
    alert('gagné');
  }else {
    alert('encore!');
  }
}else {
  alert('pas le bon nombre');
  reload.location();
}
}
}
}
