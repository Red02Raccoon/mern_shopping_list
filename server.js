const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParesr - middleware.
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log('connected'))
	.catch(err => console.log('errors'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listen on port ${port}`));