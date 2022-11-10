// ● Write a code to display the multiplication table of a given integer.
let number = 9;
for (let i = 1; i < number; i++) {
  console.log(`${number} x ${i}`);
}

// ● Write a code to check whether a string is a palindrome or not.
let text = "kayak";
let newText = "";
const textSplit = text.split("");
for (let i = textSplit.length - 1; i >= 0; i--) {
  newText += textSplit[i];
}
console.log(textSplit);
console.log(newText);

if (text === newText) {
  console.log("Text is Palindrome");
} else {
  console.log("Text is Not Palindrome");
}

// ● Write a code to convert centimeter to kilometer.
let cm = 20;
let m = cm / 100000;
console.log(`convert ${cm} cm to ${m} km`);

// ● Write a code to format number as currency (IDR)
let money = 1000000;
let moneyToString = money.toString();
let moneySplit = moneyToString.split("");
let newCurrency = "";
let newCurrencySplit = [];
let reverseNewCurrency = "";

console.log(moneyToString);
console.log(moneySplit.length);
// 1.000 1.000.000 10.000.000 100.000.000
let titik = 1;
for (let i = moneySplit.length - 1; i >= 0; i--) {
  if (titik == 3) {
    console.log(i);
    console.log(moneySplit[i]);
    newCurrency += `${moneySplit[i]}.`;
    titik = 1;
  } else {
    console.log(i);
    console.log(moneySplit[i]);
    newCurrency += `${moneySplit[i]}`;
    titik += 1;
  }
}
console.log(newCurrency);
newCurrencySplit = newCurrency.split("");
for (let i = newCurrencySplit.length - 1; i >= 0; i--) {
  reverseNewCurrency += newCurrencySplit[i];
}
console.log(`Rp${reverseNewCurrency},00`);

// ● Write a code to remove the first occurrence of a given “search string” from a string
let text4 = "Hello  World";
let searchText4 = "ell";
let afterSearch = text4.replace(searchText4, "");
console.log(afterSearch);

// ● Write a code to capitalize the first letter of each word in a string.
let text3 = "hello world";
let newText3 = "";
const splitText3 = text3.split(" ");
for (let i = 0; i < splitText3.length; i++) {
  const element = splitText3[i];
  for (let j = 0; j < element.length; j++) {
    if (j == 0) {
      newText3 += element[j].toUpperCase();
    } else {
      newText3 += element[j].toLowerCase();
    }
  }
  newText3 += " ";
}
console.log(newText3);

// ● Write a code to reverse a string.
let text2 = "almano";
let reverseText2 = "";
const text2Split = text2.split("");
for (let i = text2Split.length - 1; i >= 0; i--) {
  reverseText2 += text2Split[i];
}
console.log(reverseText2);
