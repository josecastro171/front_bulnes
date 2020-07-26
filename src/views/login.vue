<template lang="html">

  <section class="login">
    <div class="wrapper d-flex align-items-center auth login-full-bg">
      <div class="container h-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-dark text-left p-5">
            <h2>Sistema de Gestión de Espacios</h2>
            <h2>Culturales</h2>
            <br>
            <h4 class="font-weight-light">Ingrese su credenciales para iniciar sesión</h4>
            <form class="pt-5">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">RUN</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="RUN">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
                </div>
                <div class="mt-5">
                  <!-- <button @click="gotosite()">Ingresar</button> -->
                  <button type="submit" @click="gotosite()">Ingresar</button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'login',
  methods: {
    gotosite () {
      this.$router.push({ path: '/mainVista' })
    }
  }
}
</script>

<style scoped lang="scss">
.login {

  text-align: center;
}
.mt-5 {text-align: center;}
h2 {text-align: center;}
h4 {text-align: center;}
</style>
