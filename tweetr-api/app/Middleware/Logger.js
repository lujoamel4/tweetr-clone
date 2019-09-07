'use strict'

const Logger = use('Logger')


class Log {
    async handle({request}, next){
        Logger.info('request url is %s', request.url())
        // Logger.info('user %s', auth.user.username())
        
        // Logger.info('request details %j', {
        //     url: request.url(),
        //     user: auth.user.username()
        // })
        await next()
    }
}

module.exports = Log
