<template>
  <div class="column is-one-third">
    <div class="card">
        <header class="card-header">
          <p id="club" class="card-header-title">Nieuw team toevoegen</p>
        </header>
      <form class="" method="post" @submit.prevent="clubPost">
        <input class="input" type="text" required placeholder="Team" name="postTeam" value="" v-model="postTeam">
        <input class="input" type="text" required placeholder="Club" name="postClub" value="" v-model="postClub">
        <input class="input" type="text" required placeholder="Niveau" name="postLevel" value="" v-model="postLevel">
        <input class="input" type="text" required placeholder="District" name="postDistrict" value="" v-model="postDistrict">
        <footer class="card-footer">
          <button type="submit" class="button is-medium" name="button">Opslaan</button>
          <router-link class="card-footer-item" :to="{ path: '/' }">Terug</router-link>
    </footer>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      postTeam: '',
      postClub: '',
      postLevel: '',
      postDistrict: '',
      errors: []
    }
  },
  methods: {
  // Pushes posts to the server when called.
    clubPost () {
      console.log('Trying to post')
      axios.post(`http://localhost:8000/api/clubs/`, {
        team: this.postTeam,
        club: this.postClub,
        level: this.postLevel,
        district: this.postDistrict,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          this.posts = response.data
          this.$router.push('/')
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
