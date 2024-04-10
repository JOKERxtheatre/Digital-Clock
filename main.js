function updateClock() {
  let now = new Date();
  let dname = now.getDay();
  let month = now.getMonth();
  let dnum = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let period = "AM";

  if(hour == 0) {
    hour = 12
  }
  if(hour > 12) {
    hour= hour - 12
    period = "PM"
  }

  Number.prototype.pad = function(digits){
    for(let n = this.toString();n.length<digits; n=0 +n)
    return n
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
  ];
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  let values = [week[dname], months[month], dnum.pad(3), year, hour.pad(2), min.pad(3), sec.pad(3), period];
  for(let i = 0; i<ids.length;i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i]
}
function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
