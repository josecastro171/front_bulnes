import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'
// eslint-disable-next-line camelcase
import dashboard_gestor from '../views/dashboard_gestor'
// eslint-disable-next-line camelcase
import dashboard_gestor_horario from '../views/dashboard_gestor_horario'
// eslint-disable-next-line camelcase
import dashboard_gestor_reportes from '../views/dashboard_gestor_reportes'
// eslint-disable-next-line camelcase
import dashboard_DIDECO from '../views/dashboard_DIDECO'
// eslint-disable-next-line camelcase
import dashboard_DIDECO_sol_aprobadas from '../views/dashboard_DIDECO_sol_aprobadas'
// eslint-disable-next-line camelcase
import dashboard_usuario_interno from '../views/dashboard_usuario_interno'
// eslint-disable-next-line camelcase
import dashboard_alcalde from '../views/dashboard_alcalde'
// eslint-disable-next-line camelcase
import mainVista from '../views/mainVista'
import login from '../views/login'

// Form Components
import forms from '../views/forms/forms'
// eslint-disable-next-line camelcase
import form_crear_usuario from '../views/forms/form_crear_usuario'
// eslint-disable-next-line camelcase
import form_solicitud from '../views/forms/form_solicitud'

// Sample Pages
import error404 from '../views/sample-pages/error-404'
import register from '../views/sample-pages/register'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/404',
    name: 'error-404',
    component: error404
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/forms',
    name: 'forms',
    component: forms
  },
  {
    path: '/form_crear_usuario',
    name: 'form_crear_usuario',
    component: form_crear_usuario
  },
  {
    path: '/form_solicitud',
    name: 'formsolicitud',
    component: form_solicitud
  },
  {
    path: '/dashboard_gestor',
    name: 'dashboard_gestor',
    component: dashboard_gestor
  },
  {
    path: '/dashboard_gestor_horario',
    name: 'dashboard_gestor_horario',
    component: dashboard_gestor_horario
  },
  {
    path: '/dashboard_gestor_reportes',
    name: 'dashboard_gestor_reportes',
    component: dashboard_gestor_reportes
  },
  {
    path: '/dashboard_DIDECO',
    name: 'dashboard_DIDECO',
    component: dashboard_DIDECO
  },
  {
    path: '/dashboard_DIDECO_sol_aprobadas',
    name: 'dashboard_DIDECO_sol_aprobadas',
    component: dashboard_DIDECO_sol_aprobadas
  },
  {
    path: '/dashboard_usuario_interno',
    name: 'dashboard_usuario_interno',
    component: dashboard_usuario_interno
  },
  {
    path: '/dashboard_alcalde',
    name: 'dashboard_alcalde',
    component: dashboard_alcalde
  },
  {
    path: '/mainVista',
    name: 'mainVista',
    component: mainVista
  }
  ]
})
