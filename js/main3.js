const todos =[
{
    id: 1,
    text: 'Take out the trash',
    isComplete: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isComplete: true
},
{
    id: 3,
    text: 'Dentist Appointment',
    isComplete: false
}
];

console.log(todos);

//convert const into JSON file
const todoJSON = JSON.stringify(todos);
//output JSON file
console.log(todoJSON);


//for loops
for (i=0; i<10;i++){

    console.log('For loop : ${i}');
}
//while loop
let a = 0;
    while (a<10) {
    console.log('For loop : ${a}');
    a++;
    }

//for for arrays

for (i=0; i<todos.length;i++){

    console.log(todos[i].text);
}


for (let todo of todos){
    console.log(todo.text);
}

//high orther array

//forEach , map, filter

todos.forEach(function(todo){
    console.log(todo.text);

});


const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoText1 = todos.filter(function(todo){
    return todo.isComplete === true;
});

console.log(todoText1);