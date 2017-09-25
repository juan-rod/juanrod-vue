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
        
        <!-- <span>rightside</span> -->
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
          name: 'lovelyfaceuglycity',
          link: 'http://lovelyfaceuglycity.com'
        },
        {
          name: 'mediasciencenyc',
          link: 'http://mediasciencenyc.com'
        },
        {
          name: 'rReports',
          skills: 'AngularJS, Bootstrap',
          desc: 'rReports, a mock website design, showcases a product description page. The main feature is the carousel-like display of product information. ',
          img: 'data/images/rreports.png',
          link: 'http://rreports.juanrod.co'
        },
        {
          name: 'uPick',
          skills: 'AngularJS, Bootstrap, Google Maps API',
          desc: 'uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.',
          img: 'data/images/uPickv1.jpg',
          link: 'https://upick-88.firebaseapp.com/#/oh'
        },
        {
          name: 'War',
          skills: 'RequireJS, jQuery, Handlebars, Bootstrap, DeckOfCards API',
          desc: 'This project is based on the card game, War. Users compete with themselves. Begin with a full deck and flip cards until the decks are empty.',
          img: 'data/images/war_game.jpg',
          link: 'http://war.juanrod.co'
        },
        {
          name: 'MultiVision',
          skills: 'MongoDB, ExpressJS, AngularJS, Node.js, Bootstrap, Stylus, Jade, Karma ',
          desc: 'A simple website that implements authentication and authorization utilizing the MEAN Stack. A practice site for me to try my hand at angular testing, server and client side communication, utilizing Jade and Stylus templating, storing new users and the ability to edit information on the dom and pushing it into the database. ',
          img: 'data/images/multivison.jpg',
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
