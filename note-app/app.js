console.log('starting app.js file');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('listing all notes');
} else if (command === 'read') {
    console.log('retrieving individual note');
} else if (command === 'remove') {
    console.log('removing note');
} else {
    console.log('command not found');
}

