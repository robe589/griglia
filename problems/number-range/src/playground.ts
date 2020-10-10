import { NumberRangeA } from './NumberRange'

console.log('HERE IS PLAYGROUND');

let numberRangeA: NumberRangeA = new NumberRangeA("5,7-9,11,-12,13-");

console.log("serialize=" + numberRangeA.serialize());

numberRangeA.add(10);

console.log("serialize=" + numberRangeA.serialize());