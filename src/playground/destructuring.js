//Object destructuring
const person = {
    name: 'Suchetha',
    age: 24,
    location:{
        city: 'Bengaluru',
        temp: 24
    }
};

console.log(person.name);
const {name: firstName = 'Anonymous',age} = person;
console.log(age, firstName);
const {city, temp: temperature, pin = '560094'} = person.location;
console.log(`${city} is city of ${firstName} with temp ${temperature}`); 

//Array destructuring

const item = ['Coffee (hot)', '10', '20', '30'];
const [coffee, , , , cost = 45] = item;
console.log(`${coffee} costs ${cost}`);
const [coffee1, , cost1] = item;
console.log(`${coffee1} costs ${cost1}`);