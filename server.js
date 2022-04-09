// const fs = require('fs');

// const path = require('path');



const express = require('express');
//const { filterByQuery } = require("./filterByQuery");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express()

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
//grab information from the public file and have it available without pointing to a specific endpoint
app.use(express.static('public'));

//use the now external api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



// app.get('/animals', (req, res) => {

//   res.sendFile(path.join(__dirname, './public/animals.html'));

// });

// app.get('/zookeepers', (req, res) => {

//   res.sendFile(path.join(__dirname, './public/zookeepers.html'));

// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

