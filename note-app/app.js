console.log('starting app.js file');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv; // stores version of args app ran with
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') { // req title
    console.log('retrieving individual note');
    notes.getNote(argv.title);
} else if (command === 'remove') { // req title
    console.log('removing note');
    notes.removeNote(argv.title);
} else {
    console.log('command not found');
}

