const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')



yargs.version('1.1.0')

//add notes
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title , argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
        
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler(){
        console.log("read a note")
    }
})
yargs.command({
    command: 'list',
    describe: 'list out all the notes',
    handler(){
       notes.listNotes()
    }
})

//remove notes
yargs.parse()
//console.log(yargs.argv)
