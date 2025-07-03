const user = {
    name: "Abraar",
    age: 22,
    city: "Hyderabad"
  };


  console.log(Object.keys(user))
 
//iteration
for(let key in user){
   console.log(user[key])
}
