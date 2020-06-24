importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Configuração do Firebase
const Configuracao = {
    apiKey: "AIzaSyBo8vMQdWAtFagrSyK1Ok904haWmIbwf7c",
    authDomain: "teste-web-7e9dc.firebaseapp.com",
    databaseURL: "https://teste-web-7e9dc.firebaseio.com",
    projectId: "teste-web-7e9dc",
    storageBucket: "teste-web-7e9dc.appspot.com",
    messagingSenderId: "107574881124",
    appId: "1:107574881124:web:6b68c547beeb19ef1ee871",
    measurementId: "G-NM0EFBW5VV"
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
