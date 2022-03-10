import express from "express";
import tasks from "./routes/tasks.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000; // 8080, 8081

app.use(bodyParser.json())
app.use('/tasks', tasks)



app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});