const port = 9000;

//import modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); 

//middleware 
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true  })) 

//db connection
const mongoURI = 'mongodb+srv://DareDenied:Karachi123456@cluster0.kjmkq.mongodb.net/dare-denied?authuser=true&w=majority'
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!    
    console.log('>>>>>>>>>======================== we re connected! to mongoose ========================>>>>>>>>>')
});

//route connect with main server file
app.use('/', require('./routs/index'))
app.listen(port, () => console.log(`Server is listening on port ${port}`))