// findAreaOfRectangle
let pRectangle = 20;
let lRectangle = 10;
area = pRectangle * lRectangle;
console.log(area);

//findPerimeterOfRectangle
perimeter = 2 * (pRectangle + lRectangle);
console.log(perimeter);

//findDiameterCircumferenceAreaOfRectangle
let radiusCircle = 4;
diameter = radiusCircle * 2;
circumference = 2 * (22 / 7) * radiusCircle;
area = (22 / 7) * radiusCircle * radiusCircle;
console.log(diameter);
console.log(circumference);
console.log(area);

// findAnglesOfTriangle
let angle1Circle = 20;
let angle2Circle = 90;
angles = 180 - angle1Circle + angle2Circle;
console.log(angles);

//differenceBetweenDatesInDays
date1 = new Date("11/10/2022");
date2 = new Date("12/13/2022");
differenceInDays =
  Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
console.log(differenceInDays);

// convertDaysToYearsMonthsDays
let numberOfDays = 400;
let years = Math.floor(numberOfDays / 365);
let months = Math.floor((numberOfDays % 365) / 30);
let days = Math.floor((numberOfDays % 365) % 30);
console.log(`${years} Year, ${months} Month, ${days} days`);
console.log(
  `${years} Year: ${years * 365} days, ${months} Months : ${months * 30} days`
);
