require('dotenv').config({ path: '.env' });
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const data = await pool.query('SELECT account_number, name, amount, type, credit_limit, daily_withdrawn FROM accounts ORDER BY account_number');
    res.json(data.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.use(bodyParser.json()); 

app.post('/update-account', async (req, res) => {
  const { accountNumber, amount } = req.body;
  try {
    const updateQuery = 'UPDATE accounts SET amount = amount + $1 WHERE account_number = $2';
    const results = await pool.query(updateQuery, [amount, accountNumber]);
    if (results.rowCount > 0) { 
      res.send(`Account ${accountNumber} updated successfully.`);
    } else {
      res.status(404).send('Account not found.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/withdraw-account', async (req, res) => {
  const { accountNumber, amount, dailyWithdrawn } = req.body;
  try {
    const updateQuery = 'UPDATE accounts SET amount = amount + $1, daily_withdrawn = $3 WHERE account_number = $2';
    const results = await pool.query(updateQuery, [amount, accountNumber, dailyWithdrawn]);
    if (results.rowCount > 0) { 
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
