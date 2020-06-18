var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var porta = 3000;
var app = express();

app.use(cors())

app.get('/', function (req, res) {
    res.json({ status: 'Servidor rodando!' })
})

app.use(bodyParser.json());

app.listen(porta, function () {
    console.log('Servidor está rodando no localhost:' + porta)
})

var admin = require("firebase-admin");

var serviceAccount = require("chave");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teste-f60cd.firebaseio.com"
});


app.post('/home', function (req, res) {

    var token = [req.body["Token"]];
       
    var message = {
        notification: {
            title: req.body["Titulo"],
            body: req.body["Texto"]
        },
        tokens: token
    };

    admin.messaging().sendMulticast(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
});
