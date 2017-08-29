/* EXAMPLE OF JSON.stringify()
var obj = {
    name: 'Ryan'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

/* EXAMPLE OF JSON.parse()
var personStringify = '{"name": "Ryan", "age": 26}';
var person = JSON.parse(personStringify);
console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

var ogNote = {
    title: 'some title',
    body: 'some body'
};

var ogNoteString = JSON.stringify(ogNote);
fs.writeFileSync('notes.json', ogNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString); // takes string JSON and returns back obj
console.log(typeof note);
console.log(note.title);

