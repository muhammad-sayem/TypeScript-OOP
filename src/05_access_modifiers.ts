/*
  Public
    --> Accessible from anywhere
    --> Default modifier
  Private
    --> Accessible only inside the same class
    --> Used to hide sensitive data
  Protected
    --> Accessible inside the class and its subclasses (child class)
    --> Useful for inheritance
*/

class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  protected userPass: number;

  constructor(userId: number, userName: string, userBalance: number, userPass: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userPass = userPass;
  }

  addBalance(amount: number) {
    this.userBalance += amount
  }
}

const sayemAccount = new BankAccount(10001, "Sayem", 100, 300676);
sayemAccount.addBalance(60);
sayemAccount.addBalance(50);
console.log(sayemAccount);

// ----------------------------------- //

class StudnetBankAccount extends BankAccount {
  testingProtectedAccessModifier() {
    console.log(this.userPass);
  }
}

const student1 = new StudnetBankAccount(987, "Fahim", 200, 13579);
student1.testingProtectedAccessModifier();