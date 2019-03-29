exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { name: 'React', description: 'Learn React', completed: 'True' },
    { name: 'HTML', description: 'Learn HTML', completed: 'True' },
    { name: 'SQL', description: 'Learn SQL', completed: 'False' }
  ]);
};
