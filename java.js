function ShopNow()
{
document.getElementById("Shop").innerHTML= "Choose the best cateogry that you want and complete the process by shopping from us";
}
function CallUs()
{
    document.getElementById("Call Us").innerHTML="For any help or inquiry Call Us !";
}
if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "Good day!";
  }
  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("Days").innerHTML = "Today is " + day;
