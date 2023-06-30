// ✌ :))

let btnElem=document.querySelector('.btn')

btnElem.addEventListener('click',function(){
    history.back()
})

let productAllArry = [
    { id: 1, titel: "Sport Shoes", price: 20,img:'images/1.png',descrebtion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
    { id: 2, titel: "Women Shoes", price: 40,img:'images/2.png',descrebtion:'Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupt' },
    { id: 3, titel: "Boots", price: 40,img:'images/3.png',descrebtion:'Voluptate consequuntur incidunt molestias?' },
  ];

let h1Elem=document.querySelector('h1')
let pElem=document.querySelector('p')
let imgElem=document.querySelector('img')


let locationParams=new URLSearchParams(location.search)
let getId=locationParams.get('id')



let mainProductObject=productAllArry.find(function(product){
    return product.id===Number(getId) 
})

if (mainProductObject) {
    h1Elem.innerHTML=mainProductObject.titel
    imgElem.setAttribute('src',mainProductObject.img)
    pElem.innerHTML=mainProductObject.descrebtion
    
}else{
    location.href='http://127.0.0.1:5501/'
}



console.log(mainProductObject);



