'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowersSchema extends Schema {
  up () {
    this.table('followers', (table) => {
      // alter table
    })
  }

  down () {
    this.table('followers', (table) => {
      // reverse alternations
    })
  }
}

module.exports = FollowersSchema
