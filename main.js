let html = document.querySelector('.html')
let style = document.querySelector('.style')


let string = `
/*
*你好，我是一名前端小白
* 接下来我要开始表演了
* 如何做一个太极
* 首先我们准备一个 div
*
*/
.box {
  border: 1px solid red;
  width: 400px;
  height: 400px;
  top: 50px;
  right: 100px;
}
/* 
* 接下来将 div 变成圆圈
* 因为太极分阴阳
* 所以一半为白一半为黑
*/
.box{
  border: 2px solid #000;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 
* 然后再为太极生出两仪眼
* 白
*/
.box::before{
  content: '';
  width: 200px;
  height: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid red;
}
/* 
* 黑
*/
.box::after{
  content: '';
  width: 200px;
  height: 200px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border: 1px solid red;
  background-color: #000;
}
/* 
* 两仪眼也是圆形
*/
.box::before{
  border: none;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%);
}
.box::after{
  border: none;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 100%);
}
/* 
* 这样就完成太极制作过程啦
* 接下来我们让太极转起来吧！！！
*/
.box {
  animation: SpinTaiJi 3.8s infinite linear;
}

`

let n = 0
let string2 = ''

let step = () => {
  setTimeout(() => {
    n ++
    if(string[n] === '\n'){
      string2 += '<br>'
    } else if(string[n] === ' '){
      string2 += '&nbsp;'
    } else{
      string2 = string2 + string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n)
    window.scroll(0,9999)
    if(n >= string.length-1) return
    step()
  },20)
}

step()