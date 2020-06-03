<template>
  <sidebar-menu :menu="menu" collapsed="true" width="200px"/>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.v-sidebar-menu {
  border-right: 2px solid $main-yellow;
  position: relative;
  height:auto
}
</style>