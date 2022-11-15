const firebase =  require("firebase/app");
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const homePage = require('./routes/index.js')

const firebaseConfig = {
    apiKey: "AIzaSyDYitADpTcj6f-fz9iBCPrsnqvQ7UWpBW4",
    authDomain: "exercise-five-fall-2022-psc.firebaseapp.com",
    projectId: "exercise-five-fall-2022-psc",
    storageBucket: "exercise-five-fall-2022-psc.appspot.com",
    messagingSenderId: "153254339453",
    appId: "1:153254339453:web:2a3b4147b834030cd02214"
};
firebase.initializeApp(firebaseConfig);

// const indexRoute = require(".routes/index.js");
// const singlePostRoute = require(".routes/singlePost.js");
// const indexRoute = require(".routes/index.js");


// app.use("/", indexRoute);
// app.use("/post/:id", singlePostRoute);

// app.listen(port, () => (
//     console.log(`Example app listening on port http://localhost:${port}`)
// ))
app.get('/', (req,res) => {
    res.send("hello world");
})
app.listen(port, () => console.log("its workiing"));