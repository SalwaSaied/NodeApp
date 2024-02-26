

const fs = require("fs")
const addPerson =( id, fname , lname, age, city)=>{
  
    const allData= loadData()
    // check duplicated id
    const duplicatedData = allData.filter((obj)=>{
        return obj.id ===id
    })
   
   if (duplicatedData.length ==0){
    allData.push({
        id : id,
        fname: fname,
        lname: lname , 
        age : age,
        city : city

    })


    saveAllData(allData)
}else{
    console.log("Error duplicated id")
}
}

// loading and saving data ( 2main functions in any prjects)
const loadData = ()=>{
try{
    // convert data from buffer to json
    const DataJson = fs.readFileSync("data2.json").toString()
    // return data to object to store
    return JSON.parse(DataJson)
}
catch{
    return[]
}
}
// save data logic

const saveAllData = (allData)=>{
    // convert from data to json
    const AllDataJson = JSON.stringify(allData)
    // store it in the file system
    fs.writeFileSync("data2.json", AllDataJson)
}
// delete data by id
const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
       return obj.id !== id 
      
    })
saveAllData(dataToKeep)
console.log("you already deleted an item")
}

// Read Data
const readData =(id)=>{
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
        
    }); 
   
if (itemNeeded){
    console.log(itemNeeded)
} else{
    console.log("Id needed not found")
}
}
// List Data
const listData=()=>{
    const allData=loadData()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname)
    });

}

//export addperson
module.exports={
    addPerson ,
    deleteData,
    readData,
    listData
}