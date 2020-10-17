<template>
  <div class="home">
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header" >
  
      <div class="logo" >
      <img src="../assets/images/law.png" height="40px">
      <span class="brand">Peres y Associados</span>
      </div>
     
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px', textAlign:'right'  }"
      >
        <a-menu-item >
        <span style="font-size: 20px;">
         Jorge Perez
        </span>
        </a-menu-item>
        <a-menu-item >
        <span style="font-size: 20px;">
        <a-icon type="arrow-right" />Salir
        </span>
        </a-menu-item>
        
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0,textAlign:'left' }"
        >
      
         <a-menu-item key="1">
             <a-icon type="home" />
              Inicio
            </a-menu-item>
            <a-menu-item key="2">
              <i class="material-icons"  >gavel</i>
              Expedientes
            </a-menu-item>
            <a-menu-item>
              <hr>
            </a-menu-item>
            <a-menu-item key="3">
              <i class="material-icons">
              description
              </i>
              Reportes
            </a-menu-item>
            <a-menu-item>
              <hr>
            </a-menu-item>
            <a-menu-item key="4">
          
            Configuración
              <i class="material-icons" style="font-size:30px">
              settings
              </i>
              
            </a-menu-item>
             <a-menu-item key="5">
             <i class="material-icons">museum</i>Aseguradora
           
            </a-menu-item>
             <a-menu-item key="6">
              <i class="material-icons">person</i>
              Usuario
            
              
            </a-menu-item>
             <a-menu-item key="7">
              <i class="material-icons">account_balance</i>Juzgado
              
            </a-menu-item>
          
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
       
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
         <listmenu/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>








  </div>


</template>


<style  scoped>

#components-layout-demo-top-side-2 .logo {
  
  height:60px;
  
  
  float: left;
}

.brand{
  font-size: 20px;
  color: white;
  margin-left: 10px;
}

</style>

<script>
// @ is an alias to /src

import listmenu from '../components/listmenu.vue'


export default {
  name: 'Home',
  components: {
      
      listmenu
  },
  data() {
    return {
      collapsed: false,
    };
  },
}
</script>
