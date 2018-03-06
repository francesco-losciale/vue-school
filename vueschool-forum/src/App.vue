<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

const testVar = 23

export default {
  name: 'app'
}
</script>

<style>

@import "assets/css/style.css";

/* @import "~bootstrap/css/bootstrap.css"; /* tilde used to import css from node module */

</style>
