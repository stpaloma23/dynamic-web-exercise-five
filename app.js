const express = require("express");
const firebase =  require("firebase/app");

const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
    apiKey: "AIzaSyDYitADpTcj6f-fz9iBCPrsnqvQ7UWpBW4",
    authDomain: "exercise-five-fall-2022-psc.firebaseapp.com",
    projectId: "exercise-five-fall-2022-psc",
    storageBucket: "exercise-five-fall-2022-psc.appspot.com",
    messagingSenderId: "153254339453",
    appId: "1:153254339453:web:2a3b4147b834030cd02214"
};
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const singlePostRoute = require("./routes/singlePost");
const createPostRoute = require("./routes/createPost");


app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);


app.listen(port, () => (
    console.log(`its workiing, check at http://localhost:${port}`)
    )
)
// at 3 min in tutoril 