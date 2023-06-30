const listItems = [
  { id: 1, name: "Amin", family: "Saeedi Rad" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Qadir", family: "Yolme" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "Amin", family: "Saeedi Rad" },
  { id: 7, name: "Amir", family: "Zehtab" },
  { id: 8, name: "Qadir", family: "Yolme" },
  { id: 9, name: "Babak", family: "Mohammadi" },
  { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];

const list = document.querySelector("#list");
const pagination = document.querySelector("#pagination");

let currentPage = 1;
let rowcount = 5;

function displyUserItem(allUserArry, userContainer, rowcount, currentPage) {
    userContainer.innerHTML=''
  let endIndex = currentPage * rowcount;
  let startIndex = endIndex - rowcount;
  let showArry = allUserArry.slice(startIndex, endIndex);
  showArry.forEach((element) => {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = element.name + "" + element.family;

    list.appendChild(userElement)
  });
}

function setupPagination(allUserArry,pagination,rowcount){
    pagination.innerHTML=''
    let pageCount=Math.ceil(allUserArry.length/rowcount)

    for (let index = 1; index < pageCount+1; index++) {
        let btn=paiginationBtn(index,allUserArry)
       pagination.appendChild(btn)
        
    }
}

function paiginationBtn(page,allUserArry){
    let button=document.createElement('button')
    button.innerHTML=page
    
    if (page===currentPage) {
        button.classList.add('active')
        
    }
    button.addEventListener('click',function(){
        currentPage=page
        displyUserItem(allUserArry,list,rowcount,currentPage)

        let viwPage=document.querySelector('button.active')
        viwPage.classList.remove('active')

        button.classList.add('active')
    })
    return button

}

displyUserItem(listItems, list, rowcount, currentPage);
setupPagination(listItems,pagination,rowcount)
