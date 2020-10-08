<template>
  <div class="home">
    <navbartop/>
    <listmenu/>
  </div>
</template>


<script>
// @ is an alias to /src
import navbartop from '../components/navbar.vue'
import listmenu from '../components/listmenu.vue'

export default {
  name: 'Home',
  components: {
      navbartop,
      listmenu
  }
}
</script>
