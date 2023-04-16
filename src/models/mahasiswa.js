const mongoose = require('mongoose') // Menggunakan Mongoose
const Schema = mongoose.Schema // Membuat Schema
// Membuat Schema
const mahasiswaSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    jurusan : {
        type: String,
        required : false
    }
}) 


// Membuat Model

const Mahasiswa = mongoose.model('contacts',mahasiswaSchema)

module.exports = Mahasiswa