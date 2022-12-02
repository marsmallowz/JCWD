let number = 13;
let result = 0;
while (number > 0) {
  number + 2;
  // baris diatas tidak membuat number bertambah
  number--;
  if (number % 3 == 0) continue;
  result = result + number;
}
console.log(result);

let boolean = "False";
// baris dibawah buat mengecek apakah suatu variabel truthy atau falsy
console.log(Boolean(true));
console.log(Boolean(false));
console.log(false + true);

let result1 = "jason naik kuda";
let count = 3;
do {
  console.log(result1);

  switch (count % 3 == 0) {
    case 0:
      result1.slice(count, count + 20);
      break;
    default:
      result1 = result1.slice(count, count + 20);
  }
  count -= 1;
} while (count);
console.log(result1);

const str = "purwadhika jakarta";
console.log(str.substring(8, 4));
console.log(str.substring(4, 8));
let a = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["deepest"]], [[["deepest-est"]]]],
];
console.log(a[2][1][0][0][0]);
// arrow function cannot get this.
if ("camry" && !25) {
}
console.log("camry" && true);

var str2 = new String(`abc`);
var str2WithoutNew = String(`abc`);

var str3 = new Number(123);
console.log(typeof str2);
console.log(str2 instanceof String);
console.log(str2 === `abc`);
console.log(str2WithoutNew instanceof String);
console.log(str2WithoutNew === `abc`);

console.log(typeof str3);
// length is properties

console.log(true + false > 2 + true);

// dari kanan ke kiri typeof pertama return "number"
console.log(typeof typeof 1);

console.log(typeof NaN);

// sort() only sorting first index in element
const numbers = [33, 2, 8];
numbers.sort();
console.log(numbers[1]);

console.log(1 + "2" + "2");
console.log(typeof (1 + "2"));
console.log("2" + 1);
console.log(typeof ("1" + 2));

const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);

let array = [1, 2, 3];
// will create empty for index 3 4 5
array[6] = 9;
console.log(array[5]);

// will read \n \t etc
console.log(String.raw`HelloTwitter\nworld`);

// karena 018 bukan octal number langsung diubah ke 18 sedangkan 015 octal number diubah ke 14 dahulu
// console.log(018 - 015);

console.log("jalan");

let condition = true;
let i = 3;
while (i > 0) {
  console.log("jalan");
  // if (condition) {
  //   condition = false;
  //   return;
  // }
  if (i == 2) {
    break;
  }
  i--;
  console.log(condition);
}
let asux = new Array(1, 3, 2, 5);
function aw(l) {
  l[1]++;
  console.log(l);
}
aw(asux);
console.log(asux);
console.log(asux + asux);
let awas = { c: 2 };
var foo = () => {
  console.log("hais");
};
foo();
let myarr = [1];
console.log(myarr[1]);
function aaa() {
  return { test: 1 };
}
console.log(typeof aaa());

console.log(Number.parseFloat("12.451"));

const userx = { name: "alman" };
userx.name = "ucok";
console["log"](userx);

let awz = " ".concat(null);
console.log(typeof awz);

function apaja(wa, callback) {
  callback(12);
}
apaja(1, "waw");
