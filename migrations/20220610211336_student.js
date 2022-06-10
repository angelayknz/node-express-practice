/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('student', (table) => {
    table.increments().primary //automatic primary key
    table.string('name') //255 char
    table.text('bio') //long text, unlimited
    table.date('dob')
    table.boolean('isCompleted')
    table.integer('height')
    table.decimal('rating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('student')
}
