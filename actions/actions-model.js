const db = require('../data/dbConfig.js');

module.exports = {
  addAction
};

function findById(id) {
  return db('actions')
    .where({ id })
    .first();
}

function addAction(actions) {
  return db('actions')
    .insert(actions)
    .then(ids => {
      return findById(ids[0]);
    });
}

// function getAction(id) {
//   return db('actions')
//     .innerJoin('actions', 'projects.id', '=', 'actions.project_id')
//     .select(
//       'actions.id',
//       'actions.description',
//       'actions.notes',
//       'actions.completed'
//     )
//     .where({ 'actions.project_id': id })
//     .then(actions => {
//       return db('projects')
//         .where({ id })
//         .first()
//         .then(project => {
//           return { ...project, actions };
//         });
//     });
// }
