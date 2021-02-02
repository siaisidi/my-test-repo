const { sum, getRandomInt } = require('./math');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const rnd1 = getRandomInt(50);
  const rnd2 = getRandomInt(50);
  const result = sum(rnd1, rnd2);

  res.send(`Hi, did you know that ${rnd1} + ${rnd2} = ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
