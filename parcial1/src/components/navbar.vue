<template>
<div class="topnav">
  <a  href="#home">
  <button class="navbar-toggler" type="button">
     <i class="material-icons"  >view_headline</i>
    </button></a>
    <a href="">
    <img src="../assets/images/law.png" height="40px">
    
    </a>
  <a href="">
        <div class="title" >
            <h4>Nombre</h4>
        </div>
  </a>

  <div class="search-container">
   <a href="">
        <div class="title" >
            <h4>Nombre</h4>
        </div>

        
  </a>
<a href="#"><i class="material-icons">forward</i>Salir</a>

  </div>
</div>

</template>


<script>
export default {
  name: 'navbar',
  
}



</script>

<style  scoped>


.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}



.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}

.title{
    border: 5px solid black;
    width: 400px;
    font-family: 'Arial', sans-serif;
    background-color: #faceb2;
    color: red;
    height: 40px;
   

}

.title2{
    border: 5px solid black;
    width: 200px;
    font-family: 'Arial', sans-serif;
    background-color: #faceb2;
    color: red;
    height: 40px;
   

}



</style>