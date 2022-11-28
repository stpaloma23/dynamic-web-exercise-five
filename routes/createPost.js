const { response } = require('express');
const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

const createPostForm = 
`<h1>Create Post</h1>
<form action="/create/submit">
    <div style="display:flex; flex-direction:column; max-width:400px;">
        <label for="postTitle"> Title </label>
        <input type="text" name="postTitle" placeholder="Title" style="margin-bottom: 20px;"/>
        <label for="postText"> Text </label>
        <input type="text" name="postText" placeholder="Text" style="margin-bottom: 20px;"/>
        <label for="author"> Author </label>
        <input type="text" name="author" placeholder="Author" style="margin-bottom: 20px;"/>
        <button type="submit"> Submit </button>
    </div>
</form>
`;

// can also do (_, _,next) 
router.use((req, res, next) => {
    next();
});
router.get("/", (req,res) => {
    res.send(createPostForm);
});
router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle; 
    const text = queryParams.postText; 
    const author = queryParams.author; 
    // create id from title to fix invalid doc ref error
    const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();
    //submit to firebase 
    const setBlogPost = firestore.setDoc(
        firestore.doc(db, "posts", idFromTitle),
        {
            title, 
            text,
            author,
        }
    );
    setBlogPost
        .then((response) => {
            res.send(
                `
                    <h1> Your Submissions was Sent Successfully! </h1>
                    <p> <a href="/create"> Submit another Post </a> </p>
                    <p> <a href="/"> Go Home </a></p>
                `
            );
        })
        .catch((error) =>{
            console.warn(error);
            res.send(`There has been an error submitting your post. ${error.toString()}`);
        });
});

module.exports = router;