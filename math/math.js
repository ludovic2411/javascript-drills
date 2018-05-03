let suite=[ 7, 5, -12, 6, 32, 18, 14, -2];
console.log(suite.length)
console.log(suite[8]);
function suitemin(array){
 return Math.min.apply(null, array);
}
let lowest=suitemin(suite);
document.write(lowest);
let suite2=[-3, 9, 21, 36, 27, 54, 17, 35];
function suitemax(array){
  return Math.max.apply(null,array);
}
let highest=suitemax(suite2);
document.write("<p>"+highest+"</p>");
let floatbateau=10.4;
function coule(float){
  return Math.floor(float);
}
let coulebateau=coule(floatbateau);
document.write("<p>"+coulebateau+"</p>");
function vole(float){
  return Math.ceil(float);
}
let volebateau=vole(floatbateau);
document.write("<p>"+volebateau+"</p>");
function random(valeur){
  return Math.floor(Math.random() * 90) + 50;
}
let aléatoire=random()
if (aléatoire>50 && aléatoire<90) {
  document.write("<p>"+aléatoire+"</p>");
}else {
  document.write('oups');
}
function random_1(){
  return Math.random();
}
let random_number=random_1();
document.write("<p>"+random_number+"</p>");
function random_2(){
  return Math.round(Math.random());
}
let random_number_1=random_2();
document.write("<p>"+random_number_1+"</p>");
function random3(){
  return Math.random();
}
let random_number_2=random3();
document.write("<p>"+random_number_2+"</p>");
if (random_number_2>0.5) {
  document.write(Math.ceil(random_number_2));
  document.write("<p>random=1</p>");
}else if (random_number_2<0.5) {
  document.write(Math.floor(random_number_2));
  document.write("<p>random=0</p>");
}
