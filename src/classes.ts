class Customer {
  // properties
  firstName : string;
  lastName : string;
  age : number;

  constructor(fname : string, lname : string, age: number) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
  }
}

class GoldCustomer {
  constructor(public fname : string, public lname : string, public age : number, public hasPets : boolean) {};
}

let cust : Customer = new Customer('Jane', 'Doe', 27);
let gold : GoldCustomer = new GoldCustomer('Jane', 'Doe', 36, true);

console.log(cust.age);
console.log(gold.age);
console.log(gold.hasPets);