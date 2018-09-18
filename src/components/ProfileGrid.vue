<template>
<div :style="profileImage" class="square one m-2">
  <div ></div>
  <div class="info dem m-2">
    <h4>
      <strong>Hadiya Afzal </strong> <span class="x"> x </span>
      </h4>
    <p>
      18, Illinois <br>
      <em class="d-none d-sm-inline">“I think that means we tackle mental-health issues, I think it means we tackle school safety issues, and I think it means we tackle gun issues.”</em>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileGrid',
  props: {
    profileData: {
      type: Object,
      require: true
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.one {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.square {
    padding-bottom: 100%;
}
.info {
    display:none;
    position: absolute;
    font-size: 20px;
    color: $white;
    width: 100%;
    height: 100%;
}
.dem {
    background-color: #1A2442;

}
.rep {
    background-color: red;
}

.square:hover > .info{
  display: block;

}
</style>
