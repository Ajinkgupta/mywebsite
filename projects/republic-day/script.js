 // Set the date we're counting down to
var countDownDate = new Date("Jan 26, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
  
// Find the distance between now and the count down date
var distance = countDownDate - now;
  
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
  
// If the count down is over, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

var str = window.location.search.substring(3); 
    var res = decodeURI(str);
     document.getElementById("referrer1").innerHTML=decodeURI(str); 
  document.getElementById("referrer").innerHTML=decodeURI(str); 
    
  document.title=decodeURI(str)+" wishing you happy republic day 2021";

  function getInputValue(){
              // Selecting the input element and get its value 
              var inputVal = document.getElementById("myInput").value;
              
            
             document.getElementById("outputCity").innerText ="https://www.theajinkgupta.tk/projects/republic-day/?r="+ inputVal;
             document.getElementById("outputCity").style.display = "block";
             document.getElementById("referrer1").innerHTML=inputVal; 
  document.getElementById("referrer").innerHTML=inputVal; 
             
    document.getElementById("myAnchor").href ="whatsapp://send?text=🤗😇 Have you seen this???"+inputVal+" send you a surprise message %0A💁 *Open this*%0A👇 https://www.theajinkgupta.tk/projects/republic-day/?r="+inputVal;
    document.getElementById("myAnchor").style.display = "block";
          }
