const mongoose = require("mongoose");
const AddDataSchema = mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
    },
    Name:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    photoURL:{
        type: String,
    },
    uid:{
        type: String,
    }
})

const AddData = mongoose.model('authusers', AddDataSchema)
module.exports = AddData    

// module.exports = mongoose.model('AddTodo', userSchema)