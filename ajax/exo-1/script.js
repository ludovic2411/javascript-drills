
function display(){
  console.log('transfer complete');
}

let scores=[];
for (let i = 0; i < 100; i++) {
  scores[i]=Math.floor(Math.random() * 1000);
}
//console.log(scores);

let req = new XMLHttpRequest();
req.open('get','data.json',true);
req.send();
req.onreadystatechange = () => {
//appelle des fonctions prototypées
if (req.readyState == 4) {
//console.log(req.response);
let json_decode=JSON.parse(req.response);

for (let i = 0; i < json_decode.length; i++) {
  json_decode[i].score=scores[i];
  if (json_decode[i].score>750) {
    json_decode[i].categorie='a';
  }else if (json_decode[i].score<=750 && json_decode[i].score>500) {
    json_decode[i].categorie='b';
  }else {
    json_decode[i].categorie='c';
  }
}
for ( i = 0; i < json_decode.length; i++) {
  console.log(json_decode[i]);

}
}
}
