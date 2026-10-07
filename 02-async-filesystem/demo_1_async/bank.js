function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let balance = 100;

async function withdraw(name, amount) {
  console.log(name, "sees balance", balance);
  if (balance >= amount) {
    await sleep(100);
    balance = balance - amount;
    console.log(name, "withdrew", amount);

    if (balance < 0) {
      console.log("Uh-oh, negative balance!!")
      // ... undo the withdrawal
      balance += amount
    }
  }
}

async function main() {
  withdraw("Alice", 80);
  await withdraw("Bob", 80);
  console.log("Final balance:", balance);
}

main();