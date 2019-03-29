exports.seed = function(knex, Promise) {
  return knex('actions').insert([
    {
      description: 'Learn to code in React',
      notes: 'Spend 4 weeks in Lambda School learning React',
      completed: 'True',
      project_id: '1'
    },
    {
      description: 'Build Week 1',
      notes: 'Spend 1 week in Lambda School building in React',
      completed: 'True',
      project_id: '1'
    },
    {
      description: 'Learn to code in HTML',
      notes: 'Spend 4 weeks in Lambda School learning HTML',
      completed: 'True',
      project_id: '2'
    },
    {
      description: 'Build Week 2',
      notes: 'Spend 1 week in Lambda School building in HTML',
      completed: 'True',
      project_id: '2'
    },
    {
      description: 'Learn to code in SQL',
      notes: 'Spend 4 weeks in Lambda School learning SQL',
      completed: 'False',
      project_id: '3'
    },
    {
      description: 'Build Week 3',
      notes: 'Spend 1 week in Lambda School building in SQL',
      completed: 'False',
      project_id: '3'
    }
  ]);
};
