function agregarInfo(){
    var name=document.createElement("p")
    name.id="nomb"
    name.innerHTML="Raymond"
    document.body.appendChild(name)

    var edad=document.createElement("p")
    edad.id="years"
    edad.innerHTML="23 años"
    document.body.appendChild(edad)

    var hobbie1=document.createElement("p")
    hobbie1.id="hob1"
    hobbie1.innerHTML="videojuegos"
    document.body.appendChild(hobbie1)

    var hobbie2=document.createElement("p")
    hobbie2.id="hob2"
    hobbie2.innerHTML="cuidar mascotas"
    document.body.appendChild(hobbie2)

    var hobbie3=document.createElement("p")
    hobbie3.id="hob3"
    hobbie3.innerHTML="salir con mis amigos"
    document.body.appendChild(hobbie3)
    
}