function verificar(){
  var tnac = document.getElementById(`txtano`)
  var nac = Number(tnac.value)
  var atualT= new Date()
  var atualY = atualT.getFullYear()
  var resu = document.getElementById("res")

  if(nac>=atualY){
    alert("peido")

  }
  else{
  var tnac = document.getElementById(`txtano`)
  var nac = Number(tnac.value)
  var atualT= new Date()
  var atualY = atualT.getFullYear()
  var resu = document.getElementById("res")
  var sext = document.getElementsByName("radsex");
  var sexv = ''
  var idade = atualY-nac
  var img = document.getElementById("photo")

  if(sext[0].checked){
     sexv= 'um Homem'
     if(idade>=0 && idade < 14){
       img.innerHTML = `<img src="_imagens/male_01.png" id="photo-m">`
       //bebe
     }else if(idade<18){
      img.innerHTML = `<img src="_imagens/male_02.png" id="photo-m">`
     //criança
     
     }else if(idade<50){
      img.innerHTML = `<img src="_imagens/male_03.png" id="photo-m">`
       //adulto
     }else{
      img.innerHTML = `<img src="_imagens/male_04.png" id="photo-m">`
      //idoso 
     }
    }else{
     sexv= 'uma mulher'
     if(idade>=0 && idade < 14){
      img.innerHTML = `<img src="_imagens/female_01.png" id="photo-m">`
      //bebe
    }else if(idade<18){
     img.innerHTML = `<img src="_imagens/female_02.png" id="photo-m">`
    //criança
    
    }else if(idade<50){
     img.innerHTML = `<img src="_imagens/female_03.png" id="photo-m">`
      //adulto
    }else{
     img.innerHTML = `<img src="_imagens/female_04.png" id="photo-m">`
     //idoso 
    }
     
  }
  resu.innerHTML =`Detectamos  ${sexv} de ${atualY-nac} anos`
}
}