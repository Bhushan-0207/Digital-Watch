
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click",() =>{
    formatSwitchBtn.classList.toggle("active");

    var formatVakue = formatSwitchBtn.getAttribute("data-format");

    if(formatVakue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});


function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    if(hours >= 12){
        period = "PM" ;
    }


    var formatVakue = formatSwitchBtn.getAttribute("data-format");

    if(formatVakue === "12"){
        hours = hours > 12 ? hours %12 : hours;
    }

    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    

    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
} 

var uddateClock = setInterval(clock,1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default",{weekday : "long"});
const monthName = today.toLocaleString("default",{ month: "long"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".date-name").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotmenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", ()=>{
    dotmenu.classList.toggle("active");
});

document.addEventListener("click", (e) =>{
    if(e.target.id !== "active-menu"){
        dotmenu.classList.remove("active");
    }
});