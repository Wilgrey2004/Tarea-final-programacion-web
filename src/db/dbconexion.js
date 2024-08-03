const mongoose = require("mongoose");

const host = '127.0.0.1'
const port = '27017'

const databse = 'estudiantes-itla'
const url = `mongodb://${host}:${port}/${databse}`

mongoose.connect(url)