let theInput = document.querySelector("input")
let addButton = document.querySelector(".plus")
console.log(addButton)
let taskContainer = document.querySelector(".tasks-contant")
let tasksCount = document.querySelector(".tasks-count span")
let taskscompleted = document.querySelector(".tasks-complete span")
let finishAll = document.querySelector(".finishedall")
let deleteAll = document.querySelector(".deletAll")
window.onload=function(){
    theInput.focus();
}
addButton.addEventListener("click", function(){
    if(theInput.value ===""){
        prompt("NO Tasks To Add");
      
    }
    else{
        let nomsgadd = document.querySelector(".no-tasks-message");
        if (document.body.contains(document.querySelector(".no-tasks-message"))){
            nomsgadd.remove();
        }
        
        creatmainspan();
        theInput.value= "";
        theInput.focus();

        calculateTasks()


    }
    localStorageSet()
    
});
emo()

function emo(){
    let BTN = document.createElement("div")
    BTN.className = "all"
    let de = document.createElement("button")
    de.className = "deleteall"
    de.innerText = "Delete"
    let fin = document.createElement("button")
    fin.className = "finishall"
    fin.innerText = "Finish All"
    BTN.append(de, fin)
    document.querySelector(".todo-container").append(BTN)
}
document.addEventListener("click", function(e){
    if(e.target.className=="delete"){
        e.target.parentNode.remove();
        if(taskContainer.childElementCount==0){
            createNoTask();
        }
        
    }
    if (e.target.classList.contains("task-box")){
        e.target.classList.toggle("finished")
    }
    if (e.target.classList.contains("deleteall")){
        let task=document.querySelectorAll(" .task-box");
    console.log(task)        
        for(let i= 0;i<task.length;i++){
            task[i].remove();
            
        }
    }
        if (e.target.classList.contains("finishall")) {
            let task = document.querySelectorAll(" .task-box");
            console.log(task)
            for (let i = 0; i < task.length; i++) {
                task[i].classList.toggle("finished");

            }
     
    }
            calculateTasks();
    
});

function localStorageSet(){
    let todolistitem=document.querySelectorAll(".task-box");
    let todolistarray =[];
    todolistitem.forEach((item)=>{
        todolistarray.push(item.textContent.replace("Delete",""))
    });

    
    let st= localStorage.setItem("todolist", JSON.stringify(todolistarray))
    
    let stored = JSON.parse(localStorage.getItem("todolist"))

    console.log(stored)
}


function calculateTasks(){
    tasksCount.innerHTML = document.querySelectorAll(".tasks-contant .task-box").length;
    taskscompleted.innerHTML = document.querySelectorAll(".tasks-contant .finished").length;

}

function createNoTask(){
    let msgspn=document.createElement("span");
    let msgtext=document.createTextNode("No tasks to show");
    msgspn.className="no-tasks-message";
    msgspn.append(msgtext);
    taskContainer.append(msgspn);

}

function creatmainspan(){
    let mainSpan = document.createElement("span")
    let text = document.createTextNode(theInput.value)
    mainSpan.className = "task-box";
    mainSpan.appendChild(text);
    let delet = document.createElement("span")
    delet.innerText = "Delete"
    delet.className = "delete"
    mainSpan.appendChild(delet)
    taskContainer.append(mainSpan)
}