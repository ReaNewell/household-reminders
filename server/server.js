const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'public');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// The MongoDB Database
const dbRoute = "";
// Connects the backend to the database
if (dbRoute) {
    mongoose.connect(dbRoute, { useNewUrlParser: true, useCreateIndex: true  });
    let db = mongoose.connection;
    db.once('open', () => console.log("Connected to the database."));
} else {
    console.log("No database route to connect to.")
}


app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});