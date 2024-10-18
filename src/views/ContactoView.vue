<template>
    <div>
        <h1>Contacto</h1>
        <p> Nombre: {{ nombre }} - Email: {{ email }}</p>
    </div>
    <router-link class="volver" to="/">Volver a Inicio</router-link>
</template>

<script>
export default {
      props: {
         
          nombre: {
              type: String,
              required: true
          },
          email: {
              type: String,
              required: true
          }
      }
  }
</script>

<style>
.volver{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
}

</style>