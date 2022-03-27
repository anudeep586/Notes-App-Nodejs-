const { default: chalk } = require('chalk')
const fs=require('fs')

const fun=()=>{
    return "Your notes..."
}

const addNote=(title,body)=>{
  const notes=loadNotes()
  const duplicateNote=notes.find((note)=>note.title===title)
  debugger 
  
  if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
   }
   else{
       console.log("title taken")
   }
  
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []

    }
    
}
const removeNote=function(title){
    const notes=loadNotes()
    
    const placedTitle=notes.filter((note)=>note.title!==title)
    if(notes.length>placedTitle.length){
        console.log(chalk.green("Successfully removed"))
    }
    else{
        console.log(chalk.red("Not removed"))
    }
    saveNotes(placedTitle)

}
const listNodes=()=>{
    const notes=loadNotes()
    console.log(chalk.red.inverse('Your notes found!'))
    notes.forEach(element => {
        console.log(chalk.white(element.title))
    });
}

const readNote=(title)=>{
    const notes=loadNotes()
    const dupli=notes.find((note)=>note.title===title)
    if (dupli){
        console.log(chalk.inverse.red(dupli.title))
        console.log(chalk.inverse.green(dupli.body))
    }else{
        console.log(chalk.inverse.red("there is no such title"))
    }
    
}
module.exports={
    fun:fun,
    addNote:addNote,
    removeNote:removeNote,
    listNodes:listNodes,
    readNote:readNote
}