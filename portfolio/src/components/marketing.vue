<template>
  <form action="" class="AI_form">
    <div class="inputbox_color">
      <div class="inputbox_design">
        <div class="AI_search_container">
          <select class="AI_search_select">
            <option value="마케팅" selected>Marketing</option>
            <option value="마케팅">그로스 마케팅</option>
            <option value="마케팅">퍼포먼스 마케팅</option>
          </select>
          <!-- <select class="AI_search_select" placeholder="연령대를 선택해주세요.">
            <option value="연령대">연령대</option>
            <option value="연령대">20대</option>
            <option value="연령대">30대</option>
            <option value="연령대">40대</option>
            <option value="연령대">50대</option>
            <option value="연령대">60대 이상</option>
          </select>
          <select
            class="AI_search_select"
            placeholder="선호활동을 선택해주세요."
          >
            <option value="선호활동">선호활동</option>
            <option value="선호활동">집</option>
            <option value="선호활동">집 밖</option>
          </select> -->
          <button type="submit" class="AI_submit_button">입력</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      thema: "dark",
    };
  },
  methods: {},
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

/*AI 검색*/
.inputbox_color {
  background-color: transparent;
}
.inputbox_design {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  color: black;
  border: 2px solid black;
  border-top: none;
  box-shadow: 5px 3px 3px gray;
}

.AI_search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white 0.3;
}

select {
  font-family: "jua";
  font-size: larger;
  margin: 10px 0px;
  width: 200px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  border: none;
}

option {
  background-color: transparent;
}

.AI_submit_button {
  width: 150px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-family: "jua";
  font-size: larger;
  color: rgb(124, 213, 240);
  border-radius: 20px;
}

.AI_submit_button:hover {
  transform: translateY(-5px) scale(1.1);
  background-color: rgb(124, 213, 240);
  border-radius: 10px;
  color: white;
  transition: linear 0.2s;
}
</style>
