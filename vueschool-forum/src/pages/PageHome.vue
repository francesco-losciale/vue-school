<template>

  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import sourceData from '@/data' // @ is an alias defined in webpack.base.conf.js
import CategoryList from '@/components/CategoryList'
console.log(sourceData)
export default {
  components: { // used to register the components inside another
    CategoryList
  },
  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  }
}
</script>
