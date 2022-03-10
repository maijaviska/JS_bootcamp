import express from "express";
const app = express();
const port = 8080;

app.get('/kitty', (req, res) => {
    res.send('Hello from kitty land!');
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})