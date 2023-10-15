document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('changeBackgroundLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为

    // 随机生成0到9之间的整数
    var randomIndex = Math.floor(Math.random() * 10);

    // 构建相对路径的图片文件名
    var imageName = '/img/body' + randomIndex + '.jpg';

    // 直接设置body元素的背景图片
    document.body.style.backgroundImage = 'url(' + imageName + ')';
  });
});
