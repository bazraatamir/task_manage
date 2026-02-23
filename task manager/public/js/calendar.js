let creatHeaderDate = (date)=>{
   let dateInfo= document.querySelector(".month-title")
   dateInfo.innerHTML = ""
   let stringDate = document.createElement("h1")
   let numberDate = document.createElement("p")
   stringDate.classList.add("mono")
   numberDate.classList.add("mono")
   stringDate.innerText = `${date.getMonth()+1}-p  сар ${date.getFullYear()}`
   numberDate.innerText = `Өнөөдөр: ${date.getFullYear()}-0${date.getMonth()+1}-${date.getFullYear()}`
   dateInfo.appendChild(stringDate)
   dateInfo.appendChild(numberDate)
}


let creatGridDateHeader=(date)=>{
   let calendarHeader = document.querySelector(".calendar-header")
   calendarHeader.innerHTML = ""
   let week= ["Да","Мя","Лх","Пү","Ба","Бя","Ня"]
   week.forEach((el)=>{
      let gridItem= document.createElement("div")
      gridItem.classList.add("day-name") 
      gridItem.classList.add("mono") 
      gridItem.innerText = el
      calendarHeader.appendChild(gridItem)
   })
}

let creatDateBody = (date)=>{
   let totalDays = new Date(date.getFullYear(), date.getMonth()+1,0).getDate()
   let gridBody = document.querySelector(".calendar-grid")
   gridBody.innerHTML = ""
   let firstDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDay()
   for(let i = 0; i<firstDay; i++){
      let calendarDay = document.createElement("div")
      let  dayNumber = document.createElement("div")
      calendarDay.classList.add("calendar-day")
      calendarDay.classList.add("glass")
      dayNumber.classList.add("day-number")
      dayNumber.classList.add("mono")
      calendarDay.appendChild(dayNumber)
      gridBody.appendChild(calendarDay)
   }
 
   for( let i = 1; i<totalDays+1; i++ ){
      let calendarDay = document.createElement("div")
      calendarDay.dataset.date = `${date.getFullYear()}-${date.getMonth()+1}-${i}`
      let  dayNumber = document.createElement("div")
      calendarDay.classList.add("calendar-day")
      calendarDay.classList.add("glass")
      dayNumber.classList.add("day-number")
      dayNumber.classList.add("mono")
      dayNumber.innerText = i
      calendarDay.appendChild(dayNumber)
      gridBody.appendChild(calendarDay)
   }
}

export default function createCalendar(date){
   if(!date){
      date = new Date()
   }else{
      date = new Date(date);
   }
   
   creatHeaderDate(date)
   creatGridDateHeader(date)
   creatDateBody(date)

  
}