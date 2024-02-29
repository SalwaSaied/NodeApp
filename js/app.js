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

///////////////////////////////////////////////////////////////////////
// // API request 
// const request = require("request")
// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt"

// request ({url , json : true  } , (error , response) => {

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.condition.text)
//     }

// })
const request = require("request")
const forecast = require("./forecast")
const geocode = require("./geocode") 
const country = process.argv[2]

geocode(country, (error,data) =>{
    console.log("ERROR : ", error)
    console.log("DATA: ", data)

    forecast(data.latitude , data.longtitude, (error,data)=>{
        console.log("ERROR : ", error)
        console.log("DATA: ", data)
    })
})