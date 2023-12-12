const fs = require('fs');
fs.readFile('reading.txt', 'utf8', function(err, data){ 
    console.log(data); 
}); 

// for(let i = 0; i< 100000000000000000;i++){

// }