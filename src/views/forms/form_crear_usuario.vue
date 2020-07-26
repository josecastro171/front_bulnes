<template lang="html">

  <section class="forms">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Crear Usuario</h4>
            <div class="row">
              <div class="col-md-6">
              <form class="forms-sample">
              <b-form-group label="Nombres"  label-for="input5">
                <b-form-input type="text" id="input5" placeholder="Nombres"></b-form-input>
              </b-form-group>
              <b-form-group label="Apellido Materno"  label-for="input6">
                <b-form-input type="text" id="input6" placeholder="Apellido Materno"></b-form-input>
              </b-form-group>
              <b-form-group label="Contraseña"  label-for="input7">
                <b-form-input type="password" id="input7" placeholder="Contraseña"></b-form-input>
              </b-form-group>
              <b-form-group label="Contacto"  label-for="input6">
                <b-form-input type="text" id="input6" placeholder="Contacto"></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="success" class="mr-2">Agregar</b-button>
              <b-button variant="danger">Cancelar</b-button>
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
              <b-form-group label="Cargo">
                <b-form-select v-model="selected" :options="SeleccionarCargo" placeholder=""/>
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
  name: 'forms',
  data () {
    return {
      file: null,
      SeleccionarCargo: [
        { value: 'Alcalde', text: 'Alcalde' },
        { value: 'Gestor Cultural', text: 'Gestor Cultural' },
        { value: 'DIDECO', text: 'DIDECO' },
        { value: 'Usuario', text: 'Usuario' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.forms {
}
</style>
