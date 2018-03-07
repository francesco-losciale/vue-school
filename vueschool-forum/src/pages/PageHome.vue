<template>

  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>

import sourceData from '@/data' // @ is an alias defined in webpack.base.conf.js

import ThreadList from '@/components/ThreadList'

console.log(sourceData)

export default {
  components: { // used to register the components inside another
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
