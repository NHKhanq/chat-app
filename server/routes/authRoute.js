import mongoose from "mongoose";
import {genSalt, hash} from 'bcrypt'

const userSchema =  new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    firstname: {
        type: String,
        unique: false
    },
    lastname: {
        type: String,
        unique: false
    },
    image: {
        type: String,
        unique: false
    },
    color: {
        type: Number,
        unique: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    },
})

userSchema.pre("save", async function (next) {
    const salt = await genSalt()
    this.password = await hash(this.password, salt)
    next()
})

const User = mongoose.model("Users", userSchema)

export default User;