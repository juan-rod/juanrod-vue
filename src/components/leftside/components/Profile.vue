<template>
  <div style="height:0">
    <div class="profile-div col-12">
      <h2>Juan Rodriguez</h2>
    </div>
    <div class="profile-div col-12">
      <h4>Front End Developer</h4>
    </div>
    <div class="profile-div col-12">
      <h6>AUSTIN | TX</h6>
    </div>
    <div class="profile-div col-12">
      <a href="https://www.linkedin.com/in/juanrod1"><span class="fa fa-linkedin-square"></span></a>
      <a href="https://github.com/juan-rod"><span class="fa fa-github-square"></span></a>
      <a href="mailto:juan.j.rodriguez2@gmail.com?Subject=Hey%20Juan" target="_top"><span class="fa fa-envelope-o"></span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .profile-div{
    background: rgba(255, 255, 255, 1);
    /*margin: 0 25px;*/
    /*height: 450px;*/
    position: relative;
    top: 67vh;
    z-index: 100;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  .profile-div span{
    font-size: .8em;
  }
  .profile-div a{
    text-decoration: none;
    color: pink;
  }
  .profile-details{
    text-align: right;
    padding-top: 12%;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;
  }
 
</style>
