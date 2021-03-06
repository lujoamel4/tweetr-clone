import Vue from 'vue'
import Router from 'vue-router'
import SignUpForm from '@/components/Auth/SignUpForm'
import LogInForm from '@/components/Auth/LogInForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings from '@/components/User/Settings/UserPasswordSettings'
import Home from '@/components/Home'
import SingleTweet from '@/components/Tweet/SingleTweet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:username/status/:id',
      component: SingleTweet,
      props: true
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/settings/password',
      component: UserPasswordSettings
    },
    {
      path: '/settings/profile',
      component: UserProfileSettings
    },
    {
      path: '/signup',
      component: SignUpForm
    },
    {
      path: '/login',
      component: LogInForm
    }
  ]
})
