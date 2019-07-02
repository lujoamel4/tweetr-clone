'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/** Registration */
Route.post('/signup', 'UserController.signup')
Route.post('/login', 'UserController.login')

/** Users */
Route.group(() => {
    Route.get('/users_to_follow', 'UserController.usersToFollow')
    Route.post('/follow/:id', 'UserController.follow')
    Route.delete('/unfollow/:id', 'UserController.unFollow')
    Route.get('/timeline', 'UserController.timeline')
})
    .prefix('users')
    .middleware(['auth:jwt'])

/** Account */
/** We add the auth middleware to make sure only authenticated users view user profiles */
Route.group(() => {
  Route.get('/me', 'UserController.me')
  Route.put('/update_profile', 'UserController.updateProfile')
  Route.put('/change_password', 'UserController.changePassword')
  Route.get(':username', 'UserController.showProfile')
})
  .prefix('account')
  .middleware(['auth:jwt'])



/**Tweets */
/**We add the auth to make sure only authenticated users can post tweets */
Route.post('/tweet', 'TweetController.tweet').middleware(['auth:jwt'])
/** Tweets are visible for anyone */
Route.get('/tweets/:id', 'TweetController.show')
/** Only authenticated user can reply a tweet*/
Route.post('/tweets/reply/:id', 'TweetController.reply').middleware(['auth:jwt']);

Route.group(() => {
  Route.post('/create', 'FavoriteController.favorite')
  Route.delete('/destroy/:id', 'FavoriteController.unFavorite')
})
  .prefix('favorites')
  .middleware(['auth:jwt'])

Route.delete('/tweets/destroy/:id', 'TweetController.destroy').middleware(['auth:jwt'])