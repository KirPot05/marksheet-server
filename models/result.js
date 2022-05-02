import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    },

    sclass: {
        type: Number,
        required: true
    },

    section:{
        type: String, 
        required: true
    },

    marks:[{eng: {type: Number}, maths: {type: Number}, science: {type: Number}, hindi: {type: Number}, comp_sci: {type: Number}}]
});

export default mongoose.model('Results', resultSchema);