<template>
  <el-menu
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
    class="aside-wrap"
  >
  <DynamicMenu :menuList="sidebarMenu" />
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import DynamicMenu from "../../../components/dynamic-menu.vue";

export default {
  components: {
    DynamicMenu,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("permission", ["sidebarMenu", "currentMenu"]),
  },
};
</script>

<style lang="scss" scoped>
.aside-wrap{
  width: 200px;
  height: 100vh;
}
</style>