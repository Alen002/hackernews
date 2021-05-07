const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.json()); 



app.use(morgan('short'));  //short or combines
/* app.use(express.static('./public/')); */

app.use(bodyParser.urlencoded({extended: false})); // middleware - necessary to receive the inform. from data entered in the form
/* app.use(bodyParser.json()); */


app.listen(3000, () => {console.log('Server is up and running on 3000')});


app.get('/', (req, res) => {
    res.send('Main folder')    
});