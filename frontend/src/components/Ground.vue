<template>
  <div class="ground">
    <Header></Header>
    <Memo></Memo>
    <Footer></Footer>
  </div>
    
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Memo from './Memo.vue';



export default {
  components:{Header, Memo, Footer}
}
</script>
