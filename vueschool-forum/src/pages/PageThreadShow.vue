<template>

  <div>
    <div class="col-large push-top">


    <h1>{{thread.title}}</h1>

    <PostList :posts="posts" />


    </div>
  </div>
</template>
  
  
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
export default {
  components: {
    PostList
  },
  // props is used from parent component to pass values to child components
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: sourceData.threads[this.id] // thread: sourceData.threads[this.$route.params.id], // coupled
    }
  },
  computed: {
    posts () {
      const postIds = Object.keys(this.thread.posts)
      return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']))
    }
  }
}
</script>