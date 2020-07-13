require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
//Below is some shorthand for variable declarations. If you have multiple 
//declarations of the same type in a row, simply separate them with comma's instead
//of multiple vars, lets, or const.
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})
.catch(err => console.log(err));

app.post("/auth/register", authCtrl.register);

app.listen(port, () => console.log(`Working on port ${port}`));