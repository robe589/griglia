import * as ns from "./NumeralSystem"

let moneyNumber = new ns.MoneyNumber(100000, ns.MONEY_METHOD.EN)

console.log(moneyNumber.stringify())
console.log(moneyNumber.getValue())

let moneyNumber2 = new ns.MoneyNumber(-100000, ns.MONEY_METHOD.EN)

console.log(moneyNumber2.stringify())
console.log(moneyNumber2.getValue())

let moneyNumber3 = new ns.MoneyNumber(-100000.234, ns.MONEY_METHOD.EN)

console.log(moneyNumber3.stringify())
console.log(moneyNumber3.getValue())