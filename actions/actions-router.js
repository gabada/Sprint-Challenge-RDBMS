const router = require('express').Router();
const Actions = require('./actions-model.js');

router.post('/', async (req, res) => {
  try {
    const action = await Actions.addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Actions.getAction(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
