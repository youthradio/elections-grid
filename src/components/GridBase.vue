<template>
  <div class="row">
    <div
      role="grid-base"
      class="col-12 col-md-12 mx-auto">
      <template v-if="!bshowProfile">
        <div
          key="1"
          class="row no-gutters">
          <div
            v-for="(profile, index) in profilesData"
            :key="`profile-${index}`"
            class="col-4">
            <ProfileGrid
              :profile-data="profile"
              @showProfile="showProfile" />
          </div>
        </div>
        <div
          key="2"
          role="social-share"
          class="d-flex">
          <span
            class="icon-facebook-inverted share-icon m-1 pointer"
            @click="facebookThis"/>
          <span
            class="icon-twitter-inverted share-icon m-1 pointer"
            @click="tweetMessage"/>
        </div>
      </template>
      <template v-else>
        <div class="profile no-gutters">
          <div class="col">
            <ProfileBase
              v-if="profileFeatured"
              :profile-data="profileFeatured"
              @goBack="goBack"/>
          </div>
        </div>
      </template>
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
  transition: transform .6s;

}
.slide-enter,
.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(calc(-100% - 15px));
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .6s;
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
