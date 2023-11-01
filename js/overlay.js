var overlay = document.getElementById('overlay');
var loading = document.getElementById('loading');
var wave = document.getElementById('wave');

var timer = setTimeout(function() {
  hideOverlay();
}, 3000);

window.addEventListener('load', function() {
  clearTimeout(timer); // 在页面加载完成后清除定时器
  hideOverlay();
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
