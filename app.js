const chalk=require('chalk')
const notes=require('./notes.js')
const yargs=require('yargs')

//Customize ur version

yargs.version('1.1.0')
// add.remove,read,list

//add 
yargs.command({
    command:'add',
    describe:'adding a new  note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove
yargs.command({
    command:'remove',
    describe:'remove a new  note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command:'list',
    describe:'listing notes',
    handler(){
        notes.listNodes()
    }
})

//read

yargs.command({
    command:'read',
    describe:'read a new  note',
    builder:{
        title:{
            describe:"read the notes",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()