<template>
  <div class="hello">
      <header>Header</header>
      <main>
        <article>Article</article>
        <nav>Nav</nav>
        <aside>Aside</aside>
      </main>
      <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  height: calc(100vh - 40vh);
  display: flex;
}

article {
  flex: 1
}
nav {
  order: -1
}
/**
 = ======
*/
* {
  box-sizing: border-box;
}

nav,
aside {
  background: #808080;
  padding: 10px;
  width: 20vh;
}
header,
footer {
  background: rgba(0,0,0,0.18);
  height: 20vh;
  padding: 10px;
}
article {
  padding: 10px;
}
</style>
