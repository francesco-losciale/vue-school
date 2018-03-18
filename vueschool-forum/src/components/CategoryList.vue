<template>
  <div>
    <CategoryListItem v-for="category in categories" v-bind:key="category['.key']" :category="category" />
  </div>
</template>


<script>
import CategoryListItem from '@/components/CategoryListItem'
export default {
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>
