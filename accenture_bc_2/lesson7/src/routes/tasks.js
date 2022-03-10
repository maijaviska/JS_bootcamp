import express from "express";
const router = express.Router();



// GET /tasks - gives us all tasks
router.get('/', (req, res) => {
    res.json({message:"Get all the tasks"});
});

// GET /tasks/:id - give info about one speciffic entity
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({message:"Get info about specific tasks", id: id});

});

// POST /tasks - requires JSON body, creates a new entity
router.post('/', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    res.json({message: `Create a task with of ${title} and desc of ${description}`});
});

// POST /is-anagram {"word1":"Foo","word2":"Bar"}
// Should print out "Foo and Bar are not anagrams"
router.post('/is-anagram', (req, res) => {
    const word1 = req.body.word1;
    const word2 = req.body.word2;
    //do validation
    const errors = [];
    if (typeof word1 !== 'string') {
        errors.push('word1 must be a string');
    }
    if (typeof word2 !== 'string') {
        errors.push('word1 must be a string');
    }
    if (word1  === '') {
        errors.push('word1 must not be empty');
    }
    if (word2 === '') {
        errors.push('word1 must not be empty');
    }

    if(errors.length > 0) {
        return res.json({
            message: 'The input is invalid',
            errors:errors,
        }, 422);
    }




   if (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')) {
       return res.json({message: `${word1} and ${word2} are anagram`});
   } else res.json({message: `${word1} and ${word2} are not anagram`});
});

// POST /is-palindrome {"phrase":"alus ari ira sula"}
// Should print out "Phrase 'alus ari ira sula' is a palindrome"
router.post('/is-palindrome', (req, res) => {
    const phrase = req.body.phrase;
    if (phrase === phrase.split('').reverse().join('')) {
        return res.json({message: `'${phrase}' is a palindrome`})
    } else res.json({message: `'${phrase}' is not a palindrome`})
});

// PUT /tasks/:id - requires JSON body, updates an existing entity
router.put('/:id', (req, res) => {
    res.json({message:"Update specific task"});
});

// DELETE /tasks/:id - deletes specific entity
router.delete('/:id', (req, res) => {
    res.json({message:"Delete specific tasks"});
});

export default router;
