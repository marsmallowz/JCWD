class Calculator {
  #_input = "";
  #result = 0;
  #history = [];

  get input() {
    return this.#_input;
  }
  set input(strInput) {
    let equation = strInput
      .split("")
      .filter((elem) => elem !== " ")
      .join("");
    this.#_input = equation;
    // this.#result = eval(equation);
    this.#result = Function(`"use strict"; return (${equation})`)();
    this.#history.push(equation);
  }

  showHistory() {
    return this.#history.join("\n");
  }

  clearHistory() {
    this.#history = [];
  }

  showResult() {
    return this.#result;
  }
}

let myCalc = new Calculator();
myCalc.input = "5 + 5 * 10 / 2";
console.log(myCalc.showResult());
console.log(myCalc.input);
myCalc.input = "3 * 3 /2";
console.log(myCalc.showResult());
console.log(myCalc.input);
myCalc.clearHistory();
console.log(myCalc.showHistory());

let text = "3 * 10 - 9 / 3 * 2";
let arrNumber = text
  .split("")
  .filter((elem) => elem !== " ")
  .join("")
  .split(/\+|\-|\*|\//g);
console.log(arrNumber);

let arrOperator = ["*", "-", "/", "*"];
let newArrOperator1 = [];
let newArrOperator2 = [];
let newArrNumber = [];

// "3 * 10 - 9 / 3 * 2"
arrOperator.map((val, index) => {
  if (val === "/" || val === "*") {
    if (val === "*") {
      newArrNumber.push(arrNumber[index] * arrNumber[index + 1]);
      console.log(newArrNumber);
    } else {
      newArrNumber.push(arrNumber[index] / arrNumber[index + 1]);
      console.log(newArrNumber);
    }
    console.log(newArrNumber);
  } else {
    newArrOperator2.push(val);
  }
});
newArrOperator2.map((val, index) => {
  if (val === "-") {
    console.log(newArrNumber[index] - newArrNumber[index + 1]);
  }
});

// 1 - 9 / 3 * 2
// 6
// 9 / 6
// [/, *]
// [9,3, 2]
// 0
// [0,1]
