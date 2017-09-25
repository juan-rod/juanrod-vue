<template>
  <div>
    <div class="timeline-container">
        <ul>
          <li>
            <div class="timeline_date">
              <span class="timeline_month">March</span>
              <span class="timeline_year">2017</span>
            </div>
            <div class="timeline_content">
              <h2>MEDIASCIENCE</h2>
              <p>Front End Developer</p>
            </div>
          </li>
          <li>
            <div class="timeline_date">
              <span class="timeline_month">March</span>
              <span class="timeline_year">2016</span>
            </div>
            <div class="timeline_content">
              <h2>DCR POINT-OF-SALES SYSTEMS</h2>
              <p>Software Developer</p>
            </div>
          </li>
          <li>
            <div class="timeline_date">
              <span class="timeline_month">July</span>
              <span class="timeline_year">2015</span>
            </div>
            <div class="timeline_content">
              <h2>NASHVILLE SOFTWARE SCHOOL</h2>
              <p>Software Developer Apprentice</p>
            </div>
          </li>
        </ul>        <!-- <span>rightside</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .timeline-container{
    background: rgba(255, 255, 255, 1);
    margin: 0 25px;
    height: 450px;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  ul{
    list-style: none;
    margin: 0 auto;
    padding: 80px 10px;
    max-width: 570px;
    text-align: center;
    max-height: 450px;
    overflow: scroll;
  }
  ul li{
    color:#FFF;
  }
  .timeline_date{
    width: 66px;
    height: 66px;
    border-radius: 33px;
    background: rgb(119, 119, 119);
    padding: 3px;
    background-clip: content-box;
    text-align: center;
    border: 1px solid rgb(119, 119, 119);
    color:#fff;
    float: left;
    margin: 2px 20px 0;
  }
  .timeline_month{
    margin-top: 11px;
    display: block;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
  }
  .timeline_year{
    display: block;
    font-weight: 500;
    font-size: 15px;
  }

  .timeline_content{
    padding-top: 6px;
    text-align: left;
  }
  .timeline_content h2{
    font-size: 26px;
    color:red;
  }
  .timeline_content p{
    font-size: 14px;
    font-weight: 500;
    margin: 3px 0 0;
    opacity: .6;
    color:blue;
  }

 /* p:nth-last-child(1)::after{
  content:'';
  display:none;
  };*/
  .timeline_content p::after{
  content: '';
  display: block;
  height: 100px;
  width: 1px;
  background: blue;
  margin-left: 53px;
  }

 
</style>
