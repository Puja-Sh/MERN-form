const express = require('express');
const userRouter = require('./routers/user');
require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

// configuring Express app to use the contents of the build folder as a starting point of our app.
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use(express.json());
app.use(userRouter);        // middleware for express app so that we can make API request to it

app.get('/', (req, res) => {
    res.send('<h2>This is from index.js file</h2>');
});

// default route
//If any of the previous routes do not match, this code will send back the index.html file from the build folder
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});