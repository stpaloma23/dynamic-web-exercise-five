const express = require('express')
const router = express.Router();
const port = 4000

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();
router.use((req, res, next) => {
    console.log("time: ", Date.now())
    next();
})

router.get("/:id", (req, res) => {
    res.send("Hello girl")
    const postId = req.params.id;
    const postQuery = firestore.getDocs(firestore.doc(db, "posts", postId));
    postQuery
        .then((response) => {
            const post = response.data();
            if(!post) res.send({});
            res.send(post);
        })
        .catch((error) => {
            console.log(error);
            return res.send(error);
        });
});

module.exports = router ;