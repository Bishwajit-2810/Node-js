let fs = require('fs');
let os = require("os");


let user = os.userInfo();
console.log(user);
console.log(user.username);

appendFFile=() =>{
    fs.appendFile("welcome.txt", "Hello " + user.username + '\n', () => {
        console.log('file is created');
    });
}

module.exports={
    user,
    appendFFile
}