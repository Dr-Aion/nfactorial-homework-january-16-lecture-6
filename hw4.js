// Task 1
function checkAge(age){
    return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(19);

// Task 2
function pow(x, n){
    let ans = 1;
    for(let i = 0; i < n; i++){
        ans *= x;
    }
    return ans;
}
console.log(pow(1, 1));

// Task 3
let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask("Вы согласны?", function() { alert("Вы согласились."); }, function() { alert("Вы отменили выполнение."); });

// Task 4
let arr = [5, 2, 1, -10, 8];
// First sort the array
arr.sort();
// Then reverse it:
arr.reverse();
alert( arr ); // 8, 5, 2, 1, -10

//Task 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names ); // Вася, Петя, Маша

//Task 6
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//Task 7
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];
function getAverageAge(arr2){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr2) ); // (25 + 30 + 29) / 3 = 28