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
import ResizeObserver from 'resize-observer-polyfill';

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
  mounted() {
    const elementRoot = this.$root.$el;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        const elementHeight = 'elementHeight:' + height;
        console.log(elementHeight);
        parent.postMessage(elementHeight, '*');
      }
    });
    resizeObserver.observe(elementRoot);
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./styles/custom";
@import "./styles/player";
</style>
