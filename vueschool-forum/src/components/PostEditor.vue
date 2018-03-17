<template>

    <form @submit.prevent="save">
      <div class="form-group">
        <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10" 
        class="form-input" 
        v-model="text"
        > 
        </textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>

</template>

<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'great-post' + Math.random()
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'L664y3qZSubDbT1R6npC0EEybJ73',
        '.key': postId
      }

      // used ES5 shorthand for passing this { post: post, author: author }
      // because key has the same name of the value
      this.$emit('save', { post })
      this.text = ''
    }
  }
}
</script>


<style scoped>

</style>