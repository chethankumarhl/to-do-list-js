let rem = document.querySelector("ul")
$("#add-butt").on("click",Perform)
function Perform(){
    if($("input").val() === ''){
        // alert("Error invalid input")
        let err = document.createElement("p");
        err.innerText = "Error:Please enter a valid input"
        err.classList.add("error")
        $(".works").prepend(err)
        setTimeout(()=>{
            err.remove();
        },3000);
     }else{
        let li = document.createElement("li")
        li.classList.add("list-style");
        var inpu = $("input").val();
        $("input").val('')
        li.innerHTML = inpu;
        rem.appendChild(li)
        let remBut = document.createElement("button")
        remBut.classList.add("button-style")
        remBut.innerText = "Remove"
        li.appendChild(remBut)
    
        $(".button-style").on("click",(e)=>{
            e.target.parentElement.remove(li)
          
            
        })
        li.addEventListener("click",()=>{
            // li.style.textDecoration = "line-through"
            li.style.backgroundColor = "#06D001"
            li.prepend(`Done        :`)
            // li.innerHTML = `${inpu} Done`
            // remBut.remove()
        })
     }
}
