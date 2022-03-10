import express from "express";
import users from "./routes/users.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use('/users', users)



app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})