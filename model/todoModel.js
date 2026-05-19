const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    details :{
        type : String,
    },
    time : {
        type: Date,
        default : Date.now
    },
    completed : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});
const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;