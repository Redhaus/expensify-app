// OBJECT DESTRUCTURING

// const person = {
//     name: 'Benjamin',
//     age: 39,
//     location: {
//         city: 'Portland',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;

// // Object destructuring for ES6 syntax pulls items off object
// // vars can be renamed via temp: temperature
// // defaults can be set up with equals if not available
// const { name = 'anon', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// // console.log(`It's ${person.location.temp} in ${person.location.city}`);
// console.log(`It's ${temperature} in ${city}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',

//     }
// }

// const { title, author } = book;

// const { name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName, title, author);



// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Portland', 'Oregon', '97214']
const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}`);

const items = ['coffee', '2.00', '2.50', '2.75'];
const [item, smprice, medprice, lgprice] = items 
console.log(`A medium ${item} costs ${medprice}`);

destructure in functions 
// Instead of
const add = ( data ) => {
    return data.a + data.b
}
// Destructur with brackets
const add = ( { a, b }, c ) => {
    return a + b + c
}
console.log(add( { a:1, b: 10 }, 100) );