const fs = require('fs');
let filePath = 'diary.txt';

function reading(){
    let read = new Promise((resolve, reject)=>{
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err){
                reject();
                console.log(err);
            }else{
                resolve(data);
                // console.log(data);
            }
        })
    });
    return read;
}


function writing(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, data, (err)=>{
            if(err){
                reject();
                console.log(err);
            }else{
                console.log('Written:');
                console.log(fs.readFileSync(filePath, "utf-8"));
                
                resolve();
            }
        })
    })
}

async function removeSpace(){
    let data = await reading().then();
    console.log("Original Data: \n"+data);
    let parsedData =  data.replace(/\s+/g, " ");
    console.log('Parsed Data: \n'+parsedData);
    // console.log(data);
    await writing(parsedData);
    console.log('End');
      

}

removeSpace()