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


function getName(arr,callback){
    let answer=[]
    for(let i=0;i<arr.length;i++){
        let res=callback(arr[i])
        if(res!==false)
        answer.push(arr[i].name)
    }
    return answer
}
const result=getName(users,user=>user.age>18)
console.log(result)