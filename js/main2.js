const person ={
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['Collecting Coins','playing guitar', 'singing'],
    address:{
        steet: '50 main st.',
        city:'Boston',
        state: 'MA'
    }

}

console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;
console.log(city);

person.email = 'agundran@gmail.com';
console.log(person.email);