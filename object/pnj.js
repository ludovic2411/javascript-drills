character ={
  name:'Blub',
  age:23,
  items_to_give:['axe','lighter','comdom'],
}
for (let key in character ) {
  document.write('<p>'+key+':'+character[key]+'</p>');

}
let random=Math.floor(Math.random() * 2) + 0;
document.write(character.items_to_give[random]);


let random_perso=Math.floor(Math.random() * 10) + 0;
let random_perso2=Math.floor(Math.random() * 10) + 0;
perso=['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
document.write(perso.length);
document.write("<p>"+perso[random_perso]+" combat "+perso[random_perso2]+"</p>");
