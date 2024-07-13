let inputInside = document.querySelector("#inputArea");
let unOrd = document.querySelector("ul")
let button = document.querySelector("#add")
// let butRem = document.querySelector("#remove")
let list = document.querySelector("li")

button.addEventListener("click", () =>{
    // console.log(inputInside.value)

    const li = document.createElement("li")
    li.innerText = inputInside.value;
    inputInside.value = ''
    unOrd.appendChild(li)
    const butRem = document.createElement("button")
    butRem.innerText = "remove"
    li.appendChild(butRem)

    butRem.addEventListener("click",()=>{
        unOrd.removeChild(li)
    })

})



