<template>
  <div>
    <div class="now-container col-12">
      <div class="row">
        <div class="now-details col-12">
          <p>Working on various personal projects</p>
          <p>Side biz, Pride Austin Newsletter, PrideInTexas</p>
            <a href="http://lovelyfaceuglycity.com" target="_blank">
          <p class="link-box"> 
            <span>
              Lovelyfaceuglycity.com
            </span>
          </p>
            </a>
          <p>Joined the Austin Pride Board of Directors | Director of Technology &#x1F308</p>
          <p>Currently &#x1F4D6 | The Fall of Hyperion x Dan Simmons</p>
          <p>Currently &#x1F3A7 | What Happened x Hillary Clinton</p>
          <br>
          <br>
          <small style="float: right">Updated Sept 16, 2017</small>
        </div>
        

      </div>
        <!-- <span>rightside</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'now',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .now-container{
    background: rgba(255, 255, 255, 1);
    margin: 0 25px;
    height: 450px;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  .now-details{
    text-align: right;
    padding-top: 12%;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;
  }
  .now-details a{
    color: inherit;
    text-decoration: none;
  }
   .now-details a:hover{
    color: pink;
  }
  .link-box:hover{
    background-color: #2c3e50;
  }
 
</style>
