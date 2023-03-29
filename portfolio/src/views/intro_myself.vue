<template>
  <main_sub_categoriebar></main_sub_categoriebar>
  <div class="intro_container">
    <table>
      <tr>
        <th rowspan="4" style="width: 200px">
          <img
            class="my_img"
            src="https://cdn.discordapp.com/attachments/1022221610033348619/1088710453905076345/637976735504756007.gif"
            alt=""
          />
        </th>
        <th class="intro_title">이름</th>
        <td class="intro_content">김민경</td>
      </tr>
      <tr>
        <th class="intro_title">생년월일</th>
        <td class="intro_content">1995.09.29</td>
      </tr>
      <tr>
        <th class="intro_title">이메일</th>
        <td class="intro_content">kyung865821@gmail.com</td>
      </tr>
      <tr>
        <th class="intro_title">직무</th>
        <td class="intro_content">
          <span class="want_job">그로스마케팅</span
          ><span class="want_job">프론트엔드</span
          ><span class="want_job">백엔드</span>
        </td>
      </tr>
    </table>
  </div>
  <div class="intro_container2">
    <div class="edu_title">학력</div>
    <table>
      <tr>
        <th class="intro_title2">2014.03</th>
        <td class="intro_content2">부경대학교 입학</td>
      </tr>
      <tr>
        <th class="intro_title2">2022.02</th>
        <td class="intro_content2">부경대학교 졸업</td>
      </tr>
    </table>
  </div>

  <div class="intro_container2">
    <div class="edu_title">학력</div>
    <table>
      <tr>
        <th class="intro_title2">2014.03</th>
        <td class="intro_content2">부경대학교 입학</td>
      </tr>
      <tr>
        <th class="intro_title2">2022.02</th>
        <td class="intro_content2">부경대학교 졸업</td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import main_sub_categoriebar from "../components/main_sub_categoriebar.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    main_sub_categoriebar,
  },
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

.intro_container {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  width: 80%;
}
.my_img {
  border: 2px solid black;
  border-radius: 5px;
  margin-right: 1rem;
  width: 200px;
  padding: 5px 10px;
}

.intro_title {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  font-family: "dohyeon";
  text-align: right;
  padding-right: 1rem;
}

.intro_content {
  border-bottom: 1px solid black;
  text-align: left;
  padding-left: 20px;
  font-family: "dohyeon";
}

.want_job {
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 1.5rem;
  font-family: "dohyeon";
}

.want_job:hover {
  cursor: pointer;
  background-color: #8fcaca;
  border: 2px solid #d4f0f0;
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 1.5rem;
  font-family: "dohyeon";
}

/* table2 */
.intro_container2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0rem;
}
.edu_title {
  font-family: "dohyeon";
  text-align: left;
  margin: 3rem 0rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-bottom: 2px solid black;
  width: 80%;
  font-family: "dohyeon";
  font-size: 30px;
}

.intro_title2 {
  font-family: "dohyeon";
  width: 15rem;
  /* border-right: 1px solid black; */
  border-bottom: 1px solid black;
  padding: 1rem 0rem;
}

.intro_content2 {
  font-family: "dohyeon";
  border-bottom: 1px solid black;
  text-align: left;
  padding-left: 2rem;
  cursor: pointer;
}

.intro_content2:hover {
  transform: scale(1.1);
  transition: 0.1s linear;
  color: white;
  background-color: #8fcaca;
}
</style>
