<template>
  <div>
    <div class="left-side-container">
      <profile></profile>
      <head-shot></head-shot>
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import HeadShot from './components/Head.vue'
export default {
  name: 'Left-Side',
  components: { Profile, HeadShot },
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
    padding: 0 2%;
  }

</style>
