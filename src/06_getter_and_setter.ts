/* getter and setter er maddhome function call na kore normal property 
er moto kore "=" sign diye set and get kora jaay. */

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

  // using setter (alada "return lekha lage na, auto return kore") //
  set addBalance(amount: number){
    this.userBalance += amount
  }

  // using getter (ekhane "return" korte hobe) //
  get getBalance(){
    return this.userBalance
  }
}

const sayemAccount = new BankAccount(123, "Sayem", 200, 86421357);

sayemAccount.addBalance = 200;
sayemAccount.addBalance = 100;
console.log(sayemAccount.getBalance);