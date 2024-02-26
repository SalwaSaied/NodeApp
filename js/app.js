const data2 = require("./data2")
const yargs = require("yargs")
// command for adding items
yargs.command({
    command : "add",
    describe : "to add an item",
    builder:{
        fname:{
            describe:"this is the fname describtion in add command",
            demandOption: true,
            type: "string"
        },
        lname:{
            describe:"this is the lname describtion in add command",
            demandOption: true,
            type: "string"
        },
        age:{
            describe:"this is the age describtion in add command",
            demandOption: true,
            type: "string"
        },
        city:{
            describe:"this is the city describtion in add command",
            demandOption: true,
            type: "string"
        },
    },
    handler:(x)=>{
        data2.addPerson(x.id,x.fname, x.lname, x.age, x.city)
    }
})
// command for delete items
yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler:(x)=> {
       data2.deleteData(x.id)
    }
  
  })
// command for read items
  yargs.command({
    command : "read",
    describe : "to read an item",
    builder: {
        describe:"this is id description in read command",
        demandOption: true,
        type: "string"
    },
    handler:(x)=> {
       data2.readData(x.id)
    }
  
  })
// command for list items
yargs.command({
    command : "list",
    describe : "to list items",
    builder: {
        describe:"this is id description in list command",
        demandOption: true,
        type: "string"
    },
    handler:(x)=> {
       data2.listData(x.fname,x.lname)
    }
  
  })


yargs.parse()

