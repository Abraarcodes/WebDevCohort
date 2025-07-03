// Task 1: Find average age of users

const users=[
    {name :"Abraar",age:22},
    {name: "John",age:19},
    {name:"Adam",age:19}
]


//using a for in loop
let avg=0;
for(let key in users){
    avg+=users[key].age;
}
console.log(avg/users.length)



//using a for each loop
let avg=0
users.forEach(user=>{
    avg+=user.age
})
console.log(avg/users.length)



//using reduce function
const avgage=users.reduce((acc,user)=>acc+user.age,0)/users.length;
console.log(avgage)