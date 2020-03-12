
require('../wstyle/01.css');
// require('../img/img.jpg')
console.log('111')
let img = require('../img/img.jpg');

// let img = require('../images/a.jpg');
console.log('img ==> ', img);


let a = [1, 2, 3];
console.log('a ==> ', a);

//创建图片
let image = new Image();

if (/^data:image\/[A-Za-z]+;base64,/.test(img)) {
  image.src = img;
} else {
  image.src = './assets/' + img;
}

document.body.appendChild(image);