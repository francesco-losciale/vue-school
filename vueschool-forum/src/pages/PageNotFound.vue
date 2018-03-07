<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style['heading-large']">Not Found</h1>

    <p :class="$style.textLarge">Ops, we couldn't find what you're looking for. Why don't you 
    <router-link :to="{name: 'Home'}">
        go home instead
    </router-link>
    ?
    </p>
  </div>
</template>


<script>


</script>

<style module> /* module creates the special property $style - it prevents from creating conflicts */

/* it is strongly recommended to use class selector because it's faster than the element (ID) selector */

/* kebab case is not the best choice for class identifiers, camel case is better. 
Look at line 3 what we had to do to get the 'heading-large' class! Just because of the hypen! */
.heading-large { 
    font-size: 100px;
}

.textLarge { 
    font-size: 50px;
    font-weight: 100;
}

.centered {
    text-align: center
}



/* 
<style scoped> // inspect the elements to see how the scoped styles work 
h1 {
    font-size: 100px;
}

// CSS defined here doesn't remove the rules defined in the global scope - doesn't overwrite them. 
// In fact, look at style.css, the '.text-large' is already defined there. 
// All the rules under the '.text-large' defined there are inherited and applied to the paragraph element. 
// Please BE CAREFUL, although you use scoped css, this is the way you could get conflicts from global styles!
.text-large { 
    font-size: 50px;
    font-weight: 100;
}

div {
    text-align: center
}
*/


</style>

