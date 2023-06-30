const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


function addTask(){
    if(inputBox.value === ''){
        alert("Enter Some Data");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let div = document.createElement("div");
        div.innerHTML = "";
        div.style.width ="25px";
        div.style.height = "25px";
        div.style.borderRadius = "50%";
        //div.style.backgroundColor= "blue";
        li.appendChild(div);


    }

    inputBox.value = "";
    saveTask();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
        saveTask();


    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();

    }
    else if(e.target.tagName === "DIV" ){
        e.target.style.backgroundColor="blue";
    }

});

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();