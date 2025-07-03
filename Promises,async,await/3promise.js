function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}


setTimeoutPromisified(1000)
    .then(function(){
        console.log("hi")
        return new setTimeoutPromisified(3000)
    })
    .then(function(){
        console.log("hello")
        return new setTimeoutPromisified(5000)
    })
    .then(function(){
        console.log("hey")
    })