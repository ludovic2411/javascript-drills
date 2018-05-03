let mot="bonjour";
let jeu=prompt('devine les lettres (7)');
if (jeu===mot.charAt(0)) {
  alert('b/_/_/_/_/_/_');
}else if (jeu===mot.charAt(1)){
    alert('_/O/_/_/O/_/_');
  }else if (jeu===mot.charAt(2)) {
    alert('_/_/N/_/_/_/_');
  }else if (jeu===mot.charAt(3)) {
    alert('_/_/_/J/_/_/_');
  }else if (jeu===mot.charAt(5)) {
    alert('_/_/_/_/_/U/_');
  }else if (jeu===mot.charAt(6)) {
    alert('_/_/_/_/_/_/R');
  }else {
    alert('Le mot ne comporte pas ces lettres');
    location.reload();
  }
let motdevine=prompt('Devine le mot');
if (motdevine===mot) {
  alert('gagné');
}else{
  alert('recommence le jeu');
  location.reload();
}
