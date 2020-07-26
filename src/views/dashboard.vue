<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Listado de Usuarios</h5>
            <div class="col-md-3">
              <div class="profile-name">
                <p class="name">Ordenar por: <b-form-select v-model="selected" :options="SeleccionarOrden" placeholder="Seleccione una opción"/></p>
              </div>
              <br>
            </div>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Id</th>
                    <th class="border-bottom-0">Nombre</th>
                    <th class="border-bottom-0">Apellido Paterno</th>
                    <th class="border-bottom-0">Apellido Materno</th>
                    <th class="border-bottom-0">Cargo</th>
                    <th class="border-bottom-0">Acciones</th>
                    <th class="border-bottom-0"></th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Iván</td>
                    <td>Martínez</td>
                    <td>Villegas</td>
                    <td>Gestor Cultural</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Editar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Eliminar</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'dashboard',
  data () {
    return {
      file: null,
      SeleccionarOrden: [
        { value: 'Nombre', text: 'Nombre' },
        { value: 'Fecha', text: 'Fecha' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
