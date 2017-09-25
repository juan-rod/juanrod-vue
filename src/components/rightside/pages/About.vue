<template>
  <div>
    <div class="about-container col-12">
      <div class="row">
        <div class="about-details col-12">
          <p>I specialize in Front End Development</p>
          <div>
            <p>HTML5 | CSS3 | JavaScript</p>
            <p>Vue.js | AngularJS 1.5 | Firebase</p>
            <p>Sketch | Git </p>
          </div>
          <p> 
            <span> adaptable.</span> 
            <span> diligent.</span> 
            <span> intuitive.</span>
          </p>
          <a href="mailto:juan.j.rodriguez2@gmail.com?Subject=Hey%20Juan" target="_top"><p class="link-box">Let's Chat! </p></a>
        </div>
        

      </div>
        <!-- <span>rightside</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .about-container{
    background: rgba(255, 255, 255, 1);
    margin: 0 25px;
    height: 450px;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  .about-details{
    text-align: right;
    padding-top: 12%;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;
  }
  .about-details div{
    font-size: .8em;
    margin: 4% 0;
  }
  .about-details p span{
    /*border:3px solid black;
    border-style: inset;
    padding:1%;*/
  }
  .about-details p span:hover{

    /*border:1px solid blue;*/
    text-shadow: 2px 2px 0px rgba(150, 150, 150, 1);
    /*transition: all .5s ease-in;*/
  }
  .about-details a{
    color: inherit;
    text-decoration: none;
  }
  .about-details a p{
    margin-top: 5%;

  }
   .about-details a:hover{
    color: pink;
  }
  .link-box:hover{
    background-color: #2c3e50;
  }
 
</style>
