<template>
  <!-- eslint-disable -->
  <!-- 제일 바깥 쪽 컨테이너 -->
  <div id="scroll"></div>
  <div class="main_container">
    <!-- 카테고리 -->
    <categories></categories>
    <main_sub_categoriebar></main_sub_categoriebar>
    <keep-alive>
      <mainImage class="mainImage_component"> </mainImage>
    </keep-alive>

    <!-- 검색창&로그인 컨테이너 -->
    <div id="scroll1"></div>
    <introduce></introduce>

    <!-- 서비스 소개 -->
    <div id="scroll2"></div>
    <chart></chart>
    <div id="scroll3"></div>
    <project></project>
    <review></review>

    <!-- 사이드 바 -->
    <sidebar></sidebar>
  </div>
</template>

<script>
/* eslint-disable */
import categories from "../components/categories.vue";
import chart from "../components/chart.vue";
import introduce from "../components/introduce.vue";
import select_slider from "../components/select_slider.vue";
import chating from "../components/chating.vue";
import sidebar from "../components/sidebar.vue";
import mainImage from "../components/mainImage.vue";
import side_categories from "../components/side_categories.vue";
import review from "../components/review.vue";
import main_sub_categoriebar from "../components/main_sub_categoriebar.vue";
import project from "../components/project.vue";

export default {
  name: "app",
  data() {
    return {
      select: "side_categories_button",
      chating_screen: false,
    };
  },

  methods: {
    handleScroll: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    openchat_screen: function () {
      this.chating_screen = true;
    },
    closechat_screen: function () {
      this.chating_screen = false;
    },
  },
  components: {
    categories,
    introduce,
    select_slider,
    chating,
    sidebar,
    chart,
    mainImage,
    side_categories,
    review,
    main_sub_categoriebar,
    project,
  },
};
</script>

<style>
/*font*/
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

body {
  width: 100%;
  height: auto;
}

.main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/*상단 메인*/
/* .home_main {
  width: 100%;
  background-color: aliceblue;
} */

/* video {
  width: 100%;
  height: auto;
} */
</style>
