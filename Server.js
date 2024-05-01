const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
