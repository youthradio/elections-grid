<template>
  <div role="profile-grid">
    <div
      :style="profileImage"
      class="square"
      @click.stop="profileClicked">
      <div :class="[partyColor,'info p-2']">
        <div class="head">
          <h4>
            <strong>{{ profileData.Name }} </strong> <span class="x"> x </span>
          </h4>
        </div>
        <div>
          <p>
            {{ profileData.Age }}, {{ profileData.Location }}
            <em class="d-none d-sm-inline">
              {{ profileData.Quote }}
            </em>
          </p>
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
        "background-image": `url(${this.profileData.Profile_Image})`
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

.democrat {
    background-color: $blue-dem;
}
.republican {
    background-color: $red;
}
.independent {
  background-color: darken(yellow, 10%);
}
.green-party {
  background-color: darken(green, 10%);;
}

</style>
