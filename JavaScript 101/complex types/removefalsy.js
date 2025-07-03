const obj = {
    name: "Abraar",
    age: 0,
    city: "",
    isActive: true,
    score: null
  };

  
  const result={}

  for(let key in obj){
    if(obj[key]!==false && obj[key]!==null && obj[key]!=="" && obj[key]!==0){
        result[key]=obj[key]
    }
  }

  //better code
  for(let key in obj){
    if(obj[key]){
        result[key]=obj[key]
    }
  }

  console.log(result)

  // Output: { name: "Abraar", isActive: true }
  