const express = require('express');
const path    = require('path');
const fs      = require('fs');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Serve static assets (CSS, fonts, etc.) ──────────────────
app.use(express.static(path.join(__dirname)));

// ── GET / → index.html ──────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── GET /questions.json → quiz data ─────────────────────────
app.get('/questions.json', (req, res) => {
  const filePath = path.join(__dirname, 'questions.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Could not read questions.json:', err.message);
      return res.status(500).json({ error: 'Failed to load questions.' });
    }

    try {
      const json = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache'); // always serve fresh data
      res.json(json);
    } catch (parseErr) {
      console.error('questions.json is not valid JSON:', parseErr.message);
      res.status(500).json({ error: 'questions.json contains invalid JSON.' });
    }
  });
});

// ── 404 fallback ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send('404 — Not found');
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  🎯  Quiz server running at http://localhost:${PORT}\n`);
});
