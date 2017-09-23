<template>
  <div id="app" class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
.container-fluid{
  padding:0;
}
.f-row {
  padding: 15px 42px;
  background: rgba(0,0,0,0.08);
  margin:0;
}
.f-row_cell {
   flex: 1
}
.f-row_cell--2 {
   flex: 2
}
.f-row_cell--3 {
   flex: 3
}
.f-row_cell{
  /*background: pink;*/
  padding: 10px;
  margin: 5px;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
background-size: 100% 1800%;

-webkit-animation: rainbow 18s ease infinite;
-z-animation: rainbow 18s ease infinite;
-o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}

@-webkit-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}

@media (max-width: 320px) { 
   .f-row{
    flex-direction: column;
  }
 }

@media (max-width: 576px) { 
   .f-row{
    flex-direction: column;
  }
 }

@media (max-width: 768px) { 
   .f-row{
    flex-direction: row;
  }
 }

@media (max-width: 992px) { 
   .f-row{
    flex-direction: row;
  }
 }

@media (max-width: 1200px) { 
   .f-row{
    flex-direction: row;
  }
 }


</style>
