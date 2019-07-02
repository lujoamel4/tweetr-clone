'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
    /**
     * A tweet can only belong to a user.
     */
    user () {
        return this.belongsTo('App/Models/User')
    }

    /**
     * A tweet can have multiple replies, while a single reply
     * can only belongs to a particular tweet. 
     * This is a one-to-many relationship. 
     */
    replies() {
        return this.hasMany('App/Models/Reply')
    }

    /**
     * A tweet can have multiple favorites, while a single favorite 
     * is for a particular tweet. This is a one-to-many relationship. 
     */
    favorites() {
        return this.hasMany('App/Models/Favorite')
    }

}

module.exports = Tweet
