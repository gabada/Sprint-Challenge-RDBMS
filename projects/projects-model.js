const db = require('../data/dbConfig.js');

module.exports = {
  getProject
};

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
