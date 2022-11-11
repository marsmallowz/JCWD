function createTriangle(height) {
  let triangle = "";
  let currentNumber = 1;
  for (let i = 1; i <= height; i++) {
    let triangleRow = "";
    for (let j = 1; j <= i; j++) {
      if (currentNumber < 10) {
        triangleRow += `0${currentNumber} `;
        currentNumber += 1;
      } else {
        triangleRow += `${currentNumber} `;
        currentNumber += 1;
      }
    }
    triangle += `${triangleRow} \n`;
  }
  return triangle;
}
let triangleCreated = createTriangle(4);
console.log(triangleCreated);

// ● Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with
// "FizzBuzz".
function loopTheNumber(totalLoop) {
  let textLoopFB = "";
  let textLoopB = "";
  let textLoopF = "";
  for (let i = 1; i <= totalLoop; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      textLoopFB += i + ", ";
    } else if (i % 3 == 0) {
      textLoopB += i + ", ";
    } else if (i % 5 == 0) {
      textLoopF += i + ", ";
    }
  }
  let textLoop = `${textLoopF} Fuzz | ${textLoopB} Buzz | ${textLoopFB} FuzzBuzz`;
  return textLoop;
}
let textSound = loopTheNumber(15);
console.log(textSound);

//BMI
// ● Formula : BMI = weight (kg) / (height (meter))²
function BMI(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  console.log(bmi);
  if (bmi >= 18.5 && bmi <= 25) {
    console.log("Ideal");
    return "Ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
    return "Overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    console.log("Very Overweight");
    return "Very Overweight";
  } else if (bmi < 18.5) {
    console.log("Less Weight");
    return "Less weight";
  } else if (bmi > 39.9) {
    console.log("Obesity");
    return "Obesity";
  }
}
let myBmi = BMI(54, 1.62);
console.log(myBmi);

// Write a function to remove all odd numbers in an array and return a new array that contains
// even numbers only
function removeOddNumber(listNumber) {
  let newList = [];
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) {
      newList.push(listNumber[i]);
    }
  }
  console.log(newList);
  return newList;
}
let newListNumber = removeOddNumber([4, 2, 5, 1, 3, 10, 20]);
console.log(newListNumber);

// ● Write a function to split a string and convert it into an array of words
function splitString(string) {
  return string.split(" ");
}
let afterSplit = splitString("Hello World");
console.log(afterSplit);
