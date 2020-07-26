<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Reportes</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Id</th>
                    <th class="border-bottom-0">Fecha solicitud</th>
                    <th class="border-bottom-0">Descripción</th>
                    <th class="border-bottom-0">Espacio Cultural solicitado</th>
                    <th class="border-bottom-0">Entidad solicitante</th>
                    <th class="border-bottom-0">Acciones</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>20/05/2020 13:00:00</td>
                    <td>Hola</td>
                    <td>Teatro Municipal</td>
                    <td>Ay no sé</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Generar reporte</a></td>
                  </tr>
                </tbody>
              </table>
              <!--  <div class="card-body">
                <b-pagination align="center" :total-rows="20" v-model="currentPage" :per-page="5">
                </b-pagination>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'dashboard_gestor_reportes'
}
</script>

<style scoped lang="scss">
</style>
