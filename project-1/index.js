
function autoTimeUpdate(){
var dateTime = new Date();
var hours = dateTime.getHours();
var minute =dateTime.getMinutes();
var second =dateTime.getSeconds();
var session ='AM'
if(hours >12){
    session = "PM";
}
    
if(hours< 10){
  hours="0"+ hours;  
}

if(minute< 10){
    minute="0"+ minute;  
  }
  if(second< 10){
    second="0"+ second;  
  }



document.getElementById('hours').innerHTML = hours;
document.getElementById('minute').innerHTML = minute;
document.getElementById('second').innerHTML = second;
document.getElementById('am_or_pm').innerText= session;
let element1 =document.getElementById
if (hours >=08 && hours<11 && session=="AM") {
  document.getElementById("img-1").setAttribute("src", "GoodMorning.png");
  document.getElementById("msg2").innerHTML =" Grab Sime Healthy Breakfast!!!";
  document.getElementById("msg").innerHTML = "GOOD MORNING!! WAKE UP !!";
}
if (hours>=12 && hours<16 && session=="PM") {
  document.getElementById("img-1").setAttribute("src", "GoodAfternoon.png");
  document.getElementById("msg2").innerHTML = " LET'S HAVE SOME LUNCH!!!";
  document.getElementById("msg").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
}
if (hours >= 16 && hours < 20 && session=="PM"){
  document.getElementById("img-1").setAttribute("src", "lunch_image@2x.png");
  document.getElementById("msg2").innerHTML ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  document.getElementById("msg").innerHTML = "GOOD EVENING !!";
}
if (hours >= 20 && session=="PM"){
  document.getElementById("img-1").setAttribute("src", "goodnight_image@2x.png");
  document.getElementById("msg2").innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
  document.getElementById("msg").innerHTML = "GOOD NIGHT !!";
}
}
setInterval(autoTimeUpdate,1000)
 
let selectElement =document.getElementById('wakeup');
let selectElement1 =document.getElementById('lunchtime');
let selectElement2 =document.getElementById('naptime');
let selectElement3 =document.getElementById('nightTime');
 
let wakeup1 ="";
let wakeup2 ="";
let wakeup3 ="";
let wakeup4 ="";

function changeImg(){
  wakeup1 =selectElement.options[selectElement.selectedIndex].innerText;
  wakeup2 =selectElement1.options[selectElement.selectedIndex].innerText;
  wakeup3 =selectElement2.options[selectElement.selectedIndex].innerText;
  wakeup4 =selectElement3.options[selectElement.selectedIndex].innerText;

  document.getElementById('div3').innerHTML = `
  <span> Wake Up Time : ${wakeup1} </span>
            <br>
            <span> Lunch Time   : ${wakeup2}  </span>
            <br> 
            <span> Nap Time     : ${wakeup3} </span>
            <br>
            <span> Night Time   : ${wakeup4} </span>
  
  `;
}










