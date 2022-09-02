const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5683;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Mogodb database connection establish successfylly`);
});

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/user');

app.use('/exercises', exerciseRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




