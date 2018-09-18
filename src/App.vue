<template>
  <div
    id="app"
    class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <GridBase/>
      </div>
    </div>
  </div>
</template>

<script>
import GridBase from './components/GridBase.vue'

export default {
  name: 'App',
  components: {
    GridBase
  },
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./styles/custom";

</style>
