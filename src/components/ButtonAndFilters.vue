<template>
    <div id="buttonAndFilters">
        <b-button v-b-toggle.sidebar-1>Mon Deck</b-button>
        <b-button v-b-toggle.collapse-filter variant="primary">Filtres</b-button>
        <collapseFilters />
    </div>
</template>
<script>
import collapseFilters from './collapseFilters.vue'


export default {
  name: 'ButtonAndFilters',
  components: {
    collapseFilters
  },
}  
</script>
<style lang="scss" scoped>
#buttonAndFilters {
  padding:1em 0;

  button {
      margin-right:1em
  }
}
</style>