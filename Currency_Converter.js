import inquirer from "inquirer";
const exchangeRates = {
    USD: 0.0036,
    AUSD: 0.0055,
    CAND: 0.0050,
    Pound: 0.0029,
    Euro: 0.0035,
    INDR: 0.30,
    PKR: 1
};
let condition = true;
while (condition) {
    const { currencyName, currencyAmount } = await inquirer.prompt([
        {
            message: "Hello! What currency do you want to convert?",
            type: "list",
            name: "currencyName",
            choices: ["USD", "AUSD", "CAND", "Pound", "Euro", "INDR", "PKR"]
        },
        {
            message: "Enter the amount to be converted: ",
            type: "number",
            name: "currencyAmount",
            validate: (input) => input && input > 0 ? true : "Please enter a valid positive number"
        }
    ]);
    const conversionRate = exchangeRates[currencyName];
    if (conversionRate !== undefined) {
        console.log(`The conversion of PKR ${currencyAmount} to ${currencyName} is ${(currencyAmount * conversionRate).toFixed(2)}`);
    }
    else {
        console.log("Invalid currency selected.");
    }
    const { choiceName } = await inquirer.prompt([
        {
            message: "Do you want to convert to another currency?",
            type: "confirm",
            name: "choiceName",
            default: false
        }
    ]);
    condition = choiceName; // Exit loop if choiceName is false
}
console.log("Thank you for using the currency converter!");
