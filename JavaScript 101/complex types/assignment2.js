function greet(user){
    let gt=(user.gender=="male")? "Mr" : "Mrs"
    console.log("Hi "+ gt +" "+ user.name + " Your age is "+ user["age"])
}

let user={
    name:"Abraar",
    age:22,
    gender:"male"
}

greet(user)