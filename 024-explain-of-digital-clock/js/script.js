let $ = document;

let hour = $.querySelector("#hour");
let minute = $.querySelector("#minute");
let seconds = $.querySelector("#seconds");

setInterval(function () {
  let myTime = new Date();
  let nowHours = myTime.getHours();
  let nowminut = myTime.getMinutes();
  let nowsecond = myTime.getSeconds();
  if (nowHours < 10) {
    nowHours = "0" + nowHours;
  }
  if (nowminut < 10) {
    nowminut = "0" + nowminut;
  }
  if (nowsecond < 10) {
    nowsecond = "0" + nowsecond;
  }

  hour.innerHTML = nowHours;
  minute.innerHTML = nowminut;
  seconds.innerHTML = nowsecond;
}, 1000);
