const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const items = require('./routes/api/items');
const users = require('./routes/api/users');

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '//althea-bomboniere.it'
}));



const db = require('./config/keys.js').mongoURI;

dotenv.config();

mongoose.connect(db,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/items',items);
app.use('/api/users',users);

app.use('/uploads',express.static('uploads'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));