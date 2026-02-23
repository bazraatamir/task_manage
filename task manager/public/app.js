import createCalendar from "./js/calendar.js"
var addBtn = document.querySelector('#add-btn')
var popUp= document.querySelector(".pop-up-modal")
let nextBtn = document.querySelector("#next-btn")
let addTodo = document.querySelector("#add-todo") 
const arr=[]

class Task{
    constructor(task,date){
        this.task = task
        this.date = date
    }
}

addBtn.addEventListener("click",()=>{
    popUp.style.display="flex"
})

window.onclick = (e)=>{
    if(e.target== popUp){
        popUp.style.display="none"
    }

}

let next = ()=>{
    createCalendar("2026-03-01")
}


nextBtn.addEventListener("click",()=>{
    next()
})

addTodo.addEventListener("click",()=>{
    

})


const createTask = (date,task)=>{
    let todoTask = Task(task,date)
    arr.push(todoTask)
    console.log(arr)
}








window.addEventListener("load",()=>{
    createCalendar()
})