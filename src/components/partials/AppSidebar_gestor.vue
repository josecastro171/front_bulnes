<template lang="html">

  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img src="../../assets/images/menu_icons/06.png" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">Sistema de Gestión</p>
              <p class="name">de Espacios Culturales</p>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/dashboard_gestor/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Listado de Solicitudes</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/dashboard_gestor_horario/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Listado Eventos</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/dashboard_gestor_reportes/"><img class="menu-icon" src="../../assets/images/menu_icons/05.png" alt="menu icon"><span class="menu-title">Reportes</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
