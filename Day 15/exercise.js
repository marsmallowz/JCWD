// ● Write a code to check whether the date is a weekend.
function checkDateIsWeekend(datex) {
  let date = new Date("November 26, 2022");
  if (date.getDay() != 6) {
    return false;
  } else {
    return true;
  }
}
let checkDate = checkDateIsWeekend();
console.log(checkDate);

//● Write a code to get minimum date from array of dates.
function getMinimumDate(arrayDate) {
  let minimumDate = 0;
  console.log(arrayDate);
  arrayDate.forEach((date) => {
    let getDate = date.getDate();
    if (!minimumDate) {
      minimumDate = getDate;
    } else if (minimumDate > getDate) {
      minimumDate = getDate;
    }
  });
  return minimumDate;
}

let arrayDate = [
  new Date("August 19, 1975 23:15:30"),
  new Date("August 1, 1975 23:15:30"),
  new Date("August 20, 1975 23:15:30"),
];

let getMinimumDatex = getMinimumDate(arrayDate);
console.log(getMinimumDatex);

// ● Write a code to calculate age
function getAge(birthDate) {
  let dateNow = Date.now();
  let calculationDate = dateNow - birthDate;
  let getYear = calculationDate / (3600 * 24 * 1000 * 365);
  console.log(calculationDate);
  console.log(getYear);
  return Math.floor(getYear);
}
let myBirthDate = new Date("September 25, 1999").getTime();
let myAge = getAge(myBirthDate);
console.log(myAge);
