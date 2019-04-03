const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => console.log('Dev-Server running on 8080'));
