console.log('starting notes.js file');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
    //filter will return true or false when checking for duplicates in arr
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }  
};

var getAll = () => {
    console.log('getting all notes');
}

var getNote = (title) => {
    console.log('getting single note', title);
}

var removeNote = (title) => {
    console.log('removing note: ', title);
}
 
// define obj that gets set to exports
module.exports = {
    addNote, // addNote : addNote, ES6!
    getAll,
    getNote,
    removeNote
};