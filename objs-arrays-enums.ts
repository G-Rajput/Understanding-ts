// const person: {
//     name: string;
//     age: number;
// } = {
//     const person: {
//         name:  string;
//         age: number;
//         hobbies: string[];
//         role: [number, string]
//     } = { 
//     name: 'Govind Rajput',
//     age: 24 ,
//     hobbies: ['Sports' , 'Coocking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY =1;
// const AUTHER = 2;

enum Role { ADMIN, READ_ONLY, AUTHER}

const person = { 
name: 'Govind Rajput',
age: 24 ,
hobbies: ['Sports' , 'Coocking'],
role: Role.ADMIN
}


// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

console.log(person.name)

let favoriteActivities: string[];
favoriteActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHER) {
    console.log('is auther....')
}