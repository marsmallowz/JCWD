// ● Write a code to convert celsius to fahrenheit.
let celcius = 2;
celciusTofFahrenheit = celcius * (9 / 5) + 32;
console.log(celciusTofFahrenheit + "°F");

// ● Write a code to check whether the number is odd or even
let number = 5;
if (number % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
// ● Write a code to check whether the number is prime number or not
// bilangan prima adalah bilangan yang hanya dapat dibagi oleh dua bilangan yaitu
// bilangan 1 dan dirinya sendiri, tanpa bisa dibagi oleh bilangan lain.
let pembagi = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    pembagi++;
  }
}
console.log(pembagi);
if (pembagi == 2) {
  console.log("Bilangan prima");
} else {
  console.log("Bukan bilangan prima");
}

// ● Write a code to find the sum of the numbers 1 to N.
let sum = 0;
let text = `${number} -> `;
for (let i = 1; i <= number; i++) {
  i == 1 ? (text += ` ${i}`) : (text += ` + ${i}`);

  sum = sum + i;
}
console.log(text + " = " + sum);

// ● Write a code to find factorial of a number.
let factorial = 1;
text = `${number} -> `;
for (let i = number; i > 0; i--) {
  i == 1 ? (text += ` ${i}`) : (text += `  ${i} x`);

  factorial = factorial * i;
}
console.log(text + " = " + factorial);

// ● Write a code to print the first N fibonacci numbers.
let f1 = 0;
let f2 = 1;
for (i = 1; i <= number; i++) {
  let fibonacci = f1;
  let next = f1 + f2;
  f1 = f2;
  f2 = next;
  console.log(fibonacci);
}

//BMI
let beratBadan = 54;
let tinggiBadan = 1.62;
let bmi = beratBadan / (tinggiBadan * tinggiBadan);
console.log(bmi);
if (bmi >= 18.5 && bmi <= 25) {
  console.log("Berat Badan Ideal");
} else {
  console.log("Berat Badan Tidak Ideal");
}

//Total Loop
for (let i = 1; i < 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FuzzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + " Buzz");
  } else if (i % 5 == 0) {
    console.log(i + " Fuzz");
  }
}

// for (let i = 0; i < 50; i++) {
//   i % 3 == 0
//     ? console.log("Buzz")
//     : i % 5 == 0
//     ? console.log("Fuzz")
//     : i % 3 == 0 && i % 5 == 0
//     ? console.log("FuzzBuzz")
//     : console.log(i);
// }
