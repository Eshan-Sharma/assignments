const fs = require('fs');

let data = "Eshan is writing in reading txt file";
  
fs.writeFile("reading.txt",data, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File is successfully written\n");
        console.log(fs.readFileSync("reading.txt", "utf-8"));
    }
})
