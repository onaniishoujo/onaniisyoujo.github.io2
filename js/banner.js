// 获取图片元素
var image = document.getElementById("banner");

// 计算需要滑动的距离
var targetDistance = 300;

// 监听滚动事件
window.addEventListener("scroll", function() {
  // 获取页面滚动的距离
  var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // 根据滚动距离计算不透明度
  var opacity = 1 - (scrollDistance / targetDistance);

  // 如果不透明度小于 0，设置为 0
  if(opacity < 0) {
    opacity = 0;
  }

  // 应用不透明度到图片
  image.style.opacity = opacity.toString();
});
