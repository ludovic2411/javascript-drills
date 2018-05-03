
for ( i = 0; i <=10; i++) {
    document.write("<p>"+i+"*9="+i*9 + "</p>");
}
for ( result = 0; result <=100; result++) {
  if (result>90) {
    document.write("<p>Pour "+ result +"points, vous avez le grade A</p>");
  }else if (result>80 && result<=90) {
    document.write("<p>Pour "+ result +"points, vous avez le grade B</p>");
  }else if (result>70 && result<=80) {
    document.write("<p>Pour "+ result +"points, vous avez le grade C</p>");
  }else if (result>60 && result<=70) {
    document.write("<p>Pour "+ result +"points, vous avez le grade D</p>");
  }else if (result>50 && result<=60) {
    document.write("<p>Pour "+ result +"points, vous avez le grade E</p>");
  }else if (result>40 && result<=50) {
    document.write("<p>Pour "+ result +"points, vous avez le grade F</p>");
  }else {
    document.write("<p>Pour "+ result +"points, vous avez le grade G. C'est nul</p>");
  }
}
let times=5;
let star="*";
for (count = 0; count <times+1; count++){
  document.write(star.repeat(count) + "<br>");
}
for (count=6;count>times;count--){
  document.write(star.repeat(count) + "<br>");
}
/*function repeat(string,times){
  let repeatedString = "";
while (times<=10) {
  let repeatedString=repeatedString+string;
  times++;
}
return repeatedString;
}
let sapin=function repeat("*","0");
document.write(sapin);*/
