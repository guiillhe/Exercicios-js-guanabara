function contar(){
  var N1 = document.getElementById('inicio')
  var N2 = document.getElementById('fim')
  var N3 = document.getElementById('salto')

  if(N1.value == 0 ||N2.value == 0 ||N3.value == 0  ){
    alert('[ERRO] Faltam argumentos')
  }else if(N1.value>N2.value){
    alert('O inicio precisa ser maior que o final')
  } else {  
  var resu = document.getElementById('resultado')
  
  resu.innerHTML = 'Contando <br/>'

  let A = Number(N1.value)
  let B = Number(N2.value)
  let C = Number(N3.value)

  while(A<=B){
    resu.innerHTML += `${A} \u{1F449}`
    A=A+C
  }
  resu.innerHTML+=`\u{1F3C1}`
}
}


