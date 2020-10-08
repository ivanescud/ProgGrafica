<template>
  <div class="log">
    
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/login.vue'

export default {
  name: 'Log',
  components: {
      Login
  }
}
</script>
