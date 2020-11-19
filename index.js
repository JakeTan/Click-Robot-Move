const robot = document.querySelector(".robot");

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

//declare a variable
let number = 0;

function moveRobot() {
  //add code here

  if (number >= 100) {
    number = -100;
    robot.style.top = number + "px";
  } else {
    number += 20;
    console.log(number);
    robot.style.top = number + "px";
  }
}
robot.addEventListener("click", moveRobot);
