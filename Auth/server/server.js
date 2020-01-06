const express = require('express')
const app = express();
const User = require('../db/model/User.js')
//changed the port to avoid conflicts
var port = process.env.PORT || 3001
app.use(express.json());

app.post('/get', (req, res)=>{
    User.find(req.body.username)
    .then(data=>{
        res.send("got data", data)
    })
    .catch(err=>{
        res.send("got error ", err)
    })
})

app.post('/create', (req, res)=>{
    User.create(req.body)
    .then(data=>{
        res.send("got data", data)
    })
    .catch(err=>{
        res.send("got error ", err)
    })
})

app.listen(port);