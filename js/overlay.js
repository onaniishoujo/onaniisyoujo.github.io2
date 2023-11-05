var overlay = document.getElementById('overlay');
var loading = document.getElementById('loading');
var wave = document.getElementById('wave');
var myImage = document.getElementById('image');

var timer = setTimeout(function() {
  hideOverlay();
}, 2000); // 将加载时间改为2秒

window.addEventListener('load', function() {
  clearTimeout(timer); // 在页面加载完成后清除定时器
  hideOverlay();
});

myImage.addEventListener('error', function() {
  hideOverlay(); // 当图片加载失败时，手动触发隐藏蒙版的函数
});

function hideOverlay() {
  loading.style.display = 'none';
  overlay.style.opacity = '0';
  setTimeout(function() {
    overlay.style.display = 'none';
  }, 1000);
}

setInterval(function() {
  var waveContent = wave.innerHTML;
  if (waveContent.length < 3) {
    wave.innerHTML += '~';
  } else {
    wave.innerHTML = '';
  }
}, 500);
