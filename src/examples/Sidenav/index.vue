<template>
  <div
    v-show="this.$store.state.layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${this.$store.state.darkMode ? 'bg-transparent' : ''}`"
  />
  <aside
    class="overflow-auto border-0 sidenav  app-sidebar navbar navbar-vertical navbar-expand-xs
    hover-scroll-overlay-y"
    :class="`${
      this.$store.state.isRTL
        ? 'me-3 rotate-caret fixed-end'
        : 'fixed-start'
    } 
    ${
      this.$store.state.layout === 'landing'
        ? 'bg-transparent shadow-none'
        : ' '
    } ${this.$store.state.sidebarType}`"
    id="sidenav-main"
>
    
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="custom_class" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";


export default {
  name: "index",
  components: {
    SidenavList
  },
  data() {
    return {
    
    };
  },
  props: ["custom_class", "layout"]
};
</script>
