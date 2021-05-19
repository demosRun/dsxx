function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

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

document.querySelectorAll('.user-img').forEach(element => {
  element.src = 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLn9C9SnC7AKCMyibnZzCHWK0rF9fKn8vnnncQaxRSpdXB1OU932Wm1cLvdWy3pva0dUbicwSD6wRZQ/132'
});
document.querySelectorAll('.user-name').forEach(element => {
  element.innerText = 'test'
});

var activeIndex = 0
var chapterIndex = 0
// ../resource/13.png
var edit = [
  {
    "music": "http://cunchu-1251887489.cos.ap-beijing.myqcloud.com/people/music/%E9%BA%A6%E7%94%B0%E9%87%8C%E7%9A%84%E5%BE%AE%E9%A3%8E_1.mp3",
    "cover": "./static/resource/13.png",
    "title": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
    "showTitle": "中国共产党<br>简史1",
    "chapter": [
      {
        "title": "第一章 中国共产党的创建和投身大革命的洪流",
        "time": "2019-12-01",
        "subject": [
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
        ]
      },
      {
        "title": "第二章 中国共产党的创建和投身大革命的洪流",
        "time": "2019-12-01",
        "subject": [
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
        ]
      },
    ]
  },
  {
    "music": "http://cunchu-1251887489.cos.ap-beijing.myqcloud.com/people/music/%E9%BA%A6%E7%94%B0%E9%87%8C%E7%9A%84%E5%BE%AE%E9%A3%8E_1.mp3",
    "cover": "../resource/13.png",
    "title": "第二章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
    "showTitle": "中国共产党<br>简史2",
    "chapter": [
      {
        "title": "2第一章 中国共产党的创建和投身大革命的洪流",
        "time": "2019-12-01",
        "subject": [
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1912年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1913年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1915年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
        ]
      },
      {
        "title": "2第二章 中国共产党的创建和投身大革命的洪流",
        "time": "2019-12-01",
        "subject": [
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
          {
            "topic": "第一章 中国共产党的创建和投身大革命的洪流《中国共产党简史》",
            "timu": "1/10 1911年10月爆发的（ ），推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "jieshi": "1911年10月爆发的辛亥革命，推翻了清王朝的统治，建立了中华民国，结束了统治中国两千多年的君主专制制度。",
            "list": [
              "错误答案1",
              "错误答案2",
              "正确答案",
            ],
            "correct": 2
          },
        ]
      },
    ]
  },
]
// 音乐播放
var audio = '';//这里的路径写上mp3文件在项目中的绝对路径

// 显示题目列表
function timuList (editInd) {
  // 获取成绩列表
  
  fetch("http://bp.people.com.cn/dw_daka/index.php/dangshi/allzhang?openId=" + window.operID)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    var saveArr = {}
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      saveArr[element.zhangjie] = element.fenshu
    }
    var item = edit[editInd].chapter
    var temp = ''
    // 生成章节
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      let codeStr = `<div class="code">未测试</div>`
      if (saveArr[element.title]) {
        codeStr = `<div class="code active">成绩: ${saveArr[element.title]}</div>`
      }
      temp += `<div class="item" onclick="dati(${index}, '${element.title}')"><h3>${element.title}</h3>${codeStr}<div class="time">${element.time}</div></div>`
    }
    document.querySelector('.tiaozhan-box .zhangjie').innerHTML = temp
    // 生成更多
    temp = ''
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      let codeStr = `<div class="code">未测试</div>`
      if (saveArr[element.title]) {
        codeStr = `<div class="code active">成绩: ${saveArr[element.title]}</div>`
      }
      temp += `<div class="item" onclick="gengduo(${editInd}, '${index}')"><h3>${element.title}</h3>${codeStr}<div class="time">${element.time}</div></div>`
    }
    document.querySelector('.gengduo .zhangjie').innerHTML = temp
  })
  .catch(error => console.log('error', error));
}
var datiTitle = '测试章节'

function dati (index, title) {
  datiTitle = title
  chapterIndex = parseInt(index)
  owo.go('dati//moveToLeft/moveFromRight')
}

// audio.play();
// ../resource/arrow.png
function make (ind) {
  activeIndex = ind
  console.log(activeIndex)
  var item = edit[ind]
  audio = new Audio(item.music)
  document.querySelector('.music-bar .time-now').innerText = 0
  document.querySelector('.page-1 .title').innerText = item.title
  audio.ontimeupdate = function(event) {
    var currentTime = parseInt(audio.currentTime)
    document.querySelector('.music-bar .time-now').innerText = currentTime
    document.querySelector('.music-bar .doit').style.left = ((currentTime / audio.duration) * 100) + '%'
  }
  setTimeout(() => {
    document.querySelector('.music-bar .time-end').innerText = parseInt(audio.duration)
  }, 1000);
  // 生成题目
  var titleStr = ''
  for (let index = 0; index < edit.length; index++) {
    const element = edit[index];
    titleStr += `<div class="item" onclick="make(${index})">${element.showTitle}<img class="arrow" src="./static/resource/arrow.png"></div>`
  }
  document.querySelector('.select-box').innerHTML = titleStr
  setTimeout(() => {
    document.querySelectorAll('.select-box .item')[ind].classList.add('active')
  }, 100);
  // 生成更多题目
  titleStr = ''
  for (let index = 0; index < edit.length; index++) {
    const element = edit[index];
    titleStr += `<div class="item" onclick="make(${index})">${element.showTitle}<img class="arrow" src="./static/resource/arrow.png"></div>`
  }
  document.querySelector('.gengduo .select-box').innerHTML = titleStr
  setTimeout(() => {
    document.querySelectorAll('.gengduo .select-box .item')[ind].classList.add('active')
  }, 100);
  timuList(ind)
}

make(activeIndex)


function gengduo (index, index2) {
  owo.go('page1//moveToLeft/moveFromRight')
}
