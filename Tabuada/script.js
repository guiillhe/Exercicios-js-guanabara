function tabuada(){
  var A = 0
  var den = document.getElementById('denominador')
  var B = Number(den.value)
  var tab = document.getElementById('seltab')

  tab.innerHTML = ''
  for(let C = A; C<=10;C++) {
    D=C*B; 
    let item = document.createElement('option')
    item.text = `${C} x ${B} =  ${D} `
    item.value =`tab${A}`
    tab.appendChild(item)
}
}
