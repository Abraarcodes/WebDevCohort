const users = [
    { name: "Abraar", age: 22 },
    { name: "Ali", age: 21 },
    { name: "Sara", age: 23 },
    { name: "Zaid", age: 24 }
  ];


const result={}
users.forEach(user=>{
    const {name,age}=user
    result[age]=name
})

console.log(result)