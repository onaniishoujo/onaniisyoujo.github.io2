var randomIndex = Math.floor(Math.random() * 10);

// 构建相对路径的图片文件名
var imageName = '/img/body' + randomIndex + '.jpg';

// 直接设置body元素的背景图片和背景大小
document.body.style.backgroundImage = 'url(' + imageName + ')';
document.body.style.backgroundSize = 'cover';
