importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Configuração do Firebase
const Configuracao = {
    apiKey: "AIzaSyCdkAS1LlHP9alON9L7h34x7sJPPNhvvZ4",
    authDomain: "teste-f60cd.firebaseapp.com",
    databaseURL: "https://teste-f60cd.firebaseio.com",
    projectId: "teste-f60cd",
    storageBucket: "teste-f60cd.appspot.com",
    messagingSenderId: "600499591270",
    appId: "1:600499591270:web:e677f069d945b3c375f5a7",
    measurementId: "G-WEBNJ7JNET"
};

firebase.initializeApp(Configuracao);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {

    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body       
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
