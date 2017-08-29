console.log('starting notes.js file');

// modules gives us the advantage to export functions to app.js
module.exports.addNote = () => {
    console.log('adding note');
    return 'New note';
}