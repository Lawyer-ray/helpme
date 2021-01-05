<template>
  <div id="home">

    <app-Header v-bind:title="title" v-on:titleChange="updateTitle($event)">
    </app-Header>
    <users v-bind:users5="users2"></users>
    <users v-bind:users5="users2"></users>
    <app-Footer v-bind:title="title"></app-Footer>
  </div>
</template>


<script>

  import Users from "./Users";
  import Header from "./Header";
  import Footer from "./Footer";

  export default {
    name: 'home',
    components: {
      Users,
      'app-Header': Header,
      'app-Footer': Footer
    },

    data(){
      return {
        users2: [{name:'Henry',
          position:'Web开发',
          show: true}],
        title: '传递的是一个值, (number string)'
      }
    },
    methods:{
      updateTitle(val){
        this.title = val;
      }
    }


  }
</script>



<style scoped>
  #app{
    background: #42b983;
  }
</style>
