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




//using arrow function


function getName(arr,callback){
    let answer=[]
    for(let i=0;i<arr.length;i++){
        answer.push(callback(arr[i]))
    }
    return answer
}

const result=getName(users,user=>user.name)
console.log(result)






//Without arrow function

function getResult(arr,getName){
    let answer=[]
    for(let i=0;i<arr.length;i++){
        answer.push(getName(arr[i]))
    }
    return answer
}


function getName(element){
    return element.name
}
const result=getResult(users,getName)
console.log(result)