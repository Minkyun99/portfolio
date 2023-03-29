<template>
  <div class="introduce_container">
    <div class="introduce_text">Who is Minkyung?</div>
    <div class="another_help_container">
      <div class="intro_box1">
        <div class="another_help_box">
          <img
            src="../../public/imoge-unscreen.gif"
            alt=""
            style="width: 100%; height: 100%"
          />
          <!-- <div class="help_time">상담시간</div>
      <div class="help_time_info">09:00 - 17:00</div> -->
        </div>

        <div class="another_help_box">
          <h3 style="font-family: `jua`">이름</h3>
          <div class="intro_sub_text">김민경</div>
          <!-- <div class="help_time">상담시간</div>
      <div class="help_time_info">09:00 - 17:00</div> -->
        </div>
      </div>

      <div class="intro_box2">
        <div class="another_help_box">
          <h3 style="font-family: `jua`">생년월일</h3>
          <div class="intro_sub_text">1995.09.29</div>
          <!-- <div class="help_time">상담시간</div>
      <div class="help_time_info">24시간</div> -->
        </div>
        <div class="another_help_box">
          <h3 style="font-family: `jua`">학력</h3>
          <div class="intro_sub_text">부경대학교 졸업</div>
          <!-- <div class="help_time">답변시간</div>
      <div class="help_time_info">09:00 - 17:00</div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="quetion_container">
    <div class="introduce_text">자주 묻는 질문</div>
    <div id="staggered-list-demo">
      <div class="query_box">
        <input
          v-model="query"
          class="FAQ_input"
          placeholder="궁금하신 것을 입력해주세요."
        />
      </div>

      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <div class="helpdesk_container">
          <ul class="helpdesk_ul" style="list-style: none">
            <li
              class="helpdesk_li"
              v-for="(item, index) in computedList"
              v-bind:key="item.msg"
              v-bind:data-index="index"
            >
              <div class="helpdesk_li_div">
                <button
                  @click="item[`show${index}`] = !item[`show${index}`]"
                  class="helpdesk_button"
                >
                  <div class="helpdesk_li_div_button_div">
                    <span> </span>
                    <strong class="strong_text">{{ item.Q }}</strong>
                  </div>
                  <div class="hashtag">#{{ item.msg }}</div>
                </button>
              </div>
              <div id="demo">
                <transition name="fade">
                  <div v-if="item[`show${index}`]" class="answer_box">
                    <p>{{ item.answer }}</p>
                  </div>
                </transition>
              </div>
            </li>
          </ul>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      query: "",
      list: [
        {
          msg: "여행추천",
          Q: "여행지 추천은 어떻게 하는 건가요?",
          answer: "답변할게",
          show: false,
        },
        {
          msg: "ai사용법",
          Q: "ai사용은 어떻게 하셨나요?",
          answer: "답변할게2",
          show: false,
        },
        {
          msg: "회사소개",
          Q: "No_doubt는 무슨 뜻인가요?",
          answer: "답변할게2",
          show: false,
        },
        {
          msg: "아이디/비밀번호",
          Q: "아이디/비밀번호는 어떻게 찾나요?",
          answer: "답변할게2",
          show: false,
        },
        {
          msg: "닉네임 변경",
          Q: "닉네임 변경은 어떻게 하나요?",
          answer: "답변할게2",
          show: false,
        },
        {
          msg: "김민경",
          Q: "김민경은 누구인가요?",
          answer:
            "No_doubt의 서비스 기획, 제작하였으며 풀스택을 담당하고 있습니다.",
          show: false,
        },
        {
          msg: "김수환",
          Q: "김수환은 누구인가요?",
          answer:
            "No_doubt의 기둥, AI 딥러닝을 구축하였으며 데이터 사이언스를 담당하고 있습니다.",
          show: false,
        },
        {
          msg: "회사추천",
          Q: "오늘은 어디로 떠날까요?",
          answer: "답변할게2",
          show: false,
        },
      ],
    };
  },

  computed: {
    computedList: function () {
      var vm = this;
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    },
  },

  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },

    introduce_event: function () {
      let scrollpos = window.scrollY;
      const introduce_text = document.querySelector(".introduce_container");
      const add_class_on_scroll = (dom) => dom.classList.add("come-in");
      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos >= introduce_text.offsetHeight - 200)
          add_class_on_scroll(introduce_text);
      });
    },
  },
  components: {},
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
.introduce_container {
  width: 100%;
  background-color: #edeef0;
}

