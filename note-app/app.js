console.log('starting app.js file');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('dracarys'));
var filterArr = _.uniq(['Ryan', 'Bryan', 'Ryan', 1, 2, 3, 4]);
console.log(filterArr);

// var user = os.userInfo();

//option one
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
//     if(err) {
//         console.log('Unable to write to file');
//     }
// });



