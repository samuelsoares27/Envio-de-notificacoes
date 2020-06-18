var express = require('express')
var porta = 3000;
var app = express();

app.get('/', function (req, res) {
    res.json({ status: 'Servidor rodando!' })
})

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

    var token = ['cYQf3xO-SzqwvSR52zuOD-:APA91bEkDhZDHE31Fm980pqon8RDEl0kVP3BcrUmAfK2NjG54m1swOOkA5c-O_q2o0TAnxiXG4RtFs5q564XbSMh0I6OoOdB2lJEDar6RD4a3bmNvcJ3ZYrPkWXafKARRrCiku9WD4JV',
                 'd3ciqDvuQ4iIxR7O-ieHj8:APA91bFsu3en2LiuWwyru5rYHcCfIDbuF4GBIVD0SUoWPaYpcDVuJhxJ9EngwwBY8qdrUihfJ9jt_Zpwj5uPfYzr9w79TmFnnUUvqPgSWEDLq66F2tJuoZG-E1ka6rv3ItZ7xb6x-NU8']
       
    var message = {
        notification: {
            title: 'teste',
            body: req.body
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
