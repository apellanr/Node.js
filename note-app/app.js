console.log('starting app.js file');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: ', notes.sumFunc(2, 2));

// var user = os.userInfo();

//option one
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
//     if(err) {
//         console.log('Unable to write to file');
//     }
// });



