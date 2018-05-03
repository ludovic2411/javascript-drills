let section=document.getElementsByClassName('hoverme');
let reset=document.getElementsByClassName('reset')[0];
let body=section[0].parentElement;
let section_x=document.getElementsByClassName('x')[0].getElementsByTagName('p')[0];
let section_y=document.getElementsByClassName('y')[0].getElementsByTagName('p')[0];
let section_p1=section[0].getElementsByTagName('p')[0];
let section_p2=section[1].getElementsByTagName('p')[0];
let section_p3=section[2].getElementsByTagName('p')[0];
console.log(reset);
console.log(body);
console.log(section);
console.log(section_y);
console.log(section_x);
for (let i =section.length-1; i>=0; i--) {
    section[i].addEventListener('mouseenter',(event) =>{
      section[i].style.visibility='hidden';
  });
}

  for (let i =section.length-1; i>=0; i--) {
    reset.addEventListener('mouseenter',(event) =>{
      section[i].style.visibility='visible';
    /*  section_p1.style.color='green';
      section_p2.style.color='green';
      section_p3.style.color='green';
      section_p1.innerHTML='Je suis revenu!';
      section_p2.innerHTML='Moi aussi!';
      section_p3.innerHTML='Moi aussi!';*/
      section[i].getElementsByTagName('p')[0].style.color='green';
      section[i].getElementsByTagName('p')[0].innerHTML='Je suis là';
  });
}
function show_x(event){
  let x=event.clientX;
  section_x.innerHTML="Coordonnées axe X: "+ x;
}
window.addEventListener('mousemove',show_x);
function show_y(event){
  let y=event.clientY;
  section_y.innerHTML="Coordonnées axe Y: "+y;
}window.addEventListener('mousemove',show_y);
