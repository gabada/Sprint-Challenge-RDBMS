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
