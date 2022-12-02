// Given an array nums of size n, return the majority element. The majority element is the element
// that appears more than ⌊n / ù⌋ times. You may assume that the majority element always exists
// in the array.
let nums = [2, 2, 1, 1, 1, 2, 2];
let storedNums = {};
nums.map((element) => {
  let myNum = element.toString();
  if (!Object.hasOwn(storedNums, myNum)) {
    storedNums[element.toString()] = 1;
  } else {
    storedNums[myNum] += 1;
  }
});
console.log(storedNums);
let majority = 0;
let totalMajority = 0;
for (const [key, value] of Object.entries(storedNums)) {
  if (totalMajority < value) {
    majority = key;
  }
}
console.log(majority);

// // ● Create a function to convert roman numeral to integer.
// function ConvertRomanToInteger() {
//   let romanNumeral = "VIIIX";
//   let romanNUmber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let arrayRoman = romanNumeral.split("");
//   console.log(arrayRoman);
//   ///check urutan
//   for (let i = 0; i < arrayRoman.length; i++) {
//     const element = arrayRoman[i];
//   }
// }
// ConvertRomanToInteger();
// I V X L C D M
// 1 5 10 50 100 500 1000

// 1 5
// IV bisa
// XV bisa
// LV bisa

// 1 10
// IX bisa
// VX gak bisa

// 10 50
// VL gak bisa
// IL gak bisa
// XL bisa

// 10 100
// IC gak bisa
// VC gak bisa
// XC bisa
// LC gak bisa

// 100 500
// ID gak bisa
// VD gak bisa
// XD gak bisa
// LD gak bisa
// CD bisa

// 100 1000
// IM gak bisa
// VM gak bisa
// XM gak bisa
// LM gak bisa
// CM bisa
// DM gak bisa
// let myRomawi = "IX";
// if (
//   myRomawi.includes("VX") ||
//   myRomawi.includes("VL") ||
//   myRomawi.includes("IL") ||
//   myRomawi.includes("IC") ||
//   myRomawi.includes("VC") ||
//   myRomawi.includes("LC") ||
//   myRomawi.includes("ID") ||
//   myRomawi.includes("VD") ||
//   myRomawi.includes("XD") ||
//   myRomawi.includes("LD") ||
//   myRomawi.includes("IM") ||
//   myRomawi.includes("VM") ||
//   myRomawi.includes("XM") ||
//   myRomawi.includes("LM") ||
//   myRomawi.includes("DM")
// ) {
//   console.log("INVALID ROMAN NUMBER");
// }
// console.log("V");

//  nyontek
const myMap = new Map();
myMap.set("I", 1);
myMap.set("V", 5);
myMap.set("X", 10);
myMap.set("L", 50);
myMap.set("C", 100);
myMap.set("D", 500);
myMap.set("M", 1000);

function value(r) {
  if (r == "I") return 1;
  if (r == "V") return 5;
  if (r == "X") return 10;
  if (r == "L") return 50;
  if (r == "C") return 100;
  if (r == "D") return 500;
  if (r == "M") return 1000;
  return -1;
}

// Finds decimal value of a given
// romal numeral
function romanToDecimal(str) {
  // Initialize result
  var res = 0;

  for (i = 0; i < str.length; i++) {
    // Getting value of symbol s[i]
    var s1 = value(str.charAt(i));

    // Getting value of symbol s[i+1]
    if (i + 1 < str.length) {
      var s2 = value(str.charAt(i + 1));

      // Comparing both values
      if (s1 >= s2) {
        // Value of current symbol
        // is greater or equalto
        // the next symbol
        res = res + s1;
      } else {
        // Value of current symbol is
        // less than the next symbol
        res = res + s2 - s1;
        i++;
      }
    } else {
      res = res + s1;
    }
  }
  return res;
}
var str = "MCMIV";
console.log(romanToDecimal("IIX"));

// Pascal's triangle
let row = 5;
let output = [];
for (let i = 0; i < row; i++) {
  output.push([]);
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      output[i].push(1);
    } else if (j === i) {
      output[i].push(1);
    } else {
      output[i].push(output[i - 1][j - 1] + output[i - 1][j]);
    }
  }
}

console.log(output);
//  1 01
//  1 01  2 12
//  1 01  2 12  3 23
// 1 butuh 0 dan 1
// 2 butuh 1 dan 2
// 3 butuh 2 dan 3

let prices = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

let minPrice = 99;
let day = 0;
let profit = 0;
let bestDay = 0;
let bestProfit = 0;
for (let i = 0; i < prices.length; i++) {
  if (i != prices.length - 1) {
    minPrice = prices[i];
    day = i + 1;
    console.log(minPrice);
    for (let j = day; j < prices.length; j++) {
      if (profit < prices[j] - minPrice) {
        profit = prices[j] - minPrice;
        bestDay = prices[i];
        bestProfit = profit;
      }
    }
  }
}
console.log(bestDay);
console.log(bestProfit);
