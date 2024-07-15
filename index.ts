import chalk from "chalk";
import inquirer from "inquirer";

// Classes Player and Opponent

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

// Player name and Select Opponent

let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please Enter Your Name",
});
let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select Your Opponent",
  choices: ["Skeleton", "Assassin", "Zombie"],
});

// Gather Data

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

// Loop
do {
  // Skeleton
  if (opponent.select == "Skeleton") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
      process.exit();
    }
  }
  // Assassin
  if (opponent.select == "Assassin") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
      process.exit();
    }
  }
  // Zombie
  if (opponent.select == "Zombie") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(chalk.bold.red.italic("You Lose, Better Luck Next Time"));
      process.exit();
    }
  }
} while (true);
