let body=document.getElementsByTagName('body')[0].className;
//console.log(body);
document.getElementsByTagName('body')[0].className='bg-olive';
let new_body=document.getElementsByTagName('body');
//console.log(new_body);
let para=document.getElementById('first-paragraph').className;
document.getElementById('first-paragraph').className='aqua';
let aqua=document.getElementById('first-paragraph');
//console.log(aqua);
let silver=document.getElementsByClassName('bg-silver');

//console.log(silver);
document.getElementsByClassName('bg-silver')[0].className='bg-teal';
let quote=document.getElementsByTagName('blockquote');
quote[0].classList.remove('bg-teal');
quote[0].classList.add('bg-white');
//console.log(quote[0]);
 let table=document.querySelector('#my-table').className= 'bg-purple';
//console.log(table);
/*let container=document.getElementsByClassName('container');
console.log(container);*/
let p=document.querySelector('.container').getElementsByTagName('p');
for (i=0;i<3;i++){
  p[i].className='shadow';
}
//console.log(p);
let pre=document.getElementsByTagName('pre');
document.getElementsByTagName('pre')[0].style.color="red";
document.getElementsByTagName('pre')[0].style.backgroundColor="purple";
document.getElementsByTagName('pre')[0].style.borderBottom="3px solid red";
document.getElementsByTagName('pre')[0].style.borderTop="3px solid red";
//console.log(pre);
let h_3=document.getElementsByTagName('h3')[0];
//console.log(h_3);
let parent=h_3.parentNode;
//console.log(parent);
let replace=document.createElement('em');
replace.className='replace';
replace.innerHTML='Itelic title ! yeah !';
//console.log(replace);
parent.replaceChild(replace,h_3);
let h_2=document.getElementsByTagName('h2')[0];
h_2.innerHTML='<strong>HTML doens'+'t work !</strong>';
//console.log(h_2);
let list=document.getElementsByTagName('ul')[1];
list.classList.add('ul-2');
console.log(list);
let puce=document.createElement('li');
list.appendChild(puce);
let puce_link=list.getElementsByTagName('li')[0];

let link=document.createElement('a');
link.className='Google';
puce_link.appendChild(link);
link.href='http://www.google.com';
link.innerHTML='Google';
link.style.color='brown';
link.style.textDecoration='none';
//console.log(link);
let ol=document.getElementsByTagName('ol');
let child=ol[0].childNodes;
//console.log(ol);
//console.log(child);
let suite=["Silent Teacher","Code Monkey", "CodeCombat"];
for (let i = 0; i < suite.length; i++) {
  let create=document.createElement('li');
  list.appendChild(create);
  let new_link=document.createElement('a');
  create.appendChild(new_link).innerHTML=suite[i];
}
