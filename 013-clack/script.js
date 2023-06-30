const timedigital=document.querySelector('.time-digital')

function setTime(){
    const now=new Date();
    const second=now.getSeconds();
    const minutse=now.getMinutes();
    const hours=now.getHours();
    timedigital.innerHTML=
    `${hours}:
    ${minutse<10?'0'+`${minutse}`:minutse} : 
    ${second<10?'0'+`${second}`:second}`;

}

setInterval(setTime,1000)