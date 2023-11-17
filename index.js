// console.log(params)

function getOs() {
  var UserAgent = navigator.userAgent.toLowerCase()
  return {
    isIpad: /ipad/.test(UserAgent),
    isIphone: /iphone os/.test(UserAgent),
    isAndroid: /android/.test(UserAgent),
    isWindowsMobile: /windows mobile/.test(UserAgent),
    isWin2K: /windows nt 5.0/.test(UserAgent),
    isXP: /windows nt 5.1/.test(UserAgent),
    isVista: /windows nt 6.0/.test(UserAgent),
    isWin7: /windows nt 6.1/.test(UserAgent),
    isWin8: /windows nt 6.2/.test(UserAgent),
    isWin81: /windows nt 6.3/.test(UserAgent),
    isWin: /windows/.test(UserAgent),
    isMac: /mac os/.test(UserAgent),
  }
}
function copy(str) {
  str = str || ''
  if (str.length == 0) {
    return false
  }
  var doc = document,
    body = doc.getElementsByTagName('body')[0]
  var input = doc.createElement('input')
  input.type = 'text'
  input.value = str
  input.style.opacity = 0
  input.style.position = 'absolute'
  input.style.left = 0
  input.style.top = 0

  body.appendChild(input)

  input.select()
  document.execCommand('Copy')
  body.removeChild(input)
  return true
}
function hide(node) {
  const len = node.length
  if (len > 1) {
    for (i = len; i--; ) {
      node[i].style.display = 'none'
    }
  } else {
    node.style.display = 'none'
  }
}
function show(node) {
  node.style.display = 'block'
}
/* imgModalVideo.onclick = function(e) {
  e.stopPropagation()
} */
var imgModal = $('#imgModal')[0]
function showModal($node) {
  // console.log($node)
  const $img = $node.find('img')
  imgModalImg.src = $img.attr('src') || $img.attr('data-src')
  imgDesc.innerHTML = $node.find('.text').html()

  show(imgModal)
}

$(document).on('click', '.mask', function () {
  $('.mask').addClass('hide')
})

function showDialog(html) {
  $('.prompt_text').html(html)
  $('.mask').removeClass('hide')
}

// jQuery('.online-qrcode').qrcode("http://150.158.92.110/devic/ComicTv.apk");
// jQuery('.lzy-qrcode').qrcode("https://wwt.lanzouq.com/b02dht9ab");

// 图片的弹窗
imgModal.onclick = function (e) {
  e.stopPropagation()
  hide(this)
}
var showIndex = 0
const $items = $('.item')
// 打开图片弹窗
$(document).on('click', '.item', function (e) {
  if (e.target.classList.contains('showimg')) {
    // showIndex =
    showModal($(this))
    for (var i = 0; i < $items.length; i++) {
      if ($items[i] === this) {
        showIndex = i
        return
      }
    }
  }
})
//

//
//
window.addEventListener('keydown', (e) => {
  const $lis = $('.item')
  console.log('e', e.keyCode)
  switch (e.keyCode) {
    case 37:
      showIndex = showIndex - 1
      if (showIndex < 0) {
        showIndex = $items.length - 1
      }
      showModal($items.eq(showIndex))
      break
    case 39:
      showIndex = showIndex + 1
      if (showIndex >= $items.length) {
        showIndex = 0
      }
      showModal($items.eq(showIndex))
      break
  }
})

//
// 检测标题栏的
function getUrlParams(url = '') {
  const map = {}
  url.split('&').map((it) => {
    const [key, val] = it.split('=')
    map[key] = val
  })
  return map
}
const params = getUrlParams(window.location.href.split('?')[1])
if (params.nomoyu === '1') {
  hide(document.querySelectorAll('.nomoyu-key'))
}
