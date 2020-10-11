const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    login:{ type: String, required: true, unique : true},
    html_url: { type: String, required: true},
    location : {type: String, require: true} 
})

module.exports = mongoose.model('GitHubUser',dataSchema);