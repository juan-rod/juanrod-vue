import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Now from '../components/rightside/pages/Now'
import About from '../components/rightside/pages/About'
import Projects from '../components/rightside/pages/Projects'
import Timeline from '../components/rightside/pages/Timeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
      {path: '', component: Now, props: true},
      {path: 'about', component: About, props: true},
      {path: 'projects', component: Projects, props: true},
      {path: 'timeline', component: Timeline, props: true}
      ]
    }
  ]
})
