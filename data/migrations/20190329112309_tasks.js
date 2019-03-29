exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.text('description', 255).notNullable();
      tbl.boolean('completed').notNullable();
    })
    .createTable('actions', tbl => {
      tbl.increments();
      tbl.text('description', 255).notNullable();
      tbl.text('notes');
      tbl.boolean('completed').notNullable();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {};
