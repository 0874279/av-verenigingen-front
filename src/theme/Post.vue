<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <footer class="card-footer">
      <router-link class="card-footer-item" :to="{ name: 'view', params: { _id: link }}">Meer info</router-link>
      <router-link class="card-footer-item" :to="{ name: 'edit', params: { _id: link }}">Aanpassen</router-link>
    </footer>
  </div>
</template>

<script>
  // import axios from 'axios'

  export default {
    props: ['link'],
    methods: {
    }
  }
</script>

<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>
