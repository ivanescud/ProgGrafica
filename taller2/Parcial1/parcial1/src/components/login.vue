<template>
    <div >
    
    <div class="rcorners center ">
    <div class="container" style="text-align:center">
        <div class="title" >
            <h2>Nombre</h2>
        </div>
        <hr>

        <br>
        <h3>INGRESAR A CUENTA</h3>
        <form class="pt-2">
  
  <div class="form-group">
   
    <input type="text" class="form-control" id="user" placeholder="USUARIO">
    <br>
     <input type="password" class="form-control" id="password" placeholder="CONTRASEÑA">
  </div>
 
  <button type="submit" class="btn mainbut btn-block">INGRESAR A CUENTA</button>
</form>
    <a href=""><span class="btText">OLVIDASTE TU CONTRASEÑA</span></a>

    </div>

    </div>
    </div>
</template>


<script>
export default {
  name: 'login',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainback{

background-color: gray;

}

.title{
    border: 5px solid black;
    
    font-family: 'Arial', sans-serif;
    background-color: #faceb2;
    color: red;
   

}

input {
    border: 2px solid #a88e1a;
}

h2{
    font-size: 28px;
}

.rcorners {
  border-radius: 25px;
  border: 2px solid #a88e1a;
  padding: 20px;
  width: 430px;
  background-color: white;
  
}

.btText{
    font-size: 10px;
}

.mainbut{
 background-color:#5b5b5b;
 font-size: 28px;
 color: white;


}

hr {
 border: 1px solid gray;
}

h3 {
    color: #a88e1a;
}

a {
    color: #5b5b5b;
}

.center{
 position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  

}
</style>
