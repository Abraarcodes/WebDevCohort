// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


//using foreach method
function canVote(users){
    const result=[]
    users.forEach(user => {
        if(user.age>18) result.push(user.name)
    });

    console.log(result)
}



//using a simple for loop
function canVote(users){
    let results=[]
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            results.push(users[i].name)
        }
    }
    console.log(results)
}




//using filter method
function canVote(users){
    const result=users.filter(user=>user.age>18)
                      .map(user=>user.name)
    console.log(result)
}



const users=[{
    name:"Abraar",
    age:22
},{
    name:"John",
    age:16
},{
    name:"Mary",
    age:19
},{
    name:"Bob",
    age:17
}]

canVote(users)