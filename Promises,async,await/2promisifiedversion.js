function setTimeoutPromisified(ms){
    const res=new Promise(resolve=>setTimeout(resolve,ms))
    console.log(res)
    return res
}



setTimeoutPromisified(1000).then(function(){
    console.log("hi")
    setTimeoutPromisified(3000).then(function(){
        console.log("hello")
        setTimeoutPromisified(5000).then(function(){
            console.log("hey")
        })
    })
})