.quetion_container {
  width: 100%;
  background-color: #d1dfe8;
  padding: 5rem 0rem;
}
.query_box {
  font-family: "jua";
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.FAQ_input {
  margin: 10px;
  margin: 0px 10px;
  font-size: 1.5rem;
  width: 30%;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
}

.introduce_text {
  margin: 4rem 0rem 3rem 0rem;
  display: inline-block;
  font-family: "dohyeon";
  font-size: 3rem;
  font-weight: 600;
  color: #e9a8ab;
}

.helpdesk_container {
  margin-right: 70px;
  display: table;
  position: relative;
  left: -3rem;
  width: 100%;
  height: 100%;
  min-height: 100%;
  table-layout: fixed;
  text-align: left;
  box-sizing: border-box;
}

.helpdesk_li {
  display: inline-block;
  width: 25%;
  margin-left: 120px;
  margin-bottom: 10px;
  vertical-align: top;
}

.helpdesk_li_div {
  margin: 0 15px;
  height: 142px;
}

.helpdesk_button {
  display: block;
  width: 100%;
  padding: 22px 21px;
  text-align: left;
  background-color: #c2d5e3;
  border: 2px solid #edeef0;

  border-radius: 10px;
  box-shadow: 3px 3px 3px #edeef0;
  cursor: pointer;
}

.strong_text {
  color: black;
  font-size: medium;
  letter-spacing: 0.5px;
  font-family: "dohyeon";
}
.helpdesk_button:hover {
  transform: scale(1.1);
  background-color: #edeef0;
  transition: 0.2s linear;
}

.helpdesk_li_div_button_div {
  display: flex;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  text-overflow: ellipsis;
  line-height: 24px;
  max-height: 48px;
  height: 5rem;
  max-height: 5em;
  line-height: 1rem;
}

span {
  display: inline-block;
  width: 15px;
  height: 23px;
  margin: 0px 5px 5px 0px;
  background: url(https://ssl.pstatic.net/static/help/new_help/img/svg/faq_q.svg)
    no-repeat;
  background-size: 15px 23px;
  /* vertical-align: top; */
}
.hashtag {
  cursor: pointer;
  padding: 3px 5px;
  display: inline-block;
  background-color: #ffc400;
  color: #00227e;
  border: none;
  border-radius: 3px;
  font-family: "jua";
  font-weight: 200;
  font-size: medium;
  box-shadow: 3px 3px 2px #f39945;
}

.hashtag:hover {
  background-color: #00227e;
  color: #ffc400;
  transform: scale(1.1);
  transition: 0.2s linear;
  box-shadow: 3px 3px 2px #001348;
}

.another_help_container {
  width: 100%;
  justify-content: space-evenly;
  margin: 40px 0px;
}

.intro_box1,
.intro_box2 {
  display: flex;
  justify-content: center;
}
.another_help_box {
  margin: 2rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: normal;
  vertical-align: top;
  border: 4px solid #a3b6c5;
  background-color: #edeef0;
  box-shadow: 3px 3px 3px #5f7d94;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  padding: 22px 21px;
}

.another_help_box:hover {
  background-color: #a3b6c5;

  color: white;
  transform: scale(1.05);
  transition: 0.2s linear;
}

.intro_sub_text {
  display: inline-block;
  font-family: "jua";
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 12px;
  border-bottom: 2px solid #5f7d94;
}

.help_time {
  font-family: "jua";
  font-size: medium;
  font-weight: 200;
  margin-bottom: 5px;
}

.help_time_info {
  font-family: "jua";
  font-size: medium;
  font-weight: 100;
  color: #008e37;
}

.answer_box {
  width: 60%;
  height: 3rem;
  font-family: "jua";
  font-size: 1.5rem;
  padding: 1.5rem;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: none;

  /* background-color: rgba(0, 0, 0, 0.4); */
}
.modal.show {
  display: block;
}

.chating_screen {
  width: 100%;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 3px 3px 3px black;
}
</style>
