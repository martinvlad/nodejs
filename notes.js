const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes..."
}

const addNote = function(title, body){
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log(chalk.green.inverse("new note added"))
    }else{
        console.log("note title taken")
    }

   
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if (notes.length === notesToKeep.length){
        console.log(chalk.green(" No Note Found! "))
    }
    else{
        console.log(chalk.red(" Note Removed! "))
    }

        savedNotes(notesToKeep)
    
}

const listNotes = () =>{

    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
   
const savedNotes = function(notes){

    const objJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', objJSON)
}


const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(err){
       return[];
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}