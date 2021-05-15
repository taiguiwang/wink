//-------------------------- 添加导航栏时间  -------------------------------

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  //在数字前面加0
  return i;
}

startTime();





// -------------------视频点击播放和暂停JS函数--------------------------------
const wyn = document.querySelector("#wyn");
const control_play = document.querySelector(".zanTing");
const ZT = document.querySelector(".anNiu");

control_play.onclick = function () {
  document.querySelector(".anNiu").style.display = "inline";
  document.querySelector(".zanTing").style.display = "none";
  wyn.play()//play()播放   pause()暂停
  this.style.display = "none";
}

ZT.onclick = function () {
  document.querySelector(".anNiu").style.display = "none";
  document.querySelector(".zanTing").style.display = "inline";
  wyn.pause()//play()播放   pause()暂停
  this.style.display = "none";
}





//------------------------ 将视频设置成静音状态-------------------------------

let myVid = document.getElementById("wyn");

function enableMute() {

  myVid.muted = true;

}

enableMute();