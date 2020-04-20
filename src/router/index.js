import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import About from './../views/About'
import Course from './../views/Course'
import Mine from './../views/Mine'

let func = ({params, query}) => {
  return {
    name: params.name,
    sex: params.sex,
    age: query.age
  }
}

Vue.use(VueRouter)

  const routes = [
    { path:'/', redirect:'/home' },
    { 
      path: '/home', 
      name: 'Home', 
      component: Home,
      children: [
        { path: '/about', name: 'About', component: About },
        { path: '/course', name:'Course', component: Course},
        { path: '/mine/:name/:sex', name:'Mine', component: Mine, props: func}
      ]
    }
    
]

const router = new VueRouter({
  routes
})

export default router
