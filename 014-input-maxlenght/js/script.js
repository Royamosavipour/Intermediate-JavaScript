let $=document

let inputElem=$.querySelector('input')
let spanElem=$.querySelector('.counter')
let maxLenght=inputElem.getAttribute('maxlength')




inputElem.addEventListener('keyup',function(){
    spanElem.innerHTML=maxLenght-inputElem.value.length
    

})