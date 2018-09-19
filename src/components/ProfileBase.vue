<template>
  <div role="profile-base">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <img class="card-img-top" :src="profileData.Profile_Image" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">{{ profileData.Name }}, {{ profileData.Age }} </h2>
            <div class="card-text">
            <h3 class="candidate">
               <span> {{ profileData.Location }} </span> - <span> {{ profileData.Party_Affiliation }} </span> - <span> Govenor </span>
            </h3>
           <p>
             {{ profileData.Quote }}
           </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button v-on:click="$emit('goBack')">
         BACK
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProfileBase',
  props: {
    profileData: {
      type: Object,
      require: true,
      default: null,
    }
  },
  data() {
    return {
      startData: "HELLO"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';
</style>
