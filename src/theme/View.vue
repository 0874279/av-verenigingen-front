<template>
  <div class="column is-one-third">
    <div class="card">
        <header class="card-header">
          <p id="club" class="card-header-title"></p>
        </header>
      <div class="card-content">
        <div class="content">
        <p id="level"></p>
        <p id="district"></p>
        <p id="_id"></p>
        </div>
        <footer class="card-footer">
          <router-link class="card-footer-item" :to="{ path: '/' }">Terug</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    created () {
      let _id = this.$route.params._id
      if (_id === undefined) {
        this.$router.push('/')
      } else {
        axios.get('http://localhost:8000/api/clubs/' + _id)
          .then(response => {
          // JSON responses are automatically parsed.
            this.post = response.data
            console.log(this.post.club)
            document.getElementById('club').innerHTML = 'Team: ' + this.post.club + ' ' + this.post.team
            document.getElementById('level').innerHTML = 'Niveau: ' + this.post.level
            document.getElementById('district').innerHTML = 'District: ' + this.post.district
            document.getElementById('_id').innerHTML = 'ID: ' + _id
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    data () {
      return {
        team: '',
        club: '',
        level: '',
        district: '',
        errors: []
      }
    }
  }
</script>
