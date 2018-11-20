const mongoos = require('mongoose');

const UserShema = mongoos.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
});
const user = module.exports = mongoos.model('user',UserShema);

