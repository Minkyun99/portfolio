<template>
  <div class="report1_container">
    <div style="display: flex; justify-content: center">
      <div class="report1_box">
        <div>
          <div
            class="notion-record-icon notranslate"
            role="button"
            tabindex="0"
          >
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 24px;
                width: 24px;
              "
            >
              <div
                style="
                  height: 21.6px;
                  width: 21.6px;
                  font-size: 21.6px;
                  line-height: 1;
                  margin-left: 0px;
                  color: black;
                "
              >
                <img
                  class="notion-emoji"
                  alt="🍻"
                  aria-label="🍻"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  style="
                    width: 100%;
                    height: 100%;
                    background: url('/images/emoji/twitter-emoji-spritesheet-64.d3a69865.png')
                      11.8644% 8.47458% / 6000% 6000%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            min-width: 0px;
            margin-left: 8px;
            width: 100%;
          "
        >
          <div
            class="notranslate"
            spellcheck="true"
            placeholder="내용을 입력하세요"
            data-content-editable-leaf="true"
            contenteditable="true"
            style="
              max-width: 100%;
              width: 100%;
              white-space: pre-wrap;
              word-break: break-word;
              caret-color: rgb(55, 53, 47);
              padding-left: 2px;
              padding-right: 2px;
            "
          >
            <span
              style="
                font-style: italic;
                font-weight: 600;
                background: rgba(251, 236, 221, 1);
              "
              data-token-index="0"
              class="notion-enable-hover"
              >'우리가 흔히 마시는 잭다니엘, 잭다니엘은 얼마나 벌었을까?'
              <br />
              '이제 하다 못해 루이비통에서 까지 술을 만든다?'
              <br />
              '양주보다 소주의 숙취가 더 쎄다?'
              <br />
              '무알콜 맥주를 미성년자가 마셔도 될까?' <br />
              '무알콜 맥주를 마시고 운전을 해도 될까?’ <br />
              '감기에 소주 반 잔, 체했을 때 소주 한 잔, 진짜일까?’</span
            >
          </div>

          <div class="notranslate">
            <span data-token-index="0" class="notion-enable-hover"
              >혹시 위 질문들 중 궁금한 것이 있나요?</span
            >
            <br />
            모르고 마시면 알콜향이지만, 알고 마시면 느껴지는 술의 맛과 향.
            <br />
            오마이술은 그냥 술만 마시는 사람을 “술잘알”로 만들어 드립니다.
            <br />
            다양한 취향을 가진 동물 회사원이 다양한 술과 맛집에 대한 찐 리뷰를
            알려주며, <br />쉽고 저렴하게 마시는 방법, 직접 체험한 맛집, 술과
            관련된 재미있는 썰까지 한번에 알려드립니다.
            <br />
            사람들의 호기심을 자극하는 질문들, 그 질문을 해결해주는 공간.
            <br />
            다양한 주류 콘텐츠로 새로운 술에 도전하는 사람들에게 주류 문화와
            제품에 대한 정보를 제공하는
            <br />
            뉴스레터 '오 마이 술!'입니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
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
.report1_box {
  display: flex;
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgba(55, 53, 47, 0.16);
  background-color: transparent;
  padding: 16px 16px 16px 12px;
  color: rgb(55, 53, 47);
}

.notion-record-icon .notranslate {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 0.25em;
  flex-shrink: 0;
}

.notranslate {
  max-width: 100%;
  width: 100%;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  text-align: left;
  margin: 10px 0px;
  letter-spacing: 1rem 0rem;
  line-height: 1.5;
  font-family: "jua";
}

.notion-enable-hover {
  font-weight: 600;
  line-height: 1.8;
  font-family: "dohyeon";
}
</style>
