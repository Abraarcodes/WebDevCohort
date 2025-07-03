
setTimeout(()=>{
    console.log("hi");
    setTimeout(()=>{
        console.log("hello")
        setTimeout(()=>{
            console.log("hey")
        },5000)
    },3000)
},1000)