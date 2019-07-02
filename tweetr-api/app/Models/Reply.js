'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reply extends Model {
    
    /**
     * A user can reply multiple times to a tweet, while a single reply can only
     *  belongs to a particular user. This is a one-to-many relationship.
     */
    user () {
        return this.belongsTo('App/Models/User')
    }

    /**
     * A tweet can have multiple replies, while a single reply
     * can only belongs to a particular tweet. 
     * This is a one-to-many relationship. 
     */
    tweet() {
        return this.belongsTo('App/Models/Tweet')
    }
}

module.exports = Reply
