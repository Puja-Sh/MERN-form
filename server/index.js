const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user');
require('./db');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.use(userRouter);        // middleware for express app so that we can make API request to it

app.get('/', (req, res) => {
    res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});