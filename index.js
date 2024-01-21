import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "input",
    name: "userinput",
    message: " please enter the amount of second",
});
let val = res.userinput;
console.log(val);
