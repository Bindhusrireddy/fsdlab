
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdraw amount must be positive.");
        }
    }
}
function transfer(fromAccount, toAccount, amount) {
    if (amount > 0 && amount <= fromAccount.balance) {
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        console.log(`Transferred ${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}`);
    } else {
        console.log("Transfer failed. Check the balance or amount.");
    }
}
const account1 = new BankAccount("Abhi", 500);
const account2 = new BankAccount("Bindhu", 300);
account1.deposit(200);
account1.withdraw(100);
transfer(account1, account2, 150);
console.log(`${account1.accountHolder}'s balance: ${account1.balance}`);
console.log(`${account2.accountHolder}'s balance: ${account2.balance}`);
