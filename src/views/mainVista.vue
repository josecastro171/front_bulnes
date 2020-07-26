<template lang="html">
  <div>
    <div class="container-scroller">
      <app-header/>
      <div class="container-fluid page-body-wrapper">
        <app-sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '../components/partials/AppHeader'
import AppSidebar from '../components/partials/AppSidebar'
// eslint-disable-next-line camelcase
import AppSidebar_gestor from '../components/partials/AppSidebar_gestor'
// eslint-disable-next-line camelcase
import AppSidebar_DIDECO from '../components/partials/AppSidebar_DIDECO'
// eslint-disable-next-line camelcase
import AppSidebar_usuario_interno from '../components/partials/AppSidebar_usuario_interno'
// eslint-disable-next-line camelcase
import AppSidebar_alcalde from '../components/partials/AppSidebar_alcalde'
import AppFooter from '../components/partials/AppFooter'

export default{
  name: 'app',
  components: {
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
  @import "../../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../../node_modules/flag-icon-css/css/flag-icon.min.css";
  @import "../../node_modules/font-awesome/css/font-awesome.min.css";
</style>

<style lang="scss">
@import "./src/assets/scss/style";

.main.panel {

}
</style>
