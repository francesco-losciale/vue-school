<template>
  <div id="wrapper">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app' // no particular purpose, just the name of the App component
}
</script>

<style>

@import "assets/css/style.css";

/* @import "~bootstrap/css/bootstrap.css"; /* tilde used to import css from node module */

</style>
