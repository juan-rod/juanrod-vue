<template>
  <div>
    <div class="social-container col-12">
      <div class="social-details">
        <span>
          <a href="">
            <p>Github</p>
          </a>
          <a href="">
            <p>LinkedIn</p>
          </a>
          <a href="">
            <p>Email</p>

            <!-- <img src="../../../assets/britney_email.gif"> -->
          </a>

        </span>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .social-container{
    background: rgba(255, 255, 255, 1);
    margin: 0 25px;
    /*height: 450px;*/
    position: relative;
    top: 69vh;
    z-index: 100;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  .social-details{
    text-align: right;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;
  }
 
</style>
