<template lang="html">

  <section class="forms">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Formulacio de solicitud</h4>
            <div class="row">
              <div class="col-md-6">
              <form class="forms-sample">
                <b-form-group label="Fecha actividad" description="DD/MM/YYYY HH/MM">
                    <b-form-input></b-form-input>
                </b-form-group>
                <b-form-group label="Descripción"  label-for="input10">
                  <b-form-textarea id="input10" v-model="text" placeholder="" :rows="3" :max-rows="6"></b-form-textarea>
                </b-form-group>
              <b-button type="submit"  class="mr-2" variant="success">Enviar</b-button>
              <b-button variant="danger">Cancelar</b-button>
              </form>
              </div>
              <div class="col-md-6">
              <form class="forms-sample">
              <b-form-group label="Espacio a solicitar">
                <b-form-select v-model="selected" :options="SeleccionarEspacio" placeholder=""/>
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
      SeleccionarEspacio: [
        { value: 'Teatro Municipal', text: 'Teatro Municipal' },
        { value: 'Biblioteca Municipal', text: 'Biblioteca Municipal' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.forms {
}
</style>
