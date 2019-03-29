const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProject
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return findById(ids[0]);
    });
}

function getProject(id) {
  return db('projects')
    .innerJoin('actions', 'projects.id', '=', 'actions.project_id')
    .select(
      'actions.id',
      'actions.description',
      'actions.notes',
      'actions.completed'
    )
    .where({ 'actions.project_id': id })
    .then(actions => {
      return db('projects')
        .where({ id })
        .first()
        .then(project => {
          return { ...project, actions };
        });
    });
}
