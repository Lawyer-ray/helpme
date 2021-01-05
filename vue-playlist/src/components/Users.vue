<template>
  <div class="users">
    <ul>
      <h1><li v-for="user in users5">
        <h2 v-if="user.show">
          My name is {{user.name}} and position is {{user.position}}
        </h2>
      </li></h1>
    </ul>
    <button @click="deleteUser">删除</button>
  </div>
</template>

<script>
  export default {
    name: 'users',
    // props:['users5'],
    props:{
      users5: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
      }
    },
    methods:{
      deleteUser(){
        this.users5.pop()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: deeppink;
    box-sizing: border-box;
  }
</style>
