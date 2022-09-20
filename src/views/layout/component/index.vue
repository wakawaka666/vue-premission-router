<template>
  <div class="main-container">
    <TopAside />
    <Content />
  </div>
</template>

<script>
import TopAside from "./top-aside.vue";
import Content from "./content.vue";

export default {
  components: {
    TopAside,
    Content,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>