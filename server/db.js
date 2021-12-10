const mongoose = require('mongoose');

//form-user is the name of database
mongoose.connect('mongodb://127.0.0.1:27017/form-user', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});