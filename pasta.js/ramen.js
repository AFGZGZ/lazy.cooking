var potCapacity = 3;
var currentPotLevel = 0;

var waiting = 3000;
var cookingTime = 10000;
var remainingTime = cookingTime;
var isItDoneYet = false;

function addWater() {
  for (x = 0; x < potCapacity; x++) {
    currentPotLevel += currentPotLevel;
  }
}

function boil() {
  setTimeout(waiting);

  remainingTime -= waiting;
  if (remainingTime < 0) {
    isItDoneYet = true;
  }
  if (isItDoneYet === true) {
    console.log("Your ramen is done");
    return;
  } else {
    console.log("still cooking");
    boil(waiting);
  }
}
