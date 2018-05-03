let input=document.getElementsByTagName('input')[0];
let input2=document.getElementsByTagName('input')[1];
let section=document.getElementsByClassName('color')[0];
let up=document.querySelector('.up');
let down=document.querySelector('.down');
let left=document.querySelector('.left');
let right=document.querySelector('.right');
function unicode(event){
  let x=event.which;
  switch(x){
    case 38:
    case 49:
    section.className='red';
    break
   case 50:
    case 233:
   section.className='green';
   break
    case 34:
    case 51:
    section.className='yellow';
    break
    case 39:
    case 52:
    section.className='blue';
    break
    case 40:
    case 53:
    section.className='orange';
    break
    case 167:
    case 54:
    section.className='purple';
    break
    case 55:
    case 232:
    section.className='aqua';
    break
    case 33:
    case 56:
    section.className='brown';
    break
    case 57:
    case 231:
    section.className='grey';
    break
    case 8:
    location.reload();
    break;
  }
}
function change_opacity(event){
  let y=event.which;
  switch (y) {
    case 38:
      up.style.opacity='0.5';
      up.getElementsByTagName('p')[0].innerHTML='changé';
      break;
    case 40:
      down.style.opacity='0.5';
      down.getElementsByTagName('p')[0].innerHTML='changé';
      break
    case 37:
      left.style.opacity='0.5';
      left.getElementsByTagName('p')[0].innerHTML='changé';
      break
    case 39:
      right.style.opacity='0.5';
      right.getElementsByTagName('p')[0].innerHTML='changé';
    break
  }
}
function return_opacity(event){
  let z=event.which;
  switch (z) {
    case 38:
      up.style.opacity='1';
      up.getElementsByTagName('p')[0].innerHTML='Mis à neuf';
      break;
    case 40:
      down.style.opacity='1';
      down.getElementsByTagName('p')[0].innerHTML='Mis à neuf';
      break
    case 37:
      left.style.opacity='1';
      left.getElementsByTagName('p')[0].innerHTML='Mis à neuf';
      break
    case 39:
      right.style.opacity='1';
      right.getElementsByTagName('p')[0].innerHTML='Mis à neuf';
    break
  }
}
input.addEventListener('keydown',unicode);
input2.addEventListener('keydown',change_opacity);
input2.addEventListener('keyup',return_opacity);
