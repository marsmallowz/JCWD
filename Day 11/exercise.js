// ● Create a function to convert Excel sheet column title to its corresponding column number.
function titleToNumber(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    console.log(result);
    console.log(s[i].charCodeAt(0));
    console.log("A".charCodeAt(0));
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
    console.log(result);
  }
  return result;
}
console.log(titleToNumber("ZZ"));

// KURANG
// Given a non-empty array of integers nums, every element appears twice except for one. Find
// that single one.

/// anagram
function anagram(input1, input2) {
  let arrayInput1 = input1.split("");
  let arrayInput2 = input2.split("");
  arrayInput1.sort();
  arrayInput2.sort();

  console.log(arrayInput1.join("") === arrayInput2.join(""));
  return arrayInput1.join("") === arrayInput2.join("");
}

let input1 = "anagram";
let input2 = "nagaram";
let myAnagram = anagram(input1, input2);
console.log(myAnagram);

// stairs
function fibonanci(number) {
  let temp1 = 1,
    temp2 = 1,
    temp3 = 0;
  text = `${temp1}, ${temp2}`;
  for (let i = 1; i < number; ++i) {
    temp3 = temp1 + temp2;
    text += `, ${temp3}`;
    temp1 = temp2;
    temp2 = temp3;
  }
  console.log(text);
  return temp3;
}

let ways = fibonanci(4);
console.log(ways);
