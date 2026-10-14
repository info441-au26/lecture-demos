function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let balance = 100;

async function deposit(name, amount) {
  await sleep(50);
  balance += amount;
}

async function withdraw(name, amount) {
  if (balance >= amount) {
    // await sleep(100);  // could be a DB call?
    balance = balance - amount;
  }
}

async function main() {
  withdraw("Alice", 80);
  await withdraw("Bob", 80);
  console.log("Final balance:", balance);
}

main();