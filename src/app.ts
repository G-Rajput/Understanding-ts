// const userName = 'Govind'
// userName = 'Rajput'
// let age = 30;

// age = 29;

function add(a: number, b: number) {
    let result;
    result = a + b;
    return result;
}

// if (age > 20) {
//     let isOld= true;
// }

// console.log(isOld);

const adds = (a: number, b: number) =>  a + b;

// const adds = (a: number, b: 2) =>  a + b;  //provide default parameter

const printOutput: (a: number | string) => void = output => console.log(output)



const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5, 2))

const hobbies = ['Sport', 'Cocking'];
const activeHobbies = ['Hacking'];
 activeHobbies.push(...hobbies);

 const person = {
    firstName: 'Govind',
    age : 24
 }

 const copiedPerson = { ...person };

 const addNum = (...numbers: number[]) => {
     return numbers.reduce((curResut, curValue) => {
        return curResut + curValue;
     }, 0);

     
 }

 const addedNumbers = addNum(5,10, 2, 3.7);
 console.log(addedNumbers)

 const [hobby1, hobby2, ...remainingHobbies] = hobbies;

 console.log(hobbies, hobby1, hobby2);

 const { firstName: userName, age} = person;

 console.log(userName, age)