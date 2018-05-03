let shoppinglist=['pain','lait','haricots','saucisse'];
shoppinglist['1']='chocolat';
shoppinglist.push('coca');
shoppinglist.push('pomme');
shoppinglist[4]='coca';
//shoppinglist.pop();

  document.write(shoppinglist);
let achat=function achat(liste){
  return "J'achète:"+liste;
}
for (let i = 0; i <shoppinglist.length; i++) {
    let buy=achat(shoppinglist[i]);
document.write("<p>"+buy+"</p>");
}
