<template>
  <div>
    <div class="nav-bar-container">
      <nav class="navbar navbar-toggleable-md navbar-light">
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class=" nav-item nav-link" to="/"><span class="">Now</span></router-link>
            <router-link class=" nav-item nav-link" to="/about"><span class="">About</span></router-link>
            <router-link class=" nav-item nav-link" to="/timeline"><span class="">Timeline</span></router-link>
            <router-link class=" nav-item nav-link" to="/projects"><span class="">Projects</span></router-link>
            <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    navClick (e) {
      console.log('e : ', e)
      console.log('e.target:', e.target)
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar-container{
    position: relative;
    top: -46px;
    font-family: 'Fira Mono', monospace;
    /*background: red;*/
    /*height:100%;*/
  }
  .navbar-nav a{
    font-weight: 400;
    font-size: 1.6em;
  }
  .navbar-nav a:hover{
    background: rgba(238, 238, 238, 1);
    border-right:1px solid #4c4e4d;
    border-left:1px solid #4c4e4d;
    
  }
  .router-link-exact-active{
    position: relative;
    top: 50px;
  }
</style>
