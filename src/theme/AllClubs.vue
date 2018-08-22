<template>
  <div class="columns">
      <div class="column is-one-third" v-for="(post) in posts" v-bind:key="post.id">
        <app-post :link="post._id">
          <h3 slot="title">{{ post.club + " " + post.team }}</h3>
          <span slot="content">{{ post.level }}</span>
        </app-post>
      </div>
    </div>
</template>
<script>
  import Post from './Post.vue'
  import Edit from './Edit.vue'
  import axios from 'axios'
  export default {
    components: {
      'app-post': Post,
      'app-edit': Edit
    },
    data () {
      return {
        id: this.$route.params.id,
        posts: [],
        errors: []
      }
    },
    created () {
      axios.get('http://localhost:8000/api/clubs/')
        .then(response => {
        // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
