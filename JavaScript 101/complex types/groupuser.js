// Exercise 8: Group Users by City

const users = [
    { name: "Abraar", city: "Delhi" },
    { name: "Ali", city: "Mumbai" },
    { name: "Sara", city: "Delhi" }
  ];


  const grpcity={}

  users.forEach(user=>{
    const {name,city}=user
    if(!grpcity[city]){
        grpcity[city]=[]
    }
    grpcity[city].push(name)
  })

  console.log(grpcity)




//   o/p- {Delhi:['Abraar','Sara], Mumbai:['Ali]}