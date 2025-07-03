const settings = { darkMode: true, fontSize: 14, showNav: false };

const result={}
for(let key in settings){
    if(typeof settings[key]==="boolean"){
        result[key]=settings[key]
    }   
}
console.log(result)
// Output: [ "darkMode", "showNav" ]




//key takeway- typeof operator returns a string (boolean,number,string) so enclose in ""