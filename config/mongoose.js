//require the library
const mongoose = require('mongoose'); 

//connect to the databse
mongoose.connect('mongodb://localhost/contacts_list_db');

//aquire connection (to check if it is successful)
const db = mongoose.connection; //checking whether it has connected to our db or not
//db var name

//error
db.on('error',console.error.bind(console,'error connectiong to db'));

//up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the database');
});

//including the file while firing up the server