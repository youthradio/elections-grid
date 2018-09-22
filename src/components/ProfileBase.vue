<template>
  <div role="profile-base">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="icon-close icon float" @click="$emit('goBack')"></div>
          <template v-if="videoProfile">
            <VuePlyr :options="playerOptions">
              <div class="plyr__video-embed player-custom-style">
                <iframe
                  :src="videoProfile"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"/>
              </div>
            </VuePlyr>
          </template>
          <template v-else>
            <img
              @click="$emit('goBack')"
              :src="profileData.Profile_Image"
              class="card-img-top"
              alt="Card image cap">
          </template>
          <div class="card-body">
            <VuePlyr v-if="audioProfile" :options="playerOptions">
              <audio>
                <source
                  src="https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2017/08/23160224/2535642_YR_TitleIX_SexualHarassment.mp3"
                  type="audio/mp3">
                <source
                  src="audio.ogg"
                  type="audio/ogg">
              </audio>
            </VuePlyr>
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
</style>
