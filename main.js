let demo = document.querySelector('.demo')
let string = `你好，我是一名前端小白`
let n = 0

// demo.innerHTML = string.substring(0,n);

let step = () => {
  setTimeout(() => {
    n ++
    demo.innerHTML = string.substring(0,n)
    if(n >= string.length) return
    step()
  },400)
}

step()