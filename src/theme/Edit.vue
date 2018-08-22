<template>
  <div class="column is-one-third">
    <div class="card">
        <header class="card-header">
          <p id="club" class="card-header-title">Team wijzigen</p>
        </header>
      <form class="" method="post" @submit.prevent="clubEdit">
        <input class="input" type="text" required name="editTeam" id="editTeam" v-model="editTeam">
        <input class="input" type="text" required name="editClub" id="editClub" v-model="editClub">
        <input class="input" type="text" required name="editLevel" id="editLevel" v-model="editLevel">
        <input class="input" type="text" required name="editDistrict" id="editDistrict" v-model="editDistrict">
      <footer class="card-footer">
        <button class="button is-medium" type="submit" name="button">Opslaan</button>
        <router-link class="card-footer-item" :to="{ path: '/' }">Terug</router-link>
        <button  class="button is-danger is-medium" @click="deleteTeam()">Verwijderen</button>
      </footer>
      </form>
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    created () {
      let _id = this.$route.params._id
      console.log(_id)
      if (_id === undefined) {
        this.$router.push('/')
      } else {
        axios.get('http://localhost:8000/api/clubs/' + _id)
          .then(response => {
          // JSON responses are automatically parsed.
            this.post = response.data
            document.getElementById('editTeam').placeholder = this.post.team
            document.getElementById('editClub').placeholder = this.post.club
            document.getElementById('editLevel').placeholder = this.post.level
            document.getElementById('editDistrict').placeholder = this.post.district
            // document.getElementById('editTeam').value = this.post.team
            // document.getElementById('editClub').value = this.post.club
            // document.getElementById('editLevel').value = this.post.level
            // document.getElementById('editDistrict').value = this.post.district
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    data () {
      return {
        editTeam: '',
        editClub: '',
        editLevel: '',
        editDistrict: '',
        errors: []
      }
    },

    methods: {
      clubEdit () {
        let _id = this.$route.params._id
        axios.put(`http://localhost:8000/api/clubs/` + _id, {
          team: this.editTeam,
          club: this.editClub,
          level: this.editLevel,
          district: this.editDistrict,
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
      },
      deleteTeam () {
        let _id = this.$route.params._id
        axios.delete('http://localhost:8000/api/clubs/' + _id)
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
