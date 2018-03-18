<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}"> {{category.name}}</router-link>
    </h2>
    <ForumList :forums="categoryForums" :categoryName="category.name" />  
  </div>
</template>
<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data'
export default {
  components: {
    ForumList
  },
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  computed: {
    categoryForums () {
      return Object.keys(this.category.forums).map(forumId => { return sourceData.forums[forumId] })
    }
  }
}
</script>
