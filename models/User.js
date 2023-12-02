const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isi nama']
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isi gender']
    },
    tgllahir: {
        type: String,
        required: [true, 'Silahkan isi tanggal lahir']
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isi kelas']
    },
    walikelas: {
        type: String,
        required: [true, 'Silahkan isi wali kelas']
    }
})

module.exports = mongoose.model('siswa', UserSchema)