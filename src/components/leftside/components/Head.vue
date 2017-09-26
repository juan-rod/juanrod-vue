<template>
  <div>
    <div class="headshot-container col-12">
      <!-- <div class="headshot-details">
      </div> -->
        <img class="left" src="../../../assets/jrodheadshot.png">
        <img class="right" src="../../../assets/jrodheadshot.png">
        <img class="left" src="../../../assets/jrodheadshot.png">
        <img class="right" src="../../../assets/jrodheadshot.png">
        <img class="left" src="../../../assets/jrodheadshot.png">
        <img class="right" src="../../../assets/jrodheadshot.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'headshot',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .headshot-container{
    position: absolute;
    /*z-index: 100;*/
    height: 700px;
    overflow: scroll;
  }
  .headshot-container .left{
    width:50%;
    position: relative;
    top:-186px;
    -ms-transform: rotate(-20deg); /* IE 9 */
    -webkit-transform: rotate(-20deg); /* Safari */
    transform: rotate(-20deg);
  }
  .headshot-container .right{
    width:50%;
    position: relative;
    top:-186px;
    -ms-transform: rotate(20deg); /* IE 9 */
    -webkit-transform: rotate(20deg); /* Safari */
    transform: rotate(20deg);
  }
  .headshot-details{
    border:1px dotted pink;
    height: 200px;
    position: relative;
    /*text-align: right;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;*/
  }
 
</style>
