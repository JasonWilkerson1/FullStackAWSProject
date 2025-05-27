const express = require('express');
const router = express.Router();
const { getAssets, createAsset, deleteAsset } = require('../services/dynamodb');

// GET /assets
router.get('/', async (req, res) => {
  try {
    const assets = await getAssets();
    res.json(assets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assets' });
  }
});

// POST /assets
router.post('/', async (req, res) => {
  const { name, type, status, notes } = req.body;
  if (!name || !type || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const asset = await createAsset({ name, type, status, notes });
    res.status(201).json(asset);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create asset' });
  }
});

// DELETE /assets/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteAsset(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete asset' });
  }
});

module.exports = router;