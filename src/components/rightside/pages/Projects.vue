<template>
  <div>
    <div class="projects-container">
      <div class="projects-details">
        <div v-for="project in projects">
          <a :href="project.link" target="_blank">
            <p class="link-box">{{project.name}} </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      projects: [
        {
          name: 'juanrod_v2',
          link: 'http://juanrod.co'
        },
        {
          name: 'lovelyfaceuglycity',
          link: 'http://lovelyfaceuglycity.com'
        },
        {
          name: 'mediasciencenyc',
          link: 'http://mediasciencenyc.com'
        },
        {
          name: 'mediasciencepanel',
          link: 'http://mediasciencepanel.com'
        },
        {
          name: 'rReports',
          link: 'http://rreports.juanrod.co'
        },
        {
          name: 'uPick',
          link: 'https://upick-88.firebaseapp.com/#/oh'
        },
        {
          name: 'War',
          link: 'http://war.juanrod.co'
        },
        {
          name: 'MultiVision',
          link: 'https://sleepy-island-45336.herokuapp.com/'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .projects-container{
    background: rgba(255, 255, 255, 1);
    margin: 0 25px;
    height: 450px;
    font-family: 'Fira Mono', monospace;
    box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
    -webkit-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
      -moz-box-shadow: 11px 13px 0px -2px rgb(113, 113, 113);
  }
  .projects-details{
    text-align: right;
    padding-top: 12%;
    padding-right: 4%;
    font-size: 1.1em;
    font-weight: bold;
  }
  .projects-details a{
    color: inherit;
    text-decoration: none;
  }
   .projects-details a:hover{
    color: pink;
  }
  .link-box:hover{
    background-color: #2c3e50;
  }
</style>
