let paragraph=document.getElementsByTagName('p')[0];
let query=document.getElementsByTagName('input')[0];
let submit=document.getElementsByTagName('input')[1];
let type=document.getElementsByTagName('select')[0];
let permission=document.getElementsByTagName('select')[1];
let query_2=document.getElementsByTagName('input')[2];

let req=new XMLHttpRequest();
let method='GET';
let url='fodmaps.json';
req.open(method,url, true);
req.setRequestHeader("X-Foo", "Bar");
req.onreadystatechange=function(){
  if (req.readyState==4 && req.status==200) {
    let datas=JSON.parse(req.response);
    console.log('connection ready');

    function analyze(){
      console.log(query.value);
      for (let i = 0; i < datas.length; i++) {
        console.log(datas[i]);
        if (datas[i].aliment.includes(query.value) && datas[i].permis==true && datas[i].type!="boisson") {
            paragraph.innerHTML='Vous pouvez manger du  '+datas[i].aliment;
          }else if (datas[i].aliment.includes(query.value) && datas[i].permis==true && datas[i].type=="boisson") {
            paragraph.innerHTML='Vous pouvez boire du '+datas[i].aliment;
          } else if (datas[i].aliment.includes(query.value) && datas[i].permis==false && datas[i].type!="boisson" ) {
            paragraph.innerHTML='Vous  ne pouvez pas manger du '+datas[i].aliment;
          }else if (datas[i].aliment.includes(query.value) && datas[i].permis==false && datas[i].type=="boisson") {
            paragraph.innerHTML='Vous  ne pouvez pas boire du  '+datas[i].aliment;
          }
    }
  }
  function query_by_type(){
    for (let i = 0; i < datas.length; i++) {
      if (type.value=="Fruits" && permission.value=="Autorisé") {
        if (datas[i].type=="fruits" && datas[i].permis==true) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
          //document.getElementsByTagName('ul')[0].innerHTML="<li>"+datas[i].aliment+"</li>";
        }
      }else if (type.value=="Fruits" && permission.value=="Déconseillé") {
        if (datas[i].type=="fruits" && datas[i].permis==false) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";

        }
      }
      else if (type.value=="Féculents" && permission.value=="Autorisé") {
        if (datas[i].type=="féculents" && datas[i].permis==true) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
      else if (type.value=="Féculents" && permission.value=="Déconseillé") {
        if (datas[i].type=="féculents" && datas[i].permis==false) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
      else if (type.value=="légumes" && permission.value=="Autorisé") {
        if (datas[i].type=="légumes" && datas[i].permis==true) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
      else if (type.value=="légumes" && permission.value=="Déconseillé") {
        if (datas[i].type=="légumes" && datas[i].permis==false) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
      else if (type.value=="Boissons" && permission.value=="Autorisé") {
        if (datas[i].type=="boisson" && datas[i].permis==true) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
      else if (type.value=="Boissons" && permission.value=="Déconseillé") {
        if (datas[i].type=="boisson" && datas[i].permis==false) {
          console.log(datas[i].aliment);
             document.getElementsByClassName('type_field')[0].innerHTML+="<p>"+datas[i].aliment+"<p>";
        }
      }
    }
  }
  submit.addEventListener('click',analyze);
  query_2.addEventListener('click',query_by_type);
}else if (req.readyState==0) {
      console.log('connection failed');
  }
};


req.send();
