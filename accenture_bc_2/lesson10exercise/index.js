import express from "express";
const app = express();
const port = 3000;

// GET /square/{50}
app.get('/square/:number', (req, res) => {
    const maxNumber = parseInt(req.params.number)
    const numbers = [];
    for (let i = 1; i <=maxNumber; i++) {
        numbers.push(i * i);
    }

    res.json({message:"Get the numbers", numbers:numbers});
});

// GET /days-till-christmas
app.get('/days-till-christmas', (req, res) => {
    const today = new Date();
    const xmas = new Date("December 24, 2022");
    let diferenceInTime = xmas.getTime() - today.getTime();
    let differenceInDays = diferenceInTime / (1000 * 3600 * 24);
    let daysTillchristmas = Math.ceil(differenceInDays)
   

    res.json({message: `There are ${daysTillchristmas} days till christmas`});
});

// GET /is-leap-yar/{2022}
app.get('/is-leap-yar/:year', (req, res) => {
    const year = parseInt(req.params.year)
    if (((year % 4 === 0) && (year % 100 !==0)) || ((year % 400 === 0) && (year % 100 === 0))) {
        return res.json({message:`${year} is leap year`});
    } else {
        return res.json({message:`${year} is not a leap year`});
    };
       
});


app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});