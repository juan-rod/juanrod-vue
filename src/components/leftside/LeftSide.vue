<template>
  <div>
    <div class="left-side-container">
      <profile></profile>
      <!-- <social></social> -->
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Social from './components/Social.vue'
export default {
  name: 'Left-Side',
  components: { Profile, Social },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-side-container{
    background: #eee;
    height:100%;
  }

</style>
