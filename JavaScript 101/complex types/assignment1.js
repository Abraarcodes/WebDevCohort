// Write a function that takes a user as an input and greets them with their name and age


function greet(user){
    console.log("Hi "+ user.name + " Your age is "+ user["age"])
}

let user={
    name: "Abraar",
    age:22
}

greet(user)