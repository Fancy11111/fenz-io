const express = require('express');
const app = express();

app.use(express.static('src/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(8081, () => console.log('Dev-Server running on 8080'));
