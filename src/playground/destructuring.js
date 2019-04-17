//Object destructuring

// const person = {
//     name: 'andrew',
//     age: 26,
//     location: {
//         city: 'Den Haag',
//         temp: 8
//     }
// };

// const { name: firstName = 'anonymous', age} = person;
// const {temp: temperature, city} = person.location;

// console.log(`${firstName} is ${age}`);
// console.log(`The temperature in ${city} is ${temperature}`);

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelpia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

const [, city, state = 'new york'] = address;

console.log(`You are in ${city} ${state}`);