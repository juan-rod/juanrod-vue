<template>
  <div class="hello col-12 f-row">
    <div class="row">
      <left-side class=" col-3 f-row_cell left-side"></left-side>
      <right-side class=" col-9 f-row_cell right-side"></right-side>
    </div>
  </div>
</template>

<script>
import LeftSide from './leftside/LeftSide.vue'
import RightSide from './rightside/RightSide.vue'
export default {
  name: 'hello',
  components: { LeftSide, RightSide },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:100vw;
  height:100vh;
}
  .left-side{
    padding:2px;
    height: 90vh;
  }
  .right-side{
    padding:2px;
    height: 90vh;
  }
</style>
