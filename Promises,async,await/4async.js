
function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}



async function run(){
    await setTimeoutPromisified(1000)
    console.log("hi")
    await setTimeoutPromisified(3000)
    console.log("hello")
    await setTimeoutPromisified(5000)
}


run()