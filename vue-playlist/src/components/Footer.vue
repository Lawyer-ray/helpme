<template>
  <footer>

    <p>{{title}}</p>
    <p v-for="user in users">{{user.name}}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props: ['title'],
    data () {
      return {
        copyright: 'Copyright 2021 Vue Demo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: #222;
    padding: 6px;

    text-align: center;
  }
  footer p{
    color: lightgreen;
    text-align: center;

  }
</style>
