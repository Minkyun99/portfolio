<template>
  <article class="art2">
    <div class="projects" data-anchor="projects" id="projects">
      <div class="text-wrap">
        <h2>Projects</h2>
        <p>마우스를 클릭해 링크를 확인해보세요!</p>
      </div>
      <div class="ul_display">
        <ul class="project_li">
          <li class="project project-1 ripple load-bg">
            <a
              href="https://github.com/SooBookE/NoDoubt/tree/kmk"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>프로젝트 NoDoubt</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span
                  >VUE.js 워크프레임으로 작업한 AI 여행지 추천
                  프로젝트입니다.</span
                >
              </div>
            </a>
          </li>
          <li class="project project-2 ripple load-bg">
            <a
              href="https://github.com/SooBookE/proj_4"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>프로젝트 Oh MY SSUL</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span>Vue.js로 구현한 TensorFlow.js AI 분석 모델입니다. </span>
              </div>
            </a>
          </li>
          <li class="project project-3 ripple load-bg">
            <a
              href="https://github.com/SooBookE/proj_personal"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>AI ChatBot(ChatGPT)</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span
                  >ChatGPT와 텔레그램 봇을 연동시킨 습작입니다. KoGPT도
                  사용해봤습니다.</span
                >
              </div>
            </a>
          </li>
          <li class="project project-4 ripple load-bg">
            <a
              href="https://github.com/SooBookE/prj_chat"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>웹 채팅(Vue.js)</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span>Vue.js와 Socket.io로 구현한 웹 채팅입니다.</span>
              </div>
            </a>
          </li>
          <li class="project project-5 ripple load-bg">
            <a
              href="https://github.com/SooBookE/project-bbs-"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>웹 게시판 구현</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span>HTML, CSS, JS로만 구현한 게시판페이지입니다.</span>
              </div>
            </a>
          </li>
          <li class="project project-6 ripple load-bg">
            <a href="#" class="project-content" target="_blank">
              <h3 class="project-title"><span>페이지 스크롤 저장</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span>개인적으로 구현한 스크롤 저장 기능입니다.</span>
              </div>
            </a>
          </li>
          <li class="project project-7 ripple load-bg">
            <a
              href="https://url.kr/qvkoyd"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>웹툰 어플 프로토타입</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span
                  >피그마로 플로우차트/와이어프레임 단계를 거쳐 만든
                  프로토타입입니다.</span
                >
              </div>
            </a>
          </li>
          <li class="project project-8 ripple load-bg">
            <a
              href="https://github.com/SooBookE/portfolio"
              class="project-content"
              target="_blank"
            >
              <h3 class="project-title"><span>포트폴리오</span></h3>
              <span class="project-underline"></span>
              <div class="project-description">
                <span>지금 보고 계신 이 사이트의 깃허브 주소입니다.</span>
              </div>
            </a>
          </li>
          <!-- <li class="project project-9 ripple load-bg">
            <a href="#" class="project-content" target="_blank">
              <h3 class="project-title"><span>프로젝트 NoDoubt</span></h3>
              <span class="project-underline"></span>
              <div class="project-description"><span>진행중..!</span></div>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {};
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

.art2 {
  width: 100%;
  background-color: #dcd1cc;
  padding-bottom: 5rem;
}

.ul_display {
  margin-left: 12%;
}

a {
  background-size: 0.05em 4px, 0.05em 4px, 4px 4px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 90%, 100% 90%, 0 90%;
  color: #000;
  transition: 1s ease;
  text-decoration: none;
  appearance: none;
  outline: none;
}

a:focus,
a:hover {
  color: #fff;
  background-size: 0.05em 4px, 0.05em 4px, 4px 4px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 90%, 100% 90%, 0 90%;
  text-decoration: none;
  appearance: none;
  outline: none;
}

.project_li {
  position: relative;
  clear: both;
}

.project {
  /* width: 33.33%; */
  position: relative;
  height: 350px;
  float: left;
  display: table;
  width: 40%;
  margin: 1rem;
  border: 5px solid #d49e83;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #93644f;
}

.project_li:after {
  content: "";
}

.project.active .project-content,
.project:not(.no-hover):hover .project-content {
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
}

.project.active .project-image,
.project:not(.no-hover):hover .project-image {
  filter: blur(3px);
  -webkit-filter: blur(3px);
}

.project-content {
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
}

.no-link,
.no-link:focus,
.no-link:hover,
.project-content:focus,
.project-content:hover,
a.project-content {
  text-shadow: none;
}

.project-title {
  font-size: 3em;
  margin: 0.25em 0;
  text-align: center;
  color: #ffffff;
  font-size: 2.4em;
  overflow-y: hidden;
}

