{
var dia = new Date()
var hora = dia.getHours()
//var hora = 16
var agora= document.getElementById("horas")

agora.innerHTML =`Agora são ${hora} horas.`
}
{

  var imag = document.getElementById("img")
  var cabe = document.getElementById("topo")
   
if(hora>18 && hora<=23){
  imag.innerHTML =`<img src="_img/_noite.png" alt="imagem da noite" height="200">`
  imag.innerHTML += `<p>Boa noite</p>`
  cabe.innerHTML = `<h1 id=topo-noite> Hora do dia</h1>`
  document.body.style.background ='#0a181b'

}else if(hora<6 && hora>=0){
  imag.innerHTML = `<img src="_img/_noite.png" alt="imagem da noite" height="200"></img>`
  imag.innerHTML +=`<p>Boa madrugada</p>`
  document.body.style.background ='#0a181b'

}else if(hora>6 && hora<12){
  imag.innerHTML = `<img src="_img/_manha.png" alt="imagem de manhã" height="200"></img>`
  imag.innerHTML +=`<p>Bom Dia!!!</p>`
  document.body.style.background = '#cbcac7'
}else if(hora<18 && hora>=12){
  imag.innerHTML = `<img src="_img/_tarde.png" alt="imagem de tarde" height="200"></img>`
  imag.innerHTML +=`<p>Boa tarde!!!</p>`
  document.body.style.background ='#fab58b'
}
}
