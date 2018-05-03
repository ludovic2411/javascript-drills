let numbers=[1,2,3];
let somme=0;
for (let i = 0; i < numbers.length; i++) {
    somme=somme+Number(numbers[i]);

}
document.write(somme);
let acteurs=['Stalone','Cruz','Jackman'];
let ordre=['premier','second','troisième'];

for (let a = 0; a < acteurs.length; a++) {
  document.write("<p>Le "+ordre[a]+" est "+acteurs[a]);
}
let nitendo=['Mario','Luigi','Peach'];
let nitendo_extended=nitendo.slice(0);
nitendo_extended.splice(1,0,"Toad");
nitendo_extended.push("Bowser");
document.write("<p>"+nitendo_extended+"</p>");
