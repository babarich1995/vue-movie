<template>

  <nav></nav>
</template>
<script>

import { mapMutations, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      
      showMenu: false,
      showMenu1:false,
      showMenu2:false
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
    window.addEventListener("click", this.close);

  },
   beforeUnmount() {
    window.removeEventListener("click", this.close);
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("");
      this.navbarMinimize();
    },
    
     close(e) {
      if (!this.$el.contains(e.target)) {
        this.showMenu = false;
        this.showMenu1=false;
      }
    },
    

  },
  
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
<style scoped>

.header-img{
    height: 2.5rem;
    line-height: 2rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    width: auto;
    margin: 0 auto;
    margin-top: 11px;
}
input:focus, input.form-control:focus {

    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}
</style>