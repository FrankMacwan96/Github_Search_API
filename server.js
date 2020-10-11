const express = require('express');
const parser = require('body-parser');
const app = express();
const search = require('./Route/route');
const mongoose = require('mongoose');
const secureEnv = require('secure-env');
global.env = secureEnv({secret:'Frank'});

app.use(parser.json());
app.use('/',search);

const db = global.env.DB_CONN;
const port = global.env.PORT || 3000;

mongoose.connect(db,
    {
        useNewURLParser:true
    }
);

app.listen(port);