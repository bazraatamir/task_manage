// var input = document.getElementById("input");
// var btn = document.getElementById("add");
// var ul = document.getElementById("text");



// var arr = [];

// class Task{
//     constructor(id,name,status){
//         this.id = 
//         this.name = name;
//         this.taskStatus = status;
//     }
//     changeStatus(newStatus){
//         this.taskStatus = newStatus;
//     }
// }

// var a = new Task(0,"task1","waiting");
// var b = new Task(1,"task2","waiting");
// arr.push(a);
// arr.push(b);

//  console.log(arr);


// btn.addEventListener("click",function(){
//     var newTask = new Task(arr.length,input.value, "waiting");
//     arr.push(newTask);
//     display();
//     return
// })

// function display(){
//     if(arr.length > 0){
//         for( var i = 0; i < arr.length; i++){
//             if(arr[i].taskStatus === "waiting"){
//                 ul.innerHTML += `<li>
//                     <p class="task-text" >${arr[i].name}</p>
//                     <button class="task-del" id="${i}">delete</button>
//                     </li>`;
//         }
//     }
//     return
// }
// }

// window.onload = function(){
//     display();
// }

var input = document.getElementById("input");
var numbers = document.getElementsByClassName("numbers");
const oprators = document.getElementsByClassName("oprators");
var oprator = "";
var currentValue = "";


for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click",handleNumberClick )
}
for(var i = 0; i < oprators.length; i++){
    oprators[i].addEventListener("click",handleOprator )
}

function handleNumberClick(e){
        if(e.target.innerText === "." ){
            currentValue += e.target.innerText;
        }else if(currentValue === "0") {
            currentValue = e.target.innerText;
        }
        else{
            currentValue += e.target.innerText;
        }
        oprator = "";
        display();
}


function handleOprator(e){
    if(e.target.innerText === "="){
        console.log(currentValue);
        currentValue = eval(currentValue);
        console.log(currentValue);
        display();
    }
    else if(oprator == ""){
        oprator = e.target.innerText;
        currentValue += oprator;
    }

    
    display();
    return
}

function display(){
    input.value = currentValue;
}
