<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '../src/components/partials/AppHeader'
import AppSidebar from '../src/components/partials/AppSidebar'
// eslint-disable-next-line camelcase
import AppSidebar_gestor from '../src/components/partials/AppSidebar_gestor'
// eslint-disable-next-line camelcase
import AppSidebar_DIDECO from '../src/components/partials/AppSidebar_DIDECO'
// eslint-disable-next-line camelcase
import AppSidebar_usuario_interno from '../src/components/partials/AppSidebar_usuario_interno'
// eslint-disable-next-line camelcase
import AppSidebar_alcalde from '../src/components/partials/AppSidebar_alcalde'
import AppFooter from '../src/components/partials/AppFooter'
import login from '../src/views/login'
export default{
  name: 'app',
  components: {
    login,
    AppHeader,
    AppSidebar,
    AppFooter,
    AppSidebar_gestor,
    AppSidebar_DIDECO,
    AppSidebar_usuario_interno,
    AppSidebar_alcalde
  }
}
</script>

<style>
  @import "../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../node_modules/flag-icon-css/css/flag-icon.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>

<style lang="scss">
@import "./assets/scss/style";
</style>
