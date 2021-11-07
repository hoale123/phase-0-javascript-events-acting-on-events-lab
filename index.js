// Your code here
// get the dodger, which is the block
const dodger = document.getElementById("dodger");

// make a function to make it move left --
function moveDodgerLeft() {
    // leftNumbers = dodger.style.left.replace
                    // dodger is the block
                    //style is the placement of bottom block (with its display and position)
                    //.left is calling the left element 
                    //.replace is to replace the left element px to the unknown " "
    const leftNumbers = dodger.style.left.replace("px", "");
    // left is parseInt which even if the number is in string it will be return to integar 
    // take only the integar like 10.99 is still 10.
    const left = parseInt(leftNumbers, 10);
    
    // if left is less than 0 i will make the dodger move to the position left - 1, 
    //left right now is at 180px , when ever it is called it will subtract one 
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//  function to make it move right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }

  }


  document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

 //add an addEventListener to make it come to life
  // arg = 'keydown' e is the cb
  document.addEventListener("keydown", function (e) {
      // if e is 'ArrowLeft' it will invoke the moveDodgerLeft.
      // so when you press left arrow it will execute the moveDodgerLeft.
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
