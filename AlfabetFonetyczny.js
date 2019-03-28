var fileInput;

$().ready(function()
{
   $("#link1").click(
		function()
		{
		  $("#Toalety1").toggle("normal");
		});

		$.ajax({
           type: 'GET',
            url : "http://szybkoczytam.cba.pl/Quiz/test.txt",
            success : function (data) {
            fileInput=data;
            }
        });
 document.getElementById("Zadanie1_OdNowa").disabled = true;
});

//alfabet fonetyczny
var poziom;
function WypelnijKurs() {
document.getElementById("AlfabelFonetyczny_0").value = "Z"; 
document.getElementById("AlfabelFonetyczny_a0").value = "S"; 

document.getElementById("AlfabelFonetyczny_1").value = "D"; 
document.getElementById("AlfabelFonetyczny_a1").value = "T"; 

document.getElementById("AlfabelFonetyczny_2").value = "N"; 
document.getElementById("AlfabelFonetyczny_a2").value = ""; 

document.getElementById("AlfabelFonetyczny_3").value = "M"; 
document.getElementById("AlfabelFonetyczny_a3").value = ""; 

document.getElementById("AlfabelFonetyczny_4").value = "R"; 
document.getElementById("AlfabelFonetyczny_a4").value = ""; 

document.getElementById("AlfabelFonetyczny_5").value = "L"; 
document.getElementById("AlfabelFonetyczny_a5").value = ""; 

document.getElementById("AlfabelFonetyczny_6").value = "J"; 
document.getElementById("AlfabelFonetyczny_a6").value = ""; 

document.getElementById("AlfabelFonetyczny_7").value = "K"; 
document.getElementById("AlfabelFonetyczny_a7").value = "G"; 

document.getElementById("AlfabelFonetyczny_8").value = "W"; 
document.getElementById("AlfabelFonetyczny_a8").value = "F"; 

document.getElementById("AlfabelFonetyczny_9").value = "P"; 
document.getElementById("AlfabelFonetyczny_a9").value = "B"; 

}
var wCogramy=0;
function ZamianaCyfr(){
  if (sprawdzPoprawnosc()<0){
alert("Musisz wypełnić pola spółgłoskami!")
  }else{
    poziom = document.getElementById("ilosc_elementow").value;
    $("#Zadanie").toggle("normal");
    document.getElementById("Zadanie_button").disabled = true;
    document.getElementById("mojalfabet").style.display = "none";
    wCogramy=0;
    LadujLitery()
    AlfabetFonetycznyTxtboxy();
  }
}

function ZamianaLiter(){
  if (sprawdzPoprawnosc()<0){
alert("Musisz wypełnić pola spółgłoskami!")
  }else{
    poziom = document.getElementById("ilosc_elementow").value;
    $("#Zadanie").toggle("normal");
    document.getElementById("Zadanie_button").disabled = true;
    document.getElementById("mojalfabet").style.display = "none";
    wCogramy=1;
    LadujLitery()
    AlfabetFonetycznyTxtboxy();
  }
}

function sprawdzPoprawnosc() {
  var liczba=1;
  if (document.getElementById("AlfabelFonetyczny_0").value == "" && document.getElementById("AlfabelFonetyczny_a0").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_1").value == "" && document.getElementById("AlfabelFonetyczny_a1").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_2").value == "" && document.getElementById("AlfabelFonetyczny_a2").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_3").value == "" && document.getElementById("AlfabelFonetyczny_a3").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_4").value == "" && document.getElementById("AlfabelFonetyczny_a4").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_5").value == "" && document.getElementById("AlfabelFonetyczny_a5").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_6").value == "" && document.getElementById("AlfabelFonetyczny_a6").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_7").value == "" && document.getElementById("AlfabelFonetyczny_a7").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_8").value == "" && document.getElementById("AlfabelFonetyczny_a8").value == ""){
    liczba=-1;
  }
   if (document.getElementById("AlfabelFonetyczny_9").value == "" && document.getElementById("AlfabelFonetyczny_a9").value == ""){
    liczba=-1;
  }
  return liczba;
}
var mojelitert=[];
function LadujLitery(){

   for (var i = 0; i < 10; i++) {
      var lista = []
      if (document.getElementById("AlfabelFonetyczny_"+i).value==""){
         lista.push("_");
      }else{lista.push(document.getElementById("AlfabelFonetyczny_"+i).value);}
      if (document.getElementById("AlfabelFonetyczny_a"+i).value==""){
        lista.push("_");
      }else{lista.push(document.getElementById("AlfabelFonetyczny_a"+i).value);}
      mojelitert.push(lista);
   }
}

