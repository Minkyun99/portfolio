<template>
  <!-- eslint-disable -->
  <div class="AI_slider_container"></div>
  <div class="image_bottom_button_container">
    <div class="image_side_button_container">
      <button class="left_button" @click="left_button_click()">
        <img class="left_button_img" src="../../public/left.png" alt="" />
      </button>
      <div class="out_container">
        <div class="container" ref="cont">
          <div
            class="image_slide slide_imageArray"
            ref="img_arr"
            v-for="i in slide_text"
            :key="i"
          >
            {{ i }}
          </div>
        </div>
      </div>
      <button class="right_button" @click="right_button_click()">
        <img class="right_button_img" src="../../public/right.png" alt="" />
      </button>
    </div>

    <div class="slide_button_box">
      <!-- 2번 사진이 1번 사진이 됨 -->
      <button
        class="button1"
        id="bt1"
        @click="button_click_slide1()"
        style="display: none"
      ></button>
      <button
        class="button2"
        id="bt2"
        @click="button_click_slide2()"
        style="display: none"
      ></button>
      <button
        class="button3"
        id="bt3"
        @click="button_click_slide3()"
        style="display: none"
      ></button>
      <label for="bt1"><div ref="tab1"></div></label>
      <label for="bt2"><div ref="tab2" class="show"></div></label>
      <label for="bt3"><div ref="tab3"></div></label>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import marketing from "./marketing.vue";
import programer from "./programer.vue";

export default {
  name: "app",
  data() {
    return {
      slide_text: ["Marketing", "Developer", "Maveloper"],
      select: "marketing",
      slide_imageIndex: 0,
      plugin: null,
      options: {
        autoplay: false,
        items: 1,
        startPosition: 2,
        autoplayTimeout: 1000,
      },
      count: 1,
    };
  },

  mounted() {
    setInterval(this.slide_changeImage, 2000);
    setInterval(this.right_button_click, 4000);
  },

  methods: {
    button_click_slide1: function () {
      const container = this.$refs.cont;
      const tab1 = this.$refs.tab1;
      const tab2 = this.$refs.tab2;
      const tab3 = this.$refs.tab3;
      container.style.transform = "translateX(400px)";
      tab1.classList.add("show");
      tab2.classList.remove("show");
      tab3.classList.remove("show");
      this.cont = 0;
    },
    button_click_slide2: function () {
      const container = this.$refs.cont;
      const tab1 = this.$refs.tab1;
      const tab2 = this.$refs.tab2;
      const tab3 = this.$refs.tab3;
      container.style.transform = "translateX(0px)";
      tab1.classList.remove("show");
      tab2.classList.add("show");
      tab3.classList.remove("show");
      this.cont = 1;
    },

    button_click_slide3: function () {
      const container = this.$refs.cont;
      const tab1 = this.$refs.tab1;
      const tab2 = this.$refs.tab2;
      const tab3 = this.$refs.tab3;
      container.style.transform = "translateX(-400px)";
      tab1.classList.remove("show");
      tab2.classList.remove("show");
      tab3.classList.add("show");
      this.cont = 2;
    },

    left_button_click: function () {
      const container = this.$refs.cont;
      const tab1 = this.$refs.tab1;
      const tab2 = this.$refs.tab2;
      const tab3 = this.$refs.tab3;

      if (this.count == 1) {
        container.style.transform = "translateX(400px)";
        this.count = 0;
        tab1.classList.add("show");
        tab2.classList.remove("show");
        tab3.classList.remove("show");
      } else if (this.count == 0) {
        container.style.transform = "translateX(-400px)";
        tab1.classList.remove("show");
        tab2.classList.remove("show");
        tab3.classList.add("show");
        this.count = 2;
      } else if (this.count == 2) {
        container.style.transform = "translateX(0px)";
        tab1.classList.remove("show");
        tab2.classList.add("show");
        tab3.classList.remove("show");
        this.count = 1;
      }
    },

    right_button_click: function () {
      const container = this.$refs.cont;
      const tab1 = this.$refs.tab1;
      const tab2 = this.$refs.tab2;
      const tab3 = this.$refs.tab3;
      if (this.count == 2) {
        container.style.transform = "translateX(400px)";
        tab1.classList.add("show");
        tab2.classList.remove("show");
        tab3.classList.remove("show");
        this.count = 0;
      } else if (this.count == 1) {
        container.style.transform = "translateX(-400px)";
        tab1.classList.remove("show");
        tab2.classList.remove("show");
        tab3.classList.add("show");
        this.count = 2;
      } else if (this.count == 0) {
        container.style.transform = "translateX(0px)";
        tab1.classList.remove("show");
        tab2.classList.add("show");
        tab3.classList.remove("show");
        this.count = 1;
      }
    },

    slide_changeImage: function () {
      if (this.slide_imageArray[3] >= this.slide_imageArray.length) {
        this.slide_imageIndex = 0;
      }
    },
  },
  components: {
    marketing,
    programer,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.AI_slider_container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.select_container {
  margin-right: 100px;
}

/*라디오버튼 숨김*/
input {
  display: none;
}

label {
  display: inline-flex;
  width: 49%;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: "dohyeon";
  font-weight: 600;
  text-align: center;
  color: black;
}

/*AI 검색*/

/*이미지 슬라이더*/

.slide_imageArray {
  transition: 0.3s linear;
}

button {
  background-color: transparent;
  border: none;
}

.left_button_img {
  width: 30px;
}

.right_button_img {
  width: 30px;
}

.image_side_button_container {
  display: flex;
  position: relative;
  align-items: center;
  bottom: -15px;
}

.image_bottom_button_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: -5rem; */
  position: relative;
  right: -90%;
}

.out_container {
  overflow: hidden;
  width: 400px;
  display: flex;
  justify-content: center;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgb(76, 76, 76);
}
.container {
  width: 1600px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
}

.image_slide {
  background-color: rgb(238, 237, 232);
  text-shadow: 2px 2px 2px gray;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "dohyeon";
  font-size: 3rem;
  font-weight: 300;
}

.image_slide:hover {
  width: 600px;
  height: 100%;
  background-color: rgb(157, 187, 213);
  text-shadow: 2px 2px 2px rgb(49, 108, 160);
  color: white;
  cursor: pointer;
}

.slide_button_box {
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.slide_button_box div {
  width: 20px;
  height: 20px;
  background: #a7a7a7;
  box-shadow: 4px 4px 4px #535353;
  cursor: pointer;
  border-radius: 100%;
}
.slide_button_box div:hover {
  width: 20px;
  height: 20px;
  background: rgb(236, 236, 236);
  cursor: pointer;
  border-radius: 100%;
}

.slide_button_box label div {
  outline: none;
  appearance: none;
  border: 0;
}

.button1,
.button2,
.button3 {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
  appearance: none;
  outline: none;
  border: none;
  display: none;
}
.slide_button_box > label > div.show {
  background: rgb(157, 187, 213);
  box-shadow: 2px 2px 2px rgb(83, 116, 145);
}
</style>
