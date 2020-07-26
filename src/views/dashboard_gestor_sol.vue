<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Solicitudes aprobadas por Gestor Cultural</h5>
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
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Iván</td>
                    <td>Martínez</td>
                    <td>Villegas</td>
                    <td>Credit card</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Aceptar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Rechazar</a></td>
                  </tr>
                  <tr>
                    <td>035</td>
                    <td>Galaxy S8</td>
                    <td>15 May 2017</td>
                    <td>Dispatched</td>
                    <td>Internet banking</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Aceptar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Rechazar</a></td>
                  </tr>
                  <tr>
                    <td>036</td>
                    <td>Amazon Echo</td>
                    <td>17 May 2017</td>
                    <td>Dispatched</td>
                    <td>Credit card</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Aceptar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Rechazar</a></td>
                  </tr>
                  <tr>
                    <td>037</td>
                    <td>Google Pixel</td>
                    <td>17 May 2017</td>
                    <td>Dispatched</td>
                    <td>Cash on delivery</td>
                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Aceptar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Rechazar</a></td>
                  </tr>
                  <tr>
                    <td>038</td>
                    <td>Mac Mini</td>
                    <td>19 May 2017</td>
                    <td>Dispatched</td>
                    <td>Debit card</td>

                    <td><a href="#" class="btn btn-ft btn-success btn-sm">Aceptar</a></td>
                    <td><a href="#" class="btn btn-fw btn-danger btn-sm">Rechazar</a></td>
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
  name: 'dashboard_gestor'
}
</script>

<style scoped lang="scss">
</style>
