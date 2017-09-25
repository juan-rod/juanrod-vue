<template>
  <div>
    <div class="right-side-container col-12">
        <nav-bar></nav-bar>
        <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
        </transition>
        <!-- <span>rightside</span> -->
    </div>
  </div>
</template>

<script>
import NavBar from './Nav.vue'
export default {
  name: 'right-side',
  components: { NavBar },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right-side-container{
    background: #eee;
    height:100%;
  }

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-200px);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translateY(600px);
  /*opacity: 0;*/
}
</style>
