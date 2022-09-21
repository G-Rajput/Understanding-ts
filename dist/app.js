"use strict";
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
const adds = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
const hobbies = ['Sport', 'Cocking'];
const activeHobbies = ['Hacking'];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Govind',
    age: 24
};
const copiedPerson = Object.assign({}, person);
const addNum = (...numbers) => {
    return numbers.reduce((curResut, curValue) => {
        return curResut + curValue;
    }, 0);
};
const addedNumbers = addNum(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age);
//# sourceMappingURL=app.js.map