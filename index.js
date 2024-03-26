function updateClock() {
  const now = new Date();
  let hours = now.getHours(); //.toString().padStart(2, 0); //first two characters pad them with zero
  //to make a 12 hr timer/clock
  const meridiem = hours >= 12 ? "PM" : "AM"; // if hours is greater then 12 or smaller then 12
  //compact way to convert 24hrs to 12hrs clock
  hours = hours % 12 || 12; // 15 hrs ka remainder ayega 3 so, 3 P.M.
  hours = hours.toString().padStart(2, 0);

  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
