<template>
  <div
    class="mainimage_container"
    style="display: flex; align-items: center; justify-content: center"
  >
    <div class="img_box">
      <img
        id="mainImage"
        src="https://cdn.discordapp.com/attachments/1089496742019477526/1089496908378153021/ohmyssulmainre.png"
        alt="테스트"
      />
    </div>
    <!-- <div id="mainImage"></div> -->

    <div class="select_slider_container">
      <select_slider> </select_slider>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import select_slider from "../components/select_slider.vue";

export default {
  name: "app",
  data() {
    return {
      img_on: "",
      imageArray: [
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089496907035971624/nodoubtlogo.png",
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089496907342159983/nodoubtmain.png",
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089498775963312148/meimage.png",
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089496907669319700/ohmyssullogo2.png",
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089496907941941328/ohmyssulmainimage.png",
        "https://cdn.discordapp.com/attachments/1089496742019477526/1089496908378153021/ohmyssulmainre.png",
      ],

      imageIndex: 0,
    };
  },

  created() {
    setInterval(this.changeImage, 3000);
  },

  beforeUnmount() {
    clearInterval(this.changeImage());
  },

  methods: {
    changeImage: function () {
      const myImage = document.querySelector("#mainImage");
      myImage.setAttribute("src", this.imageArray[this.imageIndex]);
      this.imageIndex++;
      if (this.imageIndex == this.imageArray.length) {
        this.imageIndex = 0;
      }
    },
  },
  components: {
    select_slider,
  },
};
</script>

<style scoped>
body {
  width: 100%;
}
.img_box {
  width: 100%;
  /* height: 850px; */
  /* border: 5px solid black; */
  border-radius: 15px;
  box-shadow: 5px 5px 5px gray;
}

#mainImage {
  width: 100%;
  /* height: 850px; */
  background-size: cover;
  opacity: 0.7;
  transition: 1s linear;
  border-radius: 15px;
}

.select_slider_container {
  position: absolute;
  display: flex;
  align-items: center;
}
</style>
