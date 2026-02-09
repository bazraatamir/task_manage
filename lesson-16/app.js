var inputData = document.getElementById("taskid");
var taskList = document.getElementById("tasklist");
var empty = document.getElementById("empty");
var tasks = document.getElementById("tasks-id");
var statusContainer = document.getElementById("status-container");
var waitingCount = document.getElementById("waitingId");
// inputData.addEventListener("keydown",getData)
var arr = [];

// function getData(e){
//     console.log("data",e.target.value);
// }


function addTask(){
    arr.push(inputData.value);
    if (arr.length > 0){
        empty.style.display = "none";
        tasks.style.opacity = "1";
        statusContainer.style.display = "flex";
        waitingCount.innerText = arr.length;

    }
    taskList.innerHTML += `<li>${arr[0]}</li>`

}