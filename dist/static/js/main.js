function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

// 判断是否微信登陆
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (/micromessenger/.test(ua)) {
    return true;
  }
  return false;
}

function getParams(str) {
  var reg = /([^&?#]+)=([^&?#]+)/g;
  var obj = {};
  str.replace(reg, function () {
    obj[arguments[1]] = arguments[2];
  })
  return obj;
}
window.operID = '544f176360d1a9f3c9d599df8a31898a'
if (isWeiXin()) {
  var params = getParams(location.href);
  if (!params.openId) {
    window.location.href = 'http://bp.people.com.cn/dw_daka/index.php/dangshi/index'
  } else {
    window.operID = params.openId
  }
}

var edit = [
  {
    "music": "http://cunchu-1251887489.cos.ap-beijing.myqcloud.com/people/music/%E9%BA%A6%E7%94%B0%E9%87%8C%E7%9A%84%E5%BE%AE%E9%A3%8E_1.mp3",
    "cover": "../resource/13.png"
  }
]
// 音乐播放
var audio= '';//这里的路径写上mp3文件在项目中的绝对路径
 
// audio.play();
function make (ind) {
  var item = edit[ind]
}