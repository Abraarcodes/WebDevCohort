// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


function even(arr){
    return arr.filter(a=>a%2==0)
}

let arr=[3,2,4,5,7,8,9,0,1]
console.log(even(arr))

