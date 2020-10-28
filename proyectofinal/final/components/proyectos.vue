<template>
    <div >
        <a-row :gutter="[8,8]">
      <a-col  :span="6" v-for="(item,index) in proyectos" :key="index">
            <a-card v-if="item.catego === 'hola'" >
             <img
                slot="cover"
                
                 v-bind:src="item.img"
            />
    <a-card-meta :title="item.nombre">
      <template slot="description">
       {{item.detalle}}
       
      </template>
    </a-card-meta>
  </a-card>
      </a-col>
     
    </a-row>
    </div>
</template>


<script>
export default {
  data() {
    return {
      proyectos:[{
          nombre:'Proyecto1',
          img:'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          detalle:'Este es proyecto 1',
          catego:'hola'
      },
      {
          nombre:'Proyecto2',
          img:'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          detalle:'Este es proyecto 1',
          catego:'hola'
      },
      {
          nombre:'Proyecto3',
          img:'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          detalle:'Este es proyecto 1',
          catego:'hola'
      },
        {
          nombre:'Proyecto4',
          img:'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          detalle:'Este es proyecto 1',
          catego:'hola'
      }
      ]
    };
  },
};
</script>