.project-underline {
  border-top: 2px solid #fff;
  display: block;
  width: 0;
  margin: 11px auto;
  -webkit-transition: all 0.75s;
  transition: all 0.55s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  position: relative;
}

.project-description span {
  -webkit-transform: translateY(125%);
  -moz-transform: translateY(125%);
  -ms-transform: translateY(125%);
  -o-transform: translateY(125%);
  transform: translateY(125%);
  will-change: transform;
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.52, 0.01, 0.16, 1);
  -moz-transition: -moz-transform 0.45s cubic-bezier(0.52, 0.01, 0.16, 1);
  transition: transform 0.45s cubic-bezier(0.52, 0.01, 0.16, 1);
  -webkit-transition-duration: 0.75s;
  -moz-transition-duration: 0.75s;
  transition-duration: 0.75s;
  display: block;
}

.project.active .project-underline,
.project:not(.no-hover):hover .project-underline {
  width: 4.5em;
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.project.active .project-description span,
.project:not(.no-hover):hover .project-description span {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}

.project-description {
  text-align: center;
  color: #fff;
  position: relative;
  overflow-y: hidden;
}

.project-description span {
  font-family: "dohyeon";
  -webkit-transition-delay: 50ms;
  transition-delay: 50ms;
}

.project-1 {
  background-color: #d4f0f0;
  height: 350px;
  width: 82.5%;
}

.project-2 {
  background-color: #8fcaca;
  width: 82.5%;
}

.project-3 {
  background-color: #cce2cb;
}

.project-4 {
  background-color: #b6cfb6;
}

.project-5 {
  background-color: #97c1a9;
}

.project-6 {
  background-color: #a2e1db;
}

.project-7 {
  background-color: #55cbcd;
}

.project-8 {
  background-color: #abdee6;
}

.project-9 {
  background-color: #ecd5e3;
}

.rank {
  color: #b5b5b5;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9em;
}

.rank-value {
  color: var(--highlight);
  background: 0 0;
}

.rank-value:hover {
  background-position: 0 90%, 100% 90%, 0 110%;
}

.text-wrap {
  max-width: 790px;
  margin: 0 auto;
}

.text-wrap p {
  font-size: 1.2em;
  line-height: 1.8em;
  padding: 0 0 1.5em;
  font-weight: 300;
}

p.text-intro {
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 400;
}

.about {
  clear: both;
}

.ripple {
  overflow: hidden;
}

.animate-text {
  opacity: 0;
  transform: translateY(-70px);
  -webkit-transition: all 8s cubic-bezier(0.23, 1, 0.03, 1);
  -webkit-transition: all 8s cubic-bezier(0.23, 1, 0.03, 1.005);
  -moz-transition: all 8s cubic-bezier(0.23, 1, 0.03, 1.005);
  -o-transition: all 8s cubic-bezier(0.23, 1, 0.03, 1.005);
  transition: all 8s cubic-bezier(0.23, 1, 0.03, 1.005);
}

.come-in {
  opacity: 1;
  transform: translateY(0);
}

.intro,
.text-wrap {
  width: 90%;
}

h3 {
  font-size: 2.8em;
}

h2 {
  font-family: "dohyeon";
  color: #e9a8ab;
  font-size: 4em;
  padding: 2em 0 0.3em 0;
}

p.text-intro {
  font-size: 1.3em;
}

.nav-menu {
  display: none;
}

.menu {
  display: block;
}

.nav-wrapper {
  padding: 2.2em 0;
  line-height: 1em;
  position: fixed;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  z-index: 999;
  box-shadow: 0 3px 3px #ccc;
}

@media all and (max-width: 660px) {
  h3 {
    font-size: 2.4em;
  }
}

@media all and (max-width: 570px) {
  .project {
    width: 100%;
  }

  h3 {
    font-size: 1.8em;
  }

  .project-content {
    padding: 9%;
    vertical-align: top;
  }

  .project-title {
    font-size: 2em;
    margin: 0.13em 0;
    text-align: left;
  }

  .project-description {
    text-align: left;
  }

  .project-underline {
    margin: 11px 0;
  }
}

@media all and (max-width: 400px) {
  h2 {
    font-size: 2.5em;
  }

  .text-wrap p {
    font-size: 0.95em;
  }

  p.text-intro {
    font-size: 1.2em;
  }

  .intro {
    padding: 6em 0;
  }
}

@media all and (max-width: 350px) {
  .project {
    position: relative;
    width: 100%;
    height: 200px;
  }
}

.moveTopBtn {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 4rem;
  height: 4rem;
  color: #0e0e0e;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 3px 3px 10px #000;
}

.moveTopBtn span {
  font-size: 2em;
  font-weight: bold;
}

span {
  font-family: "dohyeon";
}

p {
  font-family: "dohyeon";
}
</style>
