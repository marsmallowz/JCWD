function getScoreAndAge(listStudents) {
  let totalScore = 0;
  let totalAge = 0;
  let score = { highest: 0, lowest: 0, average: 0 };
  let age = { highest: 0, lowest: 0, average: 0 };
  for (const [key, value] of Object.entries(listStudents)) {
    console.log(key);
  }
  for (let i = 0; i < listStudents.length; i++) {
    if (i === 0) {
      for (const [key, value] of Object.entries(score)) {
        score[key] = listStudents[i]["score"];
        age[key] = listStudents[i]["age"];
        console.log(score[key]);
        console.log(age[key]);
      }
      totalScore += listStudents[i]["score"];
      totalAge += listStudents[i]["age"];
    } else {
      if (score.highest <= listStudents[i]["score"]) {
        score.highest = listStudents[i]["score"];
      }
      if (score.lowest >= listStudents[i]["score"]) {
        score.lowest = listStudents[i]["score"];
      }
      if (age.highest <= listStudents[i]["age"]) {
        age.highest = listStudents[i]["age"];
      }
      if (age.lowest >= listStudents[i]["age"]) {
        age.lowest = listStudents[i]["age"];
      }
      totalScore += listStudents[i]["score"];
      totalAge += listStudents[i]["age"];
    }
  }

  age["average"] = (totalAge / listStudents.length).toFixed(2);
  score["average"] = (totalScore / listStudents.length).toFixed(2);
  return [age, score];
}

let student1 = {
  name: "Alsandy Maulana",
  email: "alsandymaulana@gmail.com",
  age: 17,
  score: 90,
};

let student2 = {
  name: "Al",
  email: "alamn@gmail.com",
  age: 20,
  score: 80,
};

let student3 = {
  name: "Man",
  email: "al@gmail.com",
  age: 18,
  score: 75,
};
let listStudents = [student1, student2, student3];

let getCalculate = getScoreAndAge(listStudents);
console.log(getCalculate[0]);
console.log(getCalculate[1]);

class Product {
  name;
  price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class TransactionItem extends Product {
  qty;
  constructor({ name, price }, qty) {
    super(name, price);
    this.qty = qty;
  }
}
class Transaction {
  total;
  products;

  constructor() {
    this.total = 0;
    this.products = [];
  }

  get totalPrice() {
    return this.total;
  }

  addToCart(transactionItem) {
    if (
      !transactionItem instanceof TransactionItem ||
      typeof transactionItem != "object"
    ) {
      throw new Error("invalid input");
    }
    this.products.push(transactionItem);
    this.total += transactionItem.qty * transactionItem.price;
  }

  checkOut(balance) {
    let text = "";
    if (this.total <= balance) {
      text =
        "Checkout success, change money Rp." +
        Number(balance - this.total).toLocaleString();
      this.products.splice(0, this.products.length);
    } else {
      text = "Checkout Failed";
    }
    return text;
  }
}
let transaction = new Transaction();
let productBaju = new Product("Baju", 50000);
let productCelana = new Product("Celana", 60000);
let transItemBaju = new TransactionItem(productBaju, 5);
let transItemCelana = new TransactionItem(productCelana, 5);
transaction.addToCart(transItemBaju);
console.log(transaction.products);
transaction.addToCart(transItemCelana);
console.log(transaction.products);

console.log(transaction.checkOut(2000000));
