
exports.up = function (knex) {
    return knex.schema.createTable('cases', function (table) {
        table.increments()
        table.string('fish').notNullable()
        table.string('description').notNullable()
        table.timestamp('date').notNullable()
        table.decimal('latitude', 9, 6).notNullable()
        table.decimal('longitude', 9, 6).notNullable()

        table.string('author').notNullable()
        table.foreign('author').references('userId').inTable('users')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cases')
};
