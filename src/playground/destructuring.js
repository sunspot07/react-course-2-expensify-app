// const person = {
//     name: 'Buster',
//     age: 14,
//     location: {
//         city: 'Palisade',
//         temp: 32
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     autohr: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['123 Nowhere', 'Palisade', 'Colorado', '81526'];
const [, city, state = 'Wyoming'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);