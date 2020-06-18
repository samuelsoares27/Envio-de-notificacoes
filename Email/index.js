var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var porta = 3000;
var app = express();
var admin = require("firebase-admin");
var serviceAccount = require("chave");

app.use(cors())
app.use(bodyParser.json());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teste-f60cd.firebaseio.com"
});

app.listen(porta, function () {
    console.log('Servidor está rodando no localhost:' + porta)
})

// Método get chamado por Localhot:3000
app.get('/', function (req, res) {
    res.json({ status: 'Servidor rodando!' })
})

// Método post chamado por Localhot:3000/home
app.post('/home', function (req, res) {

    EnviarMensagem(req.body["Titulo"],
                   req.body["Texto"],
                   req.body["Token"]);

});

function EnviarMensagem(Titulo, Mensagem, Token) {

    var token = [Token];

    var message = {
        notification: {
            title: Titulo,
            body: Mensagem
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

}
