<template>

    <div class="thread">
        <div>
            <p>
                <!-- <a :href="`/thread/${thread['.key']}`">{{thread.title}}</a> -->

                <!-- <router-link :to="`/thread/${thread['.key']}`">
                    {{thread.title}}
                </router-link> -->

                <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
                    {{thread.title}}
                </router-link>

            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}</a>, {{thread.publishedAt}}.
            </p>
        </div>

        <div class="activity">
            <p class="replies-count">
                {{repliesCount}} replies
            </p>

            <!-- <img class="avatar-medium" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt=""> -->

            <!-- <div>
                <p class="text-xsmall">
                    <a href="#">Bruce Wayne</a>
                </p>
                <p class="text-xsmall text-faded">2 hours ago</p>
            </div> -->
        </div>
    </div>

</template>


<script>
import dataSource from '@/data'

export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  // computed properties are computed functions that perform calculation
  // or transformation that re-evaluate every time a dependency changes.
  // (NOT used for actions such as POST, value changes, etc that have side-effects)
  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1
    },
    user () {
      return dataSource.users[this.thread.userId]
    }
  }
}
</script>