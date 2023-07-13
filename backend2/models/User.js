// const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'users'
})
export default mongoose.model('User', userSchema)