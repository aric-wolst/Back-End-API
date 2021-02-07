const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const user = require("./routes/api/user");
const domain = require("./routes/api/domain");
const activity = require("./routes/api/activity");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Securify', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use("/user", user);
app.use("/domain", domain);
app.use("/activity", activity);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});