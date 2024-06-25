const mongoose = require('mongoose');
const { type } = require('os');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    age:{
        required: true,
        type: int
    },
    work:{
        type: String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String,
        unique: true
    },
    address:{
        required: true,
        type: int
    },
    salary:{
        required: true,
        type: int
    },

})

const person=mongoose.model('Person',personSchema)

module.exports=person