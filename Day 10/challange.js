// Lanjutan pseudocode
// split palindrome to array and reverse the array
// store the reversed array in variabel
// join that reversed array become to become string
// make check condition if palindrome === reversed {
//     log true
// }else{
//     log false
// }
console.time("doSomething");

let palindrome = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("");
palindrome = palindrome.filter((letter) => {
  return arrAlpha.includes(letter);
});
palindrome = palindrome.join("");
let reversed = palindrome.split("").reverse();
reversed = reversed.join("");
console.log(palindrome + " " + reversed);
if (palindrome === reversed) {
  console.log(true);
} else {
  console.log(false);
}
console.timeEnd("doSomething");
