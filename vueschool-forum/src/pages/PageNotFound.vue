<template>
  <div class="col-full">
    <h1>Not Found</h1>

    <p>Ops, we couldn't find what you're looking for. Why don't you 
    <router-link :to="{name: 'Home'}">
        go home instead
    </router-link>
    ?
    </p>
  </div>
</template>


<script>


</script>

<style scoped>

h1 {
    font-size: 100px;
}

p {
    font-size: 50px;
    font-weight: 100px;
}

div {
    text-align: center
}
</style>