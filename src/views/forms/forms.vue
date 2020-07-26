<template lang="html">

  <section class="forms">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Crear Usuario</h4>
            <div class="row">
              <div class="col-md-6">
              <form class="forms-sample">
              <b-form-group label="Nombre"  label-for="input5">
                <b-form-input type="text" id="input5" placeholder="Nombre"></b-form-input>
              </b-form-group>
              <b-form-group label="Apellido Materno"  label-for="input6">
                <b-form-input type="text" id="input6" placeholder="Apellido Materno"></b-form-input>
              </b-form-group>
              <b-form-group label="Contraseña"  label-for="input7">
                <b-form-input type="password" id="input7" placeholder="Contraseña"></b-form-input>
              </b-form-group>
              <b-button type="submit"  class="mr-2" v-b-modal.modalmd variant="success">Crear</b-button>
              <b-button variant="danger" v-b-modal.modalmd >Cancelar</b-button>
              <b-modal id="modalmd" title="Confirmar Acción" size="md">
                <p class="my-4">¿Desea usted realizar esta acción?</p>
              </b-modal>
              </form>
              </div>
              <div class="col-md-6">
              <form class="forms-sample">
              <b-form-group label="Apellido Paterno"  label-for="input5">
                <b-form-input type="text" id="input5" placeholder="Apellido Paterno"></b-form-input>
              </b-form-group>
              <b-form-group label="RUN"  label-for="input6">
                <b-form-input type="text" id="input6" placeholder="RUN"></b-form-input>
              </b-form-group>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'forms'
}
</script>

<style scoped lang="scss">
.forms {
}
.modals {

}
</style>
