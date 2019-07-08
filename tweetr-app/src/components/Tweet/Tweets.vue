<template>
  <div class="ui feed">
    <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import EventBus from '@/eventBus'
import Tweet from '@/components/Tweet/Tweet'

export default {
  name: 'Tweets',
  components: {
    Tweet
  },
  props: {
    tweets: {
      type: Array,
      required: true
    },
    authUser: {
      type: Object,
      required: true
    }
  },
  created () {
    // listen for event fired
    EventBus.$on('tweetAdded', this.fetchAddedTweet)
  },
  methods: {
    fetchAddedTweet (tweet) {
      //  add tweet to top of the tweets
      this.tweets.unshift(tweet)
    }
  }
}
</script>
