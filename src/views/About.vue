<template>
  <div>
      <formulario-territorio/>
      <!---Salto de linea---->
      <br>
      <!---Linea horizontal---->
      <hr>
      <!---Salto de linea---->
      <br>
      <listado-territorio/>
  </div>
</template>

<script>
import FormularioTerritorio from '../components/FormularioTerritorio.vue'
//import ListadoTerritorio from '../components/ListadoTerritorio.vue'

export default {
    components:{
        FormularioTerritorio,
        //ListadoTerritorio
    }
}
</script>
