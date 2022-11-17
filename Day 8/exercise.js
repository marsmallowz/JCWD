// Exercise - Employee Salary
class Employee {
  name;
  age;
  address;
  company;
  constructor(name, age, address, company) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.company = company;
  }
}

class FulltimeEmployee extends Employee {
  workingHour;
  salary;
  constructor({ name, age, address, company }, workingHour = [], salary = []) {
    let names = name;
    super(names, age, address, company);
    this.workingHour = workingHour;
    this.salary = salary;
  }

  addWorkingHour(workingHour) {
    if (workingHour <= 24) {
      this.workingHour.push(workingHour);
      if (this.workingHour >= 6) {
        let salary =
          (workingHour - (workingHour - 6)) * 100000 +
          (workingHour - 6) * 75000;
        this.salary.push(salary);
      } else {
        this.salary.push(workingHour * 100000);
      }
    } else {
      throw Error("Waktu melebihi");
    }
  }

  calculateTotalSalary() {
    let totalSalary = this.salary.reduce((a, b) => a + b);
    console.log(totalSalary);
    return totalSalary;
  }
}

class ParttimeEmployee extends Employee {
  workingHour;
  salary;

  constructor({ name, age, address, company }, workingHour = [], salary = 0) {
    super(name, age, address, company);
    this.workingHour = workingHour;
    this.salary = salary;
  }
  calculateTotalSalary() {
    console.log(this.salary);
    if (this.workingHour >= 6) {
      this.salary = this.workingHour * 30000;
      console.log(this.salary);
    } else {
      this.salary = this.workingHour * 50000;
      console.log(this.salary);
    }
    console.log(this.workingHour);
  }
  addWorkingHour(workingHour) {
    if (workingHour <= 24) {
      this.workingHour.push(workingHour);
      if (this.workingHour >= 6) {
        let salary =
          (workingHour - (workingHour - 6)) * 50000 + (workingHour - 6) * 30000;
        this.salary.push(salary);
      } else {
        this.salary.push(workingHour * 50000);
      }
    } else {
      throw Error("Waktu melebihi");
    }
  }
}

let employee1 = new Employee("Maz", 23, "Jln. Tinur Indah B.12", "Gogo Tech");
console.log(employee1);
let fullTimeEmployee1 = new FulltimeEmployee(employee1);
console.log(fullTimeEmployee1);
fullTimeEmployee1.addWorkingHour(7);
console.log(fullTimeEmployee1);
fullTimeEmployee1.addWorkingHour(8);
console.log(fullTimeEmployee1);
console.log(fullTimeEmployee1.salary);
let calculated = fullTimeEmployee1.calculateTotalSalary().toLocaleString();
console.log(`Rp.${calculated} `);

// Exercise - Shooting Game
class Player {
  name;
  health;
  power;
  constructor(name, health = 100, power = 100) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  hit(power) {
    this.health -= power;
  }
  useItem(item) {
    if (Object.hasOwn(item, "health")) {
      this.health += item["health"];
    } else {
      this.power += item["power"];
    }
  }
  showStatus() {
    return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }
}
class ShootingGame {
  player1;
  player2;
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    let random = Math.floor(Math.random() * 4);
    console.log(random);
    if (random === 0) {
      return { health: 0 };
    } else if (random === 1) {
      return { health: 10 };
    } else if (random === 2) {
      return { power: 0 };
    } else if (random === 3) {
      return { power: 10 };
    }
  }
  start() {
    this.player1.showStatus();
    this.player2.showStatus();
    let winner = "";
    // let turn = "";
    let round = 1;
    while (this.player1.health > 0 && this.player2.health > 0) {
      //randomItemForPlayer1
      let itemForPlayer1 = this.getRandomItem();
      //randomItemForPlayer2
      let itemForPlayer2 = this.getRandomItem();
      console.log(
        `Round ${round} Player ${this.player1.name} mendapatkan item Penambah ${
          itemForPlayer1.health === undefined
            ? `Power ${itemForPlayer1.power}`
            : `Health ${itemForPlayer1.health}`
        } Player ${this.player2.name} mendapatkan item Penambah ${
          itemForPlayer2.health === undefined
            ? `Power ${itemForPlayer2.power}`
            : `Health ${itemForPlayer2.health}`
        }`
      );

      //player1 useItem
      this.player1.useItem(itemForPlayer1);
      console.log(
        `Round ${round} Player ${this.player1.name} Menggunakan item Penambah ${
          itemForPlayer1.health === undefined
            ? `Power ${itemForPlayer1.power}`
            : `Health ${itemForPlayer1.health}`
        }`
      );
      //player2 useItem
      this.player2.useItem(itemForPlayer2);
      console.log(
        `Round ${round} Player ${this.player2.name} Menggunakan item Penambah ${
          itemForPlayer2.health === undefined
            ? `Power ${itemForPlayer2.power}`
            : `Health ${itemForPlayer2.health}`
        }`
      );
      //show status before shooting
      console.log(
        `Round ${round} ${this.player1.showStatus()} ${this.player2.showStatus()}`
      );

      //get turn
      let turn = Math.floor(Math.random() * 2);
      console.log(turn);
      if (turn == 0) {
        //player 1 hit player 2
        this.player2.hit(this.player1.power);
        //player 2 hit player 1
        this.player1.hit(this.player2.power);
      } else {
        //player 2 hit player 1
        this.player1.hit(this.player2.power);
        //player 1 hit player 2
        this.player2.hit(this.player1.power);
      }
      //show status before shooting
      console.log(
        `Round ${round} ${this.player1.showStatus()} ${this.player2.showStatus()}`
      );
      round++;
    }
    console.log(this.player1);
    if (this.player1.health < 0) {
      console.log("player2");
      winner = this.player2;
    } else {
      console.log("player1");
      winner = this.player1;
    }
    console.log(`The winner is Player ${winner.name}`);
  }
}

let player1 = new Player("Maz", 100, 30);
let player2 = new Player("Sanz", 100, 30);
let shootingGame = new ShootingGame(player1, player2);
shootingGame.start();
