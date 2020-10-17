<template>
<div>
<a-row>
  <a-col :span="18" class="main">
        <h1>Agenda del dia</h1>
    <h3>Martes 7 de enero de 2019</h3>
    <br>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Aseguradora</th>
      <th scope="col">Aseguradora</th>
      <th scope="col">Jusgado</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in lista" :key="item.id" >
      
      <td>{{item.ase1}}</td>
      <td>{{item.ase2}}</td>
      <td>{{item.jusgado}}</td>
    </tr>
    
  </tbody>
</table>

      </a-col>
      <a-col :span="6" >
      <div class="center"> 
      <vc-calendar class="mt-5"  />
      </div>
        
      </a-col>

</a-row>


<a-row  class="mt-4">
    
    <a-col :span="4"  v-for="item in opc" :key="item.id">
       
       
        <a href="" style="text-decoration: none;">

         
            <div class="opbutton " v-bind:style="{ backgroundColor: item.color, }">
            <div class="row">
            <div class="col"> 
                <i class="material-icons" style="font-size:60px" >
                {{item.icon}}
            </i>
            </div>
            <div class="col">
            <h5>{{item.title}}</h5>
            <h1 style="text-align:right;">{{item.num}}</h1>
            </div>
            </div>
            </div>
            
            </a>
    
    </a-col>
    
  </a-row>



 <button class="float">
          <i class="material-icons" style="font-size:45px">
    add
        </i>
        </button>
</div>   
</template>


<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'


export default {
    name:'listmenu',
    component:{
        Calendar,
    },


    data() {
        return {
            lista:[
            {ase1:'ASSA' , ase2:'ANTHONY TREJOS', jusgado:'JUZFADO 5TO(PEDREGAL)' },
            {ase1:'ACON' , ase2:'LUIS MOLINA', jusgado:'JUZFADO 5TO(PEDREGAL)' },
            {ase1:'ASSA' , ase2:'KATHERINE KENT', jusgado:'JUZFADO 5TO(PEDREGAL)' },
            {ase1:'CONANCE' , ase2:'MARTIN ALVARADO', jusgado:'JUZFADO 5TO(PEDREGAL)' },
            {ase1:'PARTICULAR' , ase2:'JOEL ARAUZ RODRIGUEZ', jusgado:'JUZFADO 5TO(PEDREGAL)' },
            {ase1:'INTEROCIANICA' , ase2:'ANTHONY TREJOS', jusgado:'ALCALDIA DE PANAMA' },
            {ase1:'ANCON' , ase2:'CANDICE HENRY', jusgado:'CHITRE' }

        ],

        opc:[
            {icon:'file_copy', title:'Pendiente', num:102, color:'#9d8000'},
            {icon:'input', title:'En curso', num:72, color:'#e2b900'},
            {icon:'rule_folder', title:'Cerrado', num:204, color:'#727272'}
        ]

        }
    }

}
</script>


<style  scoped>


.main {
 
  text-align: initial;
}



.opbutton{
    width: 200px;
    color:white;
    text-decoration: none;
    padding: 0px 5px 0px 2px;

}

.opbutton h4 {
    font-size: 25px;
}
.opbutton a hover {
    text-decoration: none;
}
.circulebut{
    border-radius:50%; 
    height:65px;
    width: 60px;
    background-color: #9d8000;
    color:white;
    float: right;
    margin-right: 40px;
    
    padding-bottom: 40px;
    
    
}

.center {
   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: #9d8000;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}

</style>