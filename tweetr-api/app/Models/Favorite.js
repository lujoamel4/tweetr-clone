'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {

    /**
     * A tweet can have multiple favorites, while a single favorite 
     * is for a particular tweet. This is a one-to-many relationship. 
     */
    tweet () {
        return this.belongsTo('App/Models/Tweet')
    }

    /**
     * A `user` can like multiple `tweets`,
     * while a single `favorite` is by a particular `user`.
     * This is a one-to-many relationship.
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Favorite
