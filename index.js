const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const router = require("./routes/todoRoutes");
const live_url 
= "mongodb://dev_basit:dev_basit3246@ac-0atwhx1-shard-00-00.23iawig.mongodb.net:27017,ac-0atwhx1-shard-00-01.23iawig.mongodb.net:27017,ac-0atwhx1-shard-00-02.23iawig.mongodb.net:27017/?ssl=true&replicaSet=atlas-wh4yua-shard-0&authSource=admin&appName=Cluster0 ";
const local_url = "mongodb://localhost:27017/AuthenticationDB";

mongoose
.connect(live_url)
.then(() => console.log ("MongoDB connected"))
.catch((err)=> console.error("Connection Error: ", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get("/", (req, res)=>{
    res.send('hello world');
});
const port = 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});