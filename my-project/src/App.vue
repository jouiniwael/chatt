<template>
  <div id="app">
    
    
 <router-view>
  <home/>
 </router-view>
  </div>
  
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed :mapGetters(['getSocket'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
