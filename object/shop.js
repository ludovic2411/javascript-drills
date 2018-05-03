objects={
  name:['hydre vorace','battle_axe','magic_scepter','rage_blade_guinsoo'],
  physic:[8,10,2,7],
  magic:[2,0,9,6],
  minlevel:[3,1,8,5],
  available:[1,1,0,0],
}


//let objects=['sword','axe','scepter','rage_blade_guinsoo'];
for (let i=0;i<objects.name.length;i++) {
  document.write("<p>"+objects.name[i]+"</p>");
  document.write("<p>"+objects.physic[i]+"</p>");
  document.write("<p>"+objects.magic[i]+"</p>");
  document.write("<p>"+objects.minlevel[i]+"</p>");
  document.write("<p>"+Boolean(objects.available[i])+"</p>");
}
function display_objects_available(){
  for (i=0;i<objects.name.length;i++){
    if (Boolean(objects.available[i])==true){
      document.write("<p>"+objects.name[i]+" est disponible</p>");
    }
  }
}
display_objects_available();
function display_objects_not_available(){
 for (let i=0;i<objects.name.length;i++) {
if (Boolean(objects.available[i])==false) {
  document.write("<p>"+objects.name[i]+" n'est pas disponible</p>");
}
}
}
display_objects_not_available();
function display_objects_exp(){
for (let i = 0; i < objects.name.length; i++) {
  if (objects.minlevel[i]>=5) {
    document.write("<p> Bravo! Vous pouvez acheter la : "+objects.name[i]+"</p>");
  }
  }
}
display_objects_exp();

maincharacter={
  name:'Irelia',
  level:12,
  life:100,
  weapon:[name=objects.name[3], damages=objects.physic[3]],
}
function attack(name, opponent,weapon, level,damages, life){
   document.write("<p>"+name+" frappe "+ opponent+ " avec  "+weapon+" et inflige "+(level*damages)+" points de dégâts, sa vie descend à "+(life-(level*damages))+"</p>");
   let new_life=(life-(level*damages));
   console.log(new_life);
}
  function attack2(name, opponent,weapon, level,damages, life){
     document.write("<p>"+name+" frappe "+ opponent+ " avec  "+weapon+" et inflige "+(level*damages)+" points de dégâts, sa vie descend à "+(life-(level*damages))+"</p>");
     let new_life2=(life-(level*damages));
     console.log(new_life2);
  }
  opponent={
    name:'Riven',
    level:10,
    life:115,
    weapon:[name=objects.name[0], damages=objects.physic[0]],
  }
attack(maincharacter.name, opponent.name,maincharacter.weapon[0],maincharacter.level,maincharacter.weapon[1],opponent.life,maincharacter.level,maincharacter.weapon[1]);
attack(opponent.name, maincharacter.name,opponent.weapon[0],opponent.level,opponent.weapon[1],maincharacter.life,opponent.level,opponent.weapon[1]);
let new_life=(maincharacter.life-(opponent.level*opponent.weapon[1]));
let new_life2=(opponent.life-(maincharacter.level*maincharacter.weapon[1]));
if (new_life>new_life2) {
  document.write("<p>"+maincharacter.name+" gagne!</p>");
}else {
  document.write('<p>'+opponent.name+' gagne!</p>');
}
