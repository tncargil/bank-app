const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'challenge',
  password: 'password',
  port: 5432,
});

app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const data = await pool.query('SELECT account_number, name, amount FROM accounts ORDER BY account_number');
    res.json(data.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.use(bodyParser.json()); // Ensure Express can parse JSON request bodies

app.post('/update-account', async (req, res) => {
  const { accountNumber, amount } = req.body;
  try {
    const updateQuery = 'UPDATE accounts SET amount = amount + $1 WHERE account_number = $2';
    const results = await pool.query(updateQuery, [amount, accountNumber]);
    if (results.rowCount > 0) { // rowCount will be the number of rows affected
      res.send(`Account ${accountNumber} updated successfully.`);
    } else {
      res.status(404).send('Account not found.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
