var oHTML = document.querySelector('html');
var aWidth = oHTML.clientWidth;

//設計稿：375px, 默認字大小：16px

oHTML.style.fontSize = (aWidth/375)*16+'px'