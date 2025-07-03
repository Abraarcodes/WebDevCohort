const fs=require("fs")

// function onDone(){
//     console.log("file has been cleaned")
// }

// function cleanFile(filepath,callback){
//     fs.readFile(filepath,"utf-8",(err,data)=>{
//         data=data.trim();
//         fs.writeFile(filepath,data,()=>{
//             callback()
//         })

//     })
// }

// cleanFile("a.txt",onDone)





function cleanFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err) return reject(err)
            data=data.trim()
            fs.writeFile(filepath,data,(err)=>{
                if(err) return reject(err)
                resolve(data)
            })
        })
    })
}


function onDone(data){
    console.log(data)
}

function onError(err){
    console.log(err)
}

cleanFile("a.txt").then(onDone).catch(onError)