const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

const createPostForm = 
`<h1>Create Post</h1>
<form action="">
    <input type="text" name="title" pleaceholder="Title" />
    <input type="text" name="text" pleaceholder="Text" />
    <input type="text" name="author" pleaceholder="Author" />
    <button type="submit"> Submit </button>
</form>
`;

router.use((req, res, next) => {
    next();
});
router.get("/", (req,res) => {
    res.send(createPostForm);
});

module.exports = router;