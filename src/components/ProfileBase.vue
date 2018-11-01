<template>
  <div role="profile-base">
    <div class="row">
      <div class="col-12 col-md-10 mx-auto">
        <div class="card">
          <div class="card-body">
            <VuePlyr
              v-if="audioProfile"
              :options="playerOptions">
              <audio>
                <source
                  :src="audioProfile"
                  type="audio/mp3">
              </audio>
            </VuePlyr>
            <h2 class="card-title">{{ profileData.Name }}, {{ profileData.Age }} </h2>
            <div
              class="card-text pointer"
              @click="$emit('goBack')">
              <h5 class="candidate">
                <span> {{ profileData.Location }} </span> - <span> {{ profileData.Party_Affiliation }} </span>
              </h5>
              <p>
                {{ profileData.Quote }}
              </p>
              <div class="d-flex dlex-wrap align-items-center justify-content-end">
                <a
                  v-if="profileData.Website"
                  :href="profileData.Website"
                  target="_blank"
                  class="">
                  Website
                </a>
                <a
                  v-if="profileData.Twitter_handle"
                  :href="`https://twitter.com/${profileData.Twitter_handle}`"
                  target="_blank"
                  class="icon-twitter-inverted share-icon m-1 pointer"/>
              </div>
              <div class="float-left ml-2 icon-arrow-left pulse"/>
            </div>
          </div>
          <div
            class="icon-close icon float"
            @click="$emit('goBack')"/>
          <template v-if="videoProfile">
            <VuePlyr :options="playerOptions">
              <div class="plyr__video-embed player-custom-style">
                <iframe
                  :src="videoProfile"
                  allowtransparency
                  allow="autoplay"/>
              </div>
            </VuePlyr>
          </template>
          <template v-else>
            <img
              :src="`data/2018-elections/${profileData.Profile_Image}`"
              class="card-img-top"
              alt="Card image cap"
              @click="$emit('goBack')">
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePlyr from './VuePlyr.vue'

export default {
  name: 'ProfileBase',
  components:{
    VuePlyr
  },
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
  computed: {
    videoProfile(){
      const vp = this.profileData.Video_Profile;
      return vp === "" ? false : vp;
    },
    audioProfile(){
      const ap = this.profileData.Audio_Profile;
      return ap === "" ? false : ap;
    },
    playerOptions() {
      return {
        hideYouTubeDOMError: true,
        iconUrl: process.env.BASE_URL + 'plyr.svg',
        'volume': 1,
        'fullscreen': false,
        controls: [
          'play-large', // The large play button in the center
          // 'restart', // Restart playback
          // 'rewind', // Rewind by the seek time (default 10 seconds)
          'play', // Play/pause playback
          // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          // 'duration', // The full duration of the media
          'mute', // Toggle mute
          'volume', // Volume control
          'pip', // Picture-in-picture (currently Safari only)
          'airplay' // Airplay (currently Safari only)
          // 'settings' // Settings menu
        ]
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.float{
  position: absolute;
  right: 0px;
  margin: 1%;
  padding: 2%;
  z-index: 10;
}
p {
  font-size: 1.2rem;
}
h5 {
  font-weight: 600;
}
</style>
