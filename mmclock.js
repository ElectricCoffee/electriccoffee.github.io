let totalDays = 3;
let currentDay = 0.0;
let params = new URLSearchParams(window.location.search);

if (params.has("days")) {
  totalDays = parseInt(params.get("days"));
}

function getHours(current) {
  return (totalDays - current) * 24
}

function getOrdinal(num) {
  // annoying special case
  if (num == 11 || num == 12 || num == 13) {
    return num + "th";
  }

  let finalDigit = num % 10;
  switch (finalDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

function setTime(days) {
	let day = document.getElementById("number");
  let hours = document.getElementById("time");
  let dayNight = document.getElementById("time-of-day");
  let wholeDays = Math.floor(days);

  dayNight.innerHTML = days % 1 == 0 ? "Dawn" : "Night";
  day.innerHTML = wholeDays + 1 == totalDays ? "Final" : getOrdinal(wholeDays + 1);
  hours.innerHTML = getHours(days);
  
  if (wholeDays + 1 > totalDays) {
  	let dayHeader = document.getElementById("number-header");
  	let hourHeader = document.getElementById("time-header");
    let page = document.getElementById("page");
    
  	dayHeader.innerHTML = "A New Day";
    hourHeader.innerHTML = "";
    page.style.backgroundColor = "white";
    page.style.color = "black";
  }
}

setTime(currentDay);

document.getElementById("page").onclick = function() {
  if (currentDay < totalDays) {
    currentDay = currentDay + 0.5;
  }
  setTime(currentDay);
}
