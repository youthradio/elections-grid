<template>
  <div class="row">
    <div role="grid-base" class="col-12 col-md-12 mx-auto">
      <transition name="slide">
        <template v-if="!bshowProfile">
            <div class="row no-gutters">
                <div
                  v-for="(profile, index) in profilesData"
                  :key="`profile-${index}`"
                  class="col-4">
                  <ProfileGrid :profileData="profile" v-on:showProfile="showProfile" />
                </div>
            </div>
          </template>
       </transition>
       <!-- <div class="d-flex align-items-center pl-3 pb-2">
         <span
           class="icon-facebook-inverted share-icon m-1 pointer"
           @click="facebookThis"/>
         <span
           class="icon-twitter-inverted share-icon m-1 pointer"
           @click="tweetMessage"/>
       </div> -->
       <transition name="slide-right">
         <template v-if="bshowProfile">
           <div class="profile no-gutters">
             <div class="col">
               <ProfileBase v-on:goBack="goBack" :profileData="profileFeatured"/>
             </div>
           </div>
        </template>
      </transition>
    </div>
  </div>
</template>

<script>
import ProfileBase from './ProfileBase.vue'
import ProfileGrid from './ProfileGrid.vue'

export default {
  name: 'GridBase',
  components: {
    ProfileBase,
    ProfileGrid
  },
  data() {
    return {
      bshowProfile: false,
      profileFeatured: null,
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    profilesData() {
      return this.$store.state.gridData;
    }
  },
  methods: {
    tweetMessage() {
      const url = 'https://www.youthradio.org/'
      const tweet = `Tweet Something : ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    facebookThis() {
      const url = 'https://www.youthradio.org/'
      const title = 'Facebook Something'
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
      window.open(facebookUrl, '_blank')
    },
    showProfile(profile) {
      this.bshowProfile = true
      this.profileFeatured = profile

    },
    goBack() {
      this.bshowProfile = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;

}
.slide-enter,
.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(calc(-100% - 15px));
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .5s;
  transform: translateX(0px);
  position: absolute;
  top: 0;
  padding: inherit;
  margin-left: -15px;
}
.slide-right-enter,
.slide-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  position: absolute;
  top: 0;
  padding: inherit;
  margin-left: -15px;
}
.profile {

}
</style>
