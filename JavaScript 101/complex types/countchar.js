const str = "apple";

const result={}
for(let i=0;i<str.length;i++){
    const ch=str[i]
    result[ch]=(result[ch]||0)+1
}
console.log(result)
// Output: { a: 1, p: 2, l: 1, e: 1 }
