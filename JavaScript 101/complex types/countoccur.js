const users = [
    { name: "Abraar", age: 22 },
    { name: "Ali", age: 21 },
    { name: "Sara", age: 22 },
    { name: "Zaid", age: 21 }
  ];

  const result={}
  users.forEach(user=>{
    const {age}=user
    result[age]=(result[age]||0)+1
  })

  console.log(result)



//   O/P- {22:2 , 21:2}