const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const mahasiswa = require('./src/routers/mahasiswa')
const bodyParser = require('body-parser')
require("./src/utils/db");

app.use(express.json());
app.use(bodyParser.json())
app.use('/mahasiswa',mahasiswa)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})