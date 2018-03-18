<template>

  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ForumList :forums="forums" />
  </div>
</template>

<script>
import sourceData from '@/data' // @ is an alias defined in webpack.base.conf.js
import ForumList from '@/components/ForumList'
console.log(sourceData)
export default {
  components: { // used to register the components inside another
    ForumList
  },
  data () {
    return {
      forums: Object.values(sourceData.forums),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
