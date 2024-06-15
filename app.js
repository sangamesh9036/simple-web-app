// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, Jenkins!'));

app.listen(port, () => console.log(`App listening at http:////13.60.32.169:${port}`));

