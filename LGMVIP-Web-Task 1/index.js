const list = document.getElementById("print-list");
const AddItem = document.getElementById("button");
const input = document.getElementById("input-Field");




function tasks() {

    if (input.value.trim() === ""){
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value ="";

        
}

input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        AddItem.click();
    }
});



list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("finished");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
