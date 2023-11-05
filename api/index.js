const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from any origin during development
app.use(cors());

app.use(express.json());

app.get('/api/transaction', (req, res) => {
    res.json({ body: 'test ok33335' });
});

app.post('/api/test', (req, res) => {
    res.json(req.body);
});

app.listen(4020); 