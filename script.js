let ul = document.querySelector('ul') ;
let btn = document.querySelector('button') ;
let inp = document.querySelector('input') ;

btn.addEventListener("click" , function(event) {
    let li = document.createElement("li") ;
    li.innerText = inp.value ;

    let btn2 = document.createElement("button") ;
    btn2.innerText = "delete" ;
    btn2.classList.add("delete");

    li.appendChild(btn2) ;
    ul.appendChild(li);
    inp.value = "" ;

    let delBtns = document.querySelectorAll(".delete") ;
    for (btns of delBtns){
        btn2.addEventListener("click", function(event){
          let par = this.parentElement ;
          par.remove();
       })
    }

   
});

// ul.addEventListener("click",function(event){
//    if (event.target.nodeName == "BUTTON") {
//     let par = event.target.parentElement ;
//     par.remove();
//    }
// })




