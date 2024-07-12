const express = require('express');
const numbersRoute = require('./routes/numbersRoute');

const app = express();
app.use(express.json());

app.use('/numbers', numbersRoute);

const port = 9876;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});