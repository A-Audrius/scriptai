function sayHello() {
  console.log("Hellow world!");
}

function callNTimes(times, fn) {
  for (let i = 1; i <= times; i++) {
    fn();
  }
}

callNTimes(10, sayHello);
