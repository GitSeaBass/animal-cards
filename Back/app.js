const express = require('express');
const app = express();

const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');

//const packs = require('./routes/api/packs');

//Connect to Database
app.use(cors({origin:true, credentials: true}));
app.use(express.json({extended: false}));

//app.use('/api/packs', packs);

const conn_str = 'mongodb+srv://SeaBass:mongopassword@cluster0.tgw2hc0.mongodb.net/';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log(`MonogDB Connection Suceeded...`)
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});