const secondHand =  document.querySelector('.sec-hand');
const minuteHand =  document.querySelector('.min-hand');
const hourHand =  document.querySelector('.hour-hand');



function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(seconds == 0){
   secondHand.style.transitionDuration = '0s';
   minuteHand.style.transitionDuration = '0s';
   hourHand.style.transitionDuration = '0s';
  } else {
   secondHand.style.transitionDuration = '0.05s';
   minuteHand.style.transitionDuration = '0.05s';
   hourHand.style.transitionDuration = '0.05s';
  }
};

setInterval(setDate, 1000);

function timePrinted() {
  let today = new Date();
  let time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");
  let amPm = "";
  if( today.getHours() > 11 ) {
    amPm = "p.m.";
  } else {
    amPm = "a.m.";
  }
  document.querySelector('.displayTime').innerHTML = time + " " + amPm;
};
timePrinted()

document.querySelector('.hoverButton').addEventListener("mouseover", function() {
  let displayBox = document.querySelector('.displayBox');
  let clock = document.querySelector('.clock');
  displayBox.style.display = "block";
  clock.style.display = "none";
});

document.querySelector('.hoverButton').addEventListener("mouseout", function() {
  let displayBox = document.querySelector('.displayBox');
  displayBox.style.display = "none";
  let clock = document.querySelector('.clock');
  clock.style.display = "block";
});
