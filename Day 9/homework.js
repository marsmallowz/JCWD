class Player {
  name;
  ball;
  constructor(name) {
    this.name = name;
    this.ball = "";
  }
}
class Billiard {
  player1;
  player2;
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  nineBall() {
    let currentBall = 1;
    let allBall = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currenPlayer = new Player();
    function insertBall(player) {
      console.log(`Current Ball ${currentBall}`);
      let random = Math.floor(Math.random() * 2);
      // harusnya ambil random dari element2 array bukan dari panjang array
      const randomBall = Math.floor(Math.random() * allBall.length);
      let myBall = allBall[randomBall];
      if (random === 0) {
        if (myBall === currentBall) {
          let index = allBall.indexOf(myBall);
          allBall.splice(index, 1);
          currentBall += 1;
          console.log(
            `Player ${player.name} berhasil memasukkan bola ${myBall} dan berurutan`
          );
        } else {
          console.log(
            `Player ${player.name} berhasil memasukkan bola ${myBall} tetapi tidak berurutan`
          );
        }
      } else if (random === 1) {
        console.log(`Player ${player.name} gagal memasukkan bola ${myBall}`);
      }
    }
    while (currentBall <= 9) {
      currenPlayer = this.player1;
      insertBall(currenPlayer);
      if (currentBall > 9) {
        break;
      }
      currenPlayer = this.player2;
      insertBall(currenPlayer);
      if (currentBall > 9) {
        break;
      }
    }
    console.log(`The Winner is Player ${currenPlayer.name}`);
  }

  // nineBall2() {
  //   let currentBall = 1;
  //   let currenPlayer = new Player();
  //   function insertBall(player) {
  //     let random = Math.floor(Math.random() * 2);
  //     console.log(`Current Ball ${currentBall}`);
  //     if (random === 0) {
  //       currentBall += 1;
  //       console.log(`Player ${player.name} berhasil memasukkan bola`);
  //     } else if (random === 1) {
  //       console.log(`Player ${player.name} gagal memasukkan bola`);
  //     }
  //   }
  //   while (currentBall <= 9) {
  //     currenPlayer = this.player1;
  //     insertBall(currenPlayer);
  //     if (currentBall > 9) {
  //       break;
  //     }
  //     currenPlayer = this.player2;
  //     insertBall(currenPlayer);
  //     if (currentBall > 9) {
  //       break;
  //     }
  //   }
  //   console.log(`The Winner is Player ${currenPlayer.name}`);
  // }

  eightBall() {
    let myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let currentPlayer = new Player();
    let winner = false;
    function getTheBallAllPlayer() {
      const randomPlayer = Math.floor(Math.random() * 2);
      let randomBall = Math.floor(Math.random() * myArry.length);
      while (myArry[randomBall] === 8) {
        randomBall = Math.floor(Math.random() * myArry.length);
      }
      let index = myArry.indexOf(myArry[randomBall]);
      if (randomPlayer === 0) {
        console.log(
          `Player ${player1.name} memasukkan bola ${myArry[randomBall]}. \n`
        );
        if (randomBall + 1 <= 7) {
          player1.ball = "solid";
          player2.ball = "stripes";
        } else {
          player1.ball = "strirpes";
          player2.ball = "solid";
        }
      } else {
        console.log(
          `Player ${player2.name} memasukkan bola ${myArry[randomBall]}. \n`
        );
        if (randomBall + 1 <= 7) {
          player2.ball = "solid";
          player1.ball = "stripes";
        } else {
          player2.ball = "strirpes";
          player1.ball = "solid";
        }
      }
      myArry.splice(index, 1);
      console.log(`Player ${player1.name} mendapatkan bola ${player1.ball}.`);
      console.log(
        `Player ${player2.name} mendapatkan bola ${player2.ball}. \n`
      );
    }

    function insertBall(player) {
      const randomBall = Math.floor(Math.random() * myArry.length);
      const hitBall = myArry[randomBall];

      let rest = false;
      let index = myArry.indexOf(myArry[randomBall]);
      console.log(
        `Player ${player.name} memasukkan bola ${myArry[randomBall]}.`
      );

      myArry.splice(index, 1);
      if (player.ball === "solid") {
        for (let i = 1; i <= 7; i++) {
          if (myArry.includes(i)) {
            rest = true;
            break;
          } else {
            rest = false;
          }
        }
        if (hitBall === 8) {
          if (rest) {
            if (player == player1) {
              currentPlayer = player2;
            } else {
              currentPlayer = player1;
            }
            winner = true;
          } else {
            currentPlayer = player;
            winner = true;
          }
        }
      } else {
        for (let i = 9; i <= 15; i++) {
          if (myArry.includes(i)) {
            rest = true;
            break;
          } else {
            rest = false;
          }
        }
        if (hitBall === 8) {
          if (rest) {
            if (player == player1) {
              currentPlayer = player2;
            } else {
              currentPlayer = player1;
            }
            winner = true;
          } else {
            currentPlayer = player;
            winner = true;
          }
        }
      }
    }
    getTheBallAllPlayer();
    while (myArry.includes(8)) {
      currentPlayer = this.player1;
      insertBall(this.player1);
      if (!myArry.includes(8)) {
        break;
      }
      insertBall(this.player2);
      if (!myArry.includes(8)) {
        break;
      }
    }
    if (winner) {
      console.log(`The winner is Player ${currentPlayer.name}`);
    }
  }
}

let player1 = new Player("1");
let player2 = new Player("2");
let billiard = new Billiard(player1, player2);
billiard.nineBall();
billiard.eightBall();
