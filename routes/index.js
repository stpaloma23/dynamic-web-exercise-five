const express = require('express')
const router = express.Router();
const port = 5000

// const firestore = require("firebase/firestore");
// const db = firestore.getFirestore();
router.use((req, res, next) => {
    console.log("time: ", Date.now())
    next();
})

// router.get("/", (req, res) => {
//     res.send("Hello girl")
//     // const postQuery = firestore.getDocs(firestore.collection(db, "posts"));
//     const postArray = [];

//     postQuery
//         .then((response) => {
//             response.forEach((post)=>{
//                 console.log(post.data());
//                 postArray.push({id:post.id, ...post.data()}); // spread operator being used
//         });
//         res.send(postArray);
//     })
//     .catch((error) => {
//         console.log(error);
//         return res.send(error);
//     });

// });

module.exports = router ;