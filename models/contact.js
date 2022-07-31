const mongoose = require('mongoose');
//if mongoose if required at two places ,then instance for one will be used for the other 
//will save a lot of space

const contactSchema = new mongoose.Schema({
    name :{
             type : String,
             required : true
          },
    phone :{
        type : String,
        required : true
    }      
});

//need to give a collection name
//for model or collection name ,keep the first letter as capital due to default naming convention

const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;