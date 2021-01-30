const fs = require('fs')
const getNotes = require('./notes.js')

fs.writeFileSync('notes.txt', 'Hello, this is the first note, btw it replaces previous iterations')

fs.writeFileSync('notes-part-2.txt', 'This is the second note')

fs.appendFileSync('notes.txt', '\nthis is the appended data, how fun!')

fs.appendFileSync('notes.txt', '\n' + getNotes())

console.log(getNotes())