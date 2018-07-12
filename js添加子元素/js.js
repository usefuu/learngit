window.onload=() => { 
    let div=document.createElement("div")
    div.style.cssText="position: absolute;right:0px;bottom:0px;"
    let img=document.createElement("img")
    img.src="https://cdn.liaoxuefeng.com/cdn/files/attachments/0013849085607106c2391754c544772830983d189bad807000/0"
    img.style.height="200px"
    img.style.width="200px"
    let body=document.getElementsByTagName('body')[0]
    let button=document.createElement("button")
    button.setAttribute("style","position: absolute;right:0px;")
    button.innerText="退出"
    div.appendChild(button)
    div.appendChild(img)
    body.appendChild(div)
    button.addEventListener("click",()=>{
        console.log(11)
    })
 };

