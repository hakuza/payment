const express = require('express')
const router = require('./routes.js')
const app = express();
app.set('port',3003);
app.use(express.static(__dirname + '/../public'))

app.use('/courses', router)

app.listen(app.get('port'),()=> console.log(`listening on port ${app.get('port')}`))