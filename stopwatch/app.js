var data = document.querySelector('#input')
var addBtn = document.querySelector('#add')
var list = document.querySelector('#task-list')
class Task {
    constructor(task,status) {
        this.task = task
        this.status = status
    }
}    
var allTasks = []
var complateTasks = []
var procesingTasks=[]

var procesing= "procesing"
var complate= "complate"


addBtn.addEventListener('click', ()=>{
    task = new Task(data.value, "waiting")
    arr.push(task)
    console.log(arr)
    displayTasks()
})

function displayTasks() {
    list.innerHTML = complateTasks.map((task)=>{

        return `<li>
                    <p>${task.task}</p>
                    <button class="delete" onclick="changeStatus(${arr.indexOf(task)}, procesing)">procesing</button>
                    <button class="delete" onclick="changeStatus(${arr.indexOf(task)},complate)">complate</button>

                </li>`  
    })

}


const changeStatus = (index,status)=>{
     arr[index].status= status
     if(status==="complate"){
        complateTasks = allTasks.filter((el)=> el.status==="complate")
     }else{
        procesingTasks = allTasks.filter((el)=>el.status ==="procesing")
     }
   
}
// displayTasks()