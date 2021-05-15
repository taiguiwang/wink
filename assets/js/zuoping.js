
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
  if (i < 10) {i = "0" + i};  //在数字前面加0
  return i;
}

startTime();

//-----------------------------定时换body的背景图片-------------------------

var shuzhi = 0; //下标数值
var time = 2000;//设置时间间隔
var arr = new Array();//定义一个存放颜色位置的数组

arr[0] = "Bisque";
arr[1] = "yellow";
arr[2] = "Chartreuse";
arr[3] = "Darkorange";
arr[4] = "Plum";
arr[5] = "Tomato";

function huanTu() {
    if (shuzhi == arr.length-1) {
        shuzhi = 0;
    } else {
        shuzhi += 1;
    }
        document.body.style.background = arr[shuzhi];  //显示对应的颜色
}

    setInterval(huanTu, time);

