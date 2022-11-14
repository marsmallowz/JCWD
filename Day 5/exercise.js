// ● Write a function to get the lowest, highest and average value in the array (with and without sort
//     function).
function lhaWithSort(listValue) {
  let lowest = [...listValue].sort((a, b) => a - b);
  let highest = [...listValue].sort((a, b) => b - a);
  let sum = listValue.reduce((total, num) => {
    return total + num;
  });
  let average = sum / listValue.length;
  return [lowest[0], highest[0], average];
}

function lhaWithoutSort(listValue) {
  let arraySorted = [];
  let highest;
  let lowest;
  //sorted array
  arraySorted.length = listValue.length;
  for (let i = 0; i < listValue.length; i++) {
    let count = 0;
    for (let j = 0; j < listValue.length; j++) {
      if (listValue[i] >= listValue[j]) {
        count += 1;
      }
    }
    arraySorted[count - 1] = listValue[i];
    console.log(arraySorted);
  }
  console.log(arraySorted);
  //find min max
  for (let i = 0; i < arraySorted.length; i++) {
    const element = arraySorted[i];
    if (i == 0) {
      highest = arraySorted[i];
      lowest = arraySorted[i];
    } else if (highest <= arraySorted[i]) {
      highest = arraySorted[i];
    } else if (lowest >= arraySorted) {
      lowest = arraySorted[i];
    }
  }
  //average
  let sum = arraySorted.reduce((total, num) => {
    return total + num;
  });
  let average = sum / arraySorted.length;

  return [lowest, highest, average];
}

let lha = lhaWithSort([10, 2, 3, 4, 1]);
let lowest = lha[0];
let highest = lha[1];
let average = lha[2];
console.log(lowest);
console.log(highest);
console.log(average);

let lha2 = lhaWithoutSort([30, 7, 4, 10, 2, 3, 11, 20]);
let lowest2 = lha2[0];
let highest2 = lha2[1];
let average2 = lha2[2];
console.log(lowest2);
console.log(highest2);
console.log(average2);

// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.
function concateningWords(array) {
  let myString = "";
  let arrayOfWords = ["Banana", "Watermelon", "Melon", "Cherry", "Durian"];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (i < arrayOfWords.length - 2) {
      myString += `${arrayOfWords[i]}, `;
    } else if (i == arrayOfWords.length - 2) {
      myString += `${arrayOfWords[i]} and `;
    } else {
      myString += `${arrayOfWords[i]}. `;
    }
  }
  return myString;
}
let combinationOfWord = concateningWords();
console.log(combinationOfWord);

// ● Write a function to split a string and convert it into an array of words
function splitString(string) {
  return string.split(" ");
}
let afterSplit = splitString("Hello World");
console.log(afterSplit);

// ● Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
function calculateArray(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let sum = array1[i] + array2[i];
    newArray.push(sum);
  }
  return newArray;
}
let array1 = [1, 2, 3];
let array2 = [3, 2, 1];
let calculatedArray = calculateArray(array1, array2);
console.log(calculatedArray);

// ● Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.
function addElement(array, element) {
  let find = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      find = true;
    }
  }
  if (find) {
    return array;
  } else {
    return array.push(element);
  }
}
let arrayForAdding = [1, 2, 3];
let newArray = addElement(arrayForAdding, 5);
console.log(newArray);

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

// Write a recursive function to get the lowest, highest, median and average value in the array (with and without sort function).
// without using Math function min/max and looping
function recrusiveLHMA(array, newArray, countX) {
  // let arrayRec = [30, 7, 4, 10, 2, 3, 11, 20];

  let myArray = array;
  console.log(myArray);
  let myNewArray = newArray;
  myNewArray.length = myArray.length;
  console.log(myNewArray);

  let count = countX;
  if (count < array.length) {
    let index = findIndex(myArray, count, 0, 0);
    console.log(index);
    myNewArray[index - 1] = myArray[count];
    console.log(myNewArray);
    count++;
    return recrusiveLHMA(myArray, myNewArray, count);
  } else {
    console.log(myNewArray);
    return myNewArray;
  }
  // else {
  //   console.log();
  // }
  //   return lowest, highest, median, average;
}

function findIndex(array, number2, countLoop, countIndex) {
  // let arrayRec = [30, 7, 4, 10, 2, 3, 11, 20];
  console.log(countLoop);
  console.log(number2);
  console.log(countIndex);

  let count = countLoop;
  let index = countIndex;

  console.log(array.length);
  if (count < array.length) {
    console.log(count);
    console.log(array[number2] >= array[count]);
    if (array[number2] >= array[count]) {
      console.log(array[number2]);
      console.log(array[count]);
      countIndex += 1;
    } else {
      console.log(count);
    }
    count++;
    return findIndex(array, number2, count, countIndex);
  } else {
    console.log(countIndex);
    index = countIndex;
    return index;
  }
  // console.log(index);
  // return index;
}
let arrayRec = [30, 7, 4, 10, 2, 3, 11, 20];
let recWithoutSort = recrusiveLHMA(arrayRec, [], 0);
console.log(recWithoutSort);
