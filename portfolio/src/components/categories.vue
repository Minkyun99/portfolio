<template>
  <!-- eslint-disable -->
  <div class="categorie_container">
    <!-- <div
      @click="$router.push('/')"
      style="margin-bottom: 15px; cursor: pointer"
    >
      <img class="logo" src="../../public/logo.png" alt="" />
    </div> -->
    <div class="categorie_innerbox">
      <button class="categorie_button" @click="scroll()">홈</button>

      <button class="categorie_button" @click="scroll1()">자기소개</button>

      <button class="categorie_button" @click="scroll2()">수행능력</button>

      <button class="categorie_button" @click="scroll3()">프로젝트</button>
    </div>
    <chating @close="closemypage_screen" v-if="chating_screen"> </chating>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    scroll: function () {
      const scroll = document.getElementById("scroll");
      scroll.scrollIntoView({ behavior: "smooth" });
    },
    scroll1: function () {
      const scroll1 = document.getElementById("scroll1");
      scroll1.scrollIntoView({ behavior: "smooth" });
    },
    scroll2: function () {
      const scroll2 = document.getElementById("scroll2");
      scroll2.scrollIntoView({ behavior: "smooth" });
    },
    scroll3: function () {
      const scroll3 = document.getElementById("scroll3");
      scroll3.scrollIntoView({ behavior: "smooth" });
    },
    scroll_fixed: function () {
      let scrollpos = window.scrollY;
      const categorie_container = document.querySelector(
        ".categorie_container"
      );
      const add_categories_class_scroll = (dom) =>
        dom.classList.add("absolute_fixed");
      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos >= categorie_container.offsetHeight + 300)
          add_categories_class_scroll(categorie_container);
      });
    },
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

/* categorie */
.categorie_container {
  z-index: 50;
  width: 50px;
  height: 470px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 1%;
  top: 30%;
  padding: 1rem;
  font-family: "dohyeon";
  border: 4px solid rgb(212, 218, 230);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgb(133, 133, 133);
}

.logo {
  width: 200px;
}
.categorie_innerbox {
  /* display: flex; */
  justify-content: right;
  height: 50px;
}

.categorie_button {
  border: none;
  border-bottom: 3px solid rgb(66, 125, 184);
  padding: 20px 0px;
  background-color: transparent;
  color: rgb(66, 125, 184);
  cursor: pointer;
  font-family: "dohyeon";
  font-size: large;
  margin: 8px 30px 0px 30px;
  padding-bottom: 8px;
}

.categorie_button:hover {
  color: black;
  transition: linear 0.2s;
  border-bottom: 3px solid black;
  transform: scale(1.1);
  transition: 0.2s linear;
}

/*로그인*/
.login_container {
  align-items: center;
  margin-left: 50px;
}
.login_button,
.join_button {
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "dohyeon";
  font-weight: 100;
  font-size: x-large;
}
.login_button:hover,
.join_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: white;
}
/*로그인 박스*/
.login_container {
  display: flex;
  justify-content: right;
}

.mypage_container {
  position: relative;
  bottom: 1rem;
  left: 2rem;
}

/*버튼 효과 기본 css
*/
.frame {
  width: 100%;
  text-align: center;
  margin-right: 0.5rem;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "dohyeon";
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/*nickname button*/
/* 7 */
.btn-7 {
  cursor: pointer;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
  margin-bottom: 1rem;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7:before {
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: rgba(251, 75, 2, 1);
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}
/*AI 재학습 버튼*/
.btn-12 {
  position: relative;
  right: -2rem;
  bottom: 2.2rem;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
