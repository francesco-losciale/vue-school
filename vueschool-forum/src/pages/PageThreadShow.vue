<template>

  <div>
    <div class="col-large push-top">


    <h1>{{thread.title}}</h1>

    <PostList :posts="posts" />

    <PostEditor @save="save" :threadId="id" />

    </div>
  </div>
</template>
  
  
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
export default {
  components: {
    PostList,
    PostEditor
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
  },
  methods: {
    save (eventData) {
      const post = eventData.post
      const postId = eventData.post['.key']

      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, post['.key'])
      this.$set(sourceData.users[post.userId].posts, postId, post['.key'])
    }
  }
}
</script>