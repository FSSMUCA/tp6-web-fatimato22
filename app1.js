let historique=[];
function calculer(){
a=Number(document.getElementById("valeur1").value);
b=Number(document.getElementById("valeur2").value);
c=document.getElementById("resultat");
d=document.getElementById("operateur").value;
e=document.getElementById("erreur");
e.innerHTML="";
let f ;
if(d=="+"){
    f=a+b;
}
else if(d=="-"){
    f=a-b;
}
else if(d=="*"){
    f=a*b;
}
else{
    if(b==0){
    e.innerHTML="on ne peux divisé sur 0";
        return;
    }
    
        f=a/b;
    }
c.value=f;
historique.push(a + " " + d + " " + b + " = " + f);
document.getElementById("historique").innerHTML +=
"<li>" + a + " " + d + " " + b + " = " + f + "</li>";
}


    