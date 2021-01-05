<template>
  <header>
    <h1>{{ title1 }}</h1>
    <h2 @click="changeTitle">{{title}}</h2>

  </header>
</template>

<script>
  export default {
    name: 'app-header',
    props: ['title'],
    data () {
      return {
        title1: 'Vue.js Demo'
      }
    },
    methods:{
      changeTitle(){
        // this.title = '我被更改啦'
        this.$emit('titleChange', '子向父组件传值',)
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;

  }
</style>
