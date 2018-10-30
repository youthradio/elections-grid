<template>
  <div role="profile-grid">
    <div
      :style="profileImage"
      class="square pointer"
      @click.stop="profileClicked">
      <div
        :style="backgroundColor"
        class="info p-2']">
        <div class="head">
          <h4>
            <strong>{{ profileData.Name }} </strong>
          </h4>
        </div>
        <div>
          <p>
            {{ profileData.Age }}, {{ profileData.Location }}
          </p>
          <div class="float-right ml-2 icon-arrow-right pulse"/>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProfileGrid',
  props: {
    profileData: {
      type: Object,
      require: true,
      default: null,
    }
  },
  data() {
    return {
      clicked: false,
    }
  },
  computed: {
    profileImage() {
      return {
        "background-image": `url(data/2018-elections/${this.profileData.Profile_Image})`
      };
    },
    backgroundColor() {
      return {
        "background-color": this.profileData.Background_Color
      };
    },
    partyColor() {
        return this.profileData.Party_Affiliation.trim().toLowerCase().split(' ').join('-');
    }
  },
  methods: {
    profileClicked() {
      this.$emit('showProfile', this.profileData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.square {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 100%;
    position: relative;
    margin: 1%;
}

.info {
    display: none;
    position: absolute;
    top: 0px;
    font-size: 1rem;
    color: $white;
    width: 100%;
    height: 100%;
}
.square:hover{

  .info{
    display: block;
  }
}

</style>
