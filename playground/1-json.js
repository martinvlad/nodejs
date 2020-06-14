const fs = require('fs')



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)

data.name = "Mark"
data.age = 29
const objJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', objJSON)