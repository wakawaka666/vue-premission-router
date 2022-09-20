<template>
  <div>
    <slidebarNav class="slidebar" />
    <mainContent />
  </div>
</template>

<script>
import slidebarNav from './component/sidebar-nav.vue'
import mainContent from './component/index.vue'
import { mapState } from 'vuex';

export default {
  components:{
    slidebarNav,
    mainContent
  },
  data() {
    return {
      
    }
  },
  
};
</script>

<style lang="scss" scoped>
</style>