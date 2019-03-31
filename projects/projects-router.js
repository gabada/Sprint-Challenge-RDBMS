const router = require('express').Router();
const Projects = require('./projects-model.js');

router.post('/', async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getProject(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
