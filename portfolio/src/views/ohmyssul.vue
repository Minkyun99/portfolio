<template>
  <div class="display_container">
    <div class="onmyssul_title">Oh My SSUL 마케팅</div>
    <div class="onmyssul_title">최종보고서</div>
    <report_total></report_total>
  </div>
</template>

<script>
/* eslint-disable */

import report_total from "../components/report_total.vue";

import axios from "axios";
export default {
  name: "app",
  data() {
    return {};
  },

  methods: {},
  components: { report_total },
};
</script>

<style>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.onmyssul_title {
  color: #e9a8ab;

  font-family: "dohyeon";
  font-size: 3rem;
  margin: 1rem 0rem;
}

.display_container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
