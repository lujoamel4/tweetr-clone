'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A `user` can post as many `tweets` as he/she wants.
   */
  tweets () {
    return this.hasMany('App/Models/Tweet')
  }

  /**
   * A `user` can have many `followers` and the `user` can `follow many users` also.
   * This is a many-to-many relationship.
   */
  followers () {
    return this.belongsToMany(
        'App/Models/User',
        'user_id',
        'follower_id'
    ).pivotTable('followers')

  }

  /**
   * A `user` can have many `followers` and the `user` can `follow many users` also.
   * This is a many-to-many relationship.
   */
  following () {
    return this.belongsToMany(
        'App/Models/User',
        'follower_id',
        'user_id'
    ).pivotTable('followers')
  }

  /**
   * A `user` can `reply` multiple times to a tweet, while a single `reply` can only
   *  belongs to a particular `user`. This is a one-to-many relationship.
   */
  replies () {
    return this.hasMany('App/Models/Reply')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * A `user` can like multiple `tweets`,
   * while a single `favorite` is by a particular `user`.
   * This is a one-to-many relationship.
   */
  favorites () {
    return this.hasMany('App/Models/Favorite')
  }


  
}

module.exports = User