var arraytoMDA=[];
function AlfabetFonetycznyTxtboxy(){
  var mojatabela="<table><tbody>";
    for (var i = 0; i < 10; i++) {
        mojatabela+="<tr>";
        var ArrayWewnatrz=[];
        for (var j = 0; j < 3; j++) {
              mojatabela+="<td align=right>";
              var text5="";
                if (wCogramy==0){
                  for(var k=0; k<poziom;k++){
                    text5+= Math.floor((Math.random() * 10));
                  }
                   ArrayWewnatrz.push(text5)
               }else{
                 var ster="";
                  for(var k=0; k<poziom;k++){
                    var wartosc = Math.floor((Math.random() * 10));
                    ster+=wartosc;
                    if(mojelitert[wartosc][0]=="_" || mojelitert[wartosc][1]=="_" ){
                      if(mojelitert[wartosc][0]=="_" ){ text5+=mojelitert[wartosc][1];}else{ text5+=mojelitert[wartosc][0];}
                    }else{
                        var los = Math.random() ;
                        if (los<0.5){text5+=mojelitert[wartosc][0];}else{text5+=mojelitert[wartosc][1];}
                    }
                  }
                  ArrayWewnatrz.push(ster)
               }
              mojatabela+="<a class=timer>"+text5+"</a>---<input maxlength="+poziom+" class=ZMP_zadanie type=text id=zadanie2_"+i+"_"+j+"></input>";
              mojatabela+="</td>";
        }
        arraytoMDA.push(ArrayWewnatrz);
        mojatabela+="</tr>";
    }
    mojatabela+="</table></tbody>";
    document.getElementById("tabelaodpowiedzi").innerHTML = mojatabela;
}
var punkty_zadania=0;
function sprawdz_zad(){
if(wCogramy==0){
var x = document.getElementsByClassName("ZMP_zadanie");
for (var i = 0; i < x.length; i++) {
   var koordynaty = x[i].id.split("_");
   var mojacyfra = arraytoMDA[koordynaty[1]][koordynaty[2]];
   var odpowiedz;
   var punkty=0;
   if(mojacyfra.length==x[i].value.length){
   
     for (var j = 0; j < mojacyfra.length; j++){
       if (x[i].value[j].toLowerCase()==mojelitert[mojacyfra[j]][0].toLowerCase() || x[i].value[j].toLowerCase()==mojelitert[mojacyfra[j]][1].toLowerCase() ){
          punkty+=1;
       }}
    }else{
       x[i].style.backgroundColor = "red";
       x[i].disabled = true;
        punkty=0;
   }
  if(punkty == mojacyfra.length){
           x[i].style.backgroundColor = "yellowgreen";
           x[i].disabled = true;
           punkty_zadania+=punkty;
  }else{ 
     x[i].style.backgroundColor = "red";
     x[i].disabled = true;
     punkty=0;}
 }
}else{
var x = document.getElementsByClassName("ZMP_zadanie");
for (var i = 0; i < x.length; i++) {
   var koordynaty = x[i].id.split("_");
   var mojacyfra = arraytoMDA[koordynaty[1]][koordynaty[2]];
   var odpowiedz;
   var punkty=0;
   if(mojacyfra.length==x[i].value.length){
   
     for (var j = 0; j < mojacyfra.length; j++){
       if (x[i].value[j]==mojacyfra[j] ){
          punkty+=1;
       }}
    }else{
       x[i].style.backgroundColor = "red";
       x[i].disabled = true;
        punkty=0;
   }
  if(punkty == mojacyfra.length){
           x[i].style.backgroundColor = "yellowgreen";
           x[i].disabled = true;
           punkty_zadania+=punkty;
  }else{ 
     x[i].style.backgroundColor = "red";
     x[i].disabled = true;
     punkty=0;}
 }


}
 $("#mojalfabet").toggle("normal");
 document.getElementById("Zadanie_button").disabled = true;
  document.getElementById("Zadanie_WypelnijKurs").disabled = true;
  document.getElementById("Zadanie_button1").disabled = true;
  document.getElementById("Zadanie_sprawdz").disabled = true;
document.getElementById("zadanie_pkt").innerHTML = punkty_zadania +" pkt/"+30*x.length+" pkt";
 document.getElementById("Zadanie1_OdNowa").disabled = false;
}


function OdNowa(){
  location.reload();
}