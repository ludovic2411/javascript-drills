
let main_color= '#FF0000';
let chair = {
  color:main_color,
  feets:4,
  things:['papier','telecommande','clé usb'],
  knock: function(){
    document.write('<p>knock knock</p>');
    document.write('<p>'+chair.things+'</p>');
  }
}
/* Ce qui s'affiche commence ici */
document.write('<p>'+chair.feets+'</p>');
chair.knock();
for (let key in chair) {
  //document.write('<p>'+typeof key+'</p>');
  document.write('<p>'+key+'</p>');
  document.write('<p>'+chair[key]+'</p>');
}
