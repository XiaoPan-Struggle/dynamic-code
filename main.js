let demo = document.querySelector('.demo')
let string = `
你好，我是一名前端小白
接下来我要加样式了
body{
  color: red;
}
`
let n = 0
let string2 = ''

// demo.innerHTML = string.substring(0,n);

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
    console.log(string2)
    demo.innerHTML = string2
    if(n >= string.length-1) return
    step()
  },100)
}

step()