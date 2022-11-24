const Queue = require("./class.js");

let queue = new Queue();
queue.add("Ketoprak");
queue.add("Nasi Lemak");
queue.add("Mie Lendir");
queue.add("Lontong Sayur");
queue.add("Pizaa");
queue.add("Burger");
queue.add("Spagetti");

console.log(queue.orders);
queue.runProcess();
