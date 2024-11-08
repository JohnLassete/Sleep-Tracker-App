// routes/sleep.js
const express = require('express');
const router = express.Router();
const SleepEntry = require('../models/SleepEntry');

// Add a sleep entry
router.post('/add', async (req, res) => {
  const { userId, sleepStart, sleepEnd, quality } = req.body;
  const duration = (new Date(sleepEnd) - new Date(sleepStart)) / 3600000;
  const entry = new SleepEntry({ userId, sleepStart, sleepEnd, duration, quality });
  
  try {
    await entry.save();
    res.json({ message: 'Sleep entry saved', entry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all sleep entries
router.get('/:userId', async (req, res) => {
  try {
    const entries = await SleepEntry.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
