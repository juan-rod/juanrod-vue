<template>
  <div class="hello f-row">
      <left-side class="f-row_cell left-side"></left-side>
      <right-side class="f-row_cell--3 right-side"></right-side>
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
}
  .left-side{
    padding:2px;
  }
  .right-side{
    padding:2px;
  }
</style>
