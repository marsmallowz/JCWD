// ● Create a function to check if two objects are equal
function compareObject(object1, object2) {
  let text = "equal";
  if (Object.keys(object1).length === Object.keys(object2).length) {
    Object.keys(object1).map((key) => {
      console.log("Masok");
      if (object1[key] !== object2[key]) {
        console.log("Masok");
        text = "Not Equal";
      }
    });
    /// FUNGSI DIBAWAH JUGA BISA
    // Object.keys(object1).map((key) => {
    //   if (!Object.hasOwn(object2, key)) {
    //     text = "Not Equal";
    //   }
    // });
    // if (text === "equal") {
    //   Object.keys(object1).map((key) => {
    //     console.log(object1[key]);
    //     if (object1[key] === object2[key]) {
    //       text = "Equal";
    //     } else {
    //       text = "Not Equal";
    //     }
    //   });
    // }
  } else {
    text = "Not Equal";
  }
  return text;
}
let object1 = { a: "a", b: 1, f: false, d: 4 };
let object2 = { a: "a", b: 1, c: false, d: 4 };
let comparedObject = compareObject(object1, object2);
console.log(comparedObject);

// ● Create a function to get the intersection of two objects
function intersection(object1, object2) {
  let newObject = {};
  Object.keys(object1).map((key) => {
    console.log(Object.hasOwn(object2, key));
    if (Object.hasOwn(object2, key)) {
      if (object1[key] === object2[key]) {
        newObject[key] = object2[key];
      }
    }
  });
  console.log(newObject);
  return newObject;
}
object1 = { a: 1, b: 2 };
object2 = { a: 1, c: 3 };
let intersected = intersection(object1, object2);
console.log(intersected);

// ● Create a function to merge two array of student data and remove duplicate data
function mergeRemoveObject(array1, array2) {
  let newArray = [...array1, ...array2];
  console.log(newArray);
  newArray = newArray.filter(
    (value, index, array) =>
      index ===
      array.findIndex((t) => t.name === value.name && t.email == value.email)
  );
  return newArray;
}

let student1 = { name: "Student 1", email: "student1@gmail.com" };
let student2 = { name: "Student 2", email: "student2@gmail.com" };
let student3 = { name: "Student 3", email: "student3@gmail.com" };

let merged = mergeRemoveObject([student1, student2], [student1, student3]);
console.log(merged);

// Create a function that can accept input as an array of objects and switch all values into
// property and property into value
function switchKeyValue(listPerson) {
  let newListPerson = [];
  listPerson.map((person) => {
    let newPerson = {};
    for (const [key, value] of Object.entries(person)) {
      newPerson[value] = key;
    }
    newListPerson.push(newPerson);
  });

  return newListPerson;
}
let listPerson = [
  { name: "david", age: "dua puluh tahun" },
  { name: "dio", age: "delapa nbelas tahun" },
  { name: "sandy", age: "dua pulu satu tahun" },
];
let switched = switchKeyValue(listPerson);

console.log(switched);

// program to find the factorial of a number
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(4));
