// Create a code that could handle a queue on food ordering process, with this specification:

class Queue {
  orders;
  constructor(orders = []) {
    this.orders = orders;
  }

  async runProcess() {
    console.log("Print all data in queue. \n");
    let currentQueue = 0;
    async function f(queue) {
      let random = Math.floor(Math.random() * 10) + 1;
      let promise = new Promise((resolve, reject) => {
        console.log(`Queue ${queue + 1} Done in ${random} seconds. \n`);
        setTimeout(
          () => resolve(),
          // `Queue ${queue + 1} Done in ${random} seconds. \n`
          random * 1000
        );
      });
      await promise;
      // let result = await promise;
      // console.log(result);
    }
    while (currentQueue < this.orders.length) {
      await f(currentQueue);
      currentQueue++;
    }
  }

  add(order) {
    this.orders.push(order);
  }
}
module.exports = Queue;
