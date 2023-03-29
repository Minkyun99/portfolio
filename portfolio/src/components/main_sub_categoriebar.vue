<template>
  <!-- eslint-disable -->
  <div class="moving_categoriebar_container">
    <div class="moving_categoriebar_innerbox">
      <img
        class="mainlogo"
        src="https://cdn.discordapp.com/attachments/1089496742019477526/1089516872480866345/logoshadow.png"
        alt=""
        @click="$router.push('/')"
      />
      <span class="moving_categoriebar_span">
        <button
          class="moving_categoriebar_button"
          @click="$router.push('/ohmyssul')"
        >
          홈
        </button>
      </span>
      <span class="moving_categoriebar_span">
        <button
          class="moving_categoriebar_button"
          @click="$router.push('/intro_myself')"
        >
          자기소개
        </button>
      </span>
      <span class="moving_categoriebar_span">
        <button class="moving_categoriebar_button" @click="scroll3()">
          ...
        </button>
      </span>
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

  methods: {
    scroll: function () {
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
  },
};
</script>

<style scroped>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.mainlogo {
  width: 200px;
  cursor: pointer;
  /* position: relative;
  left: -30%; */
}

.display {
  display: flex;
}

/* categorie */

.moving_categoriebar_container {
  padding: 20px 0px;
  z-index: 20;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(157, 187, 213);
  top: 0;
  align-items: center;
  font-family: "dohyeon";
  border-bottom: 4px solid white;
}

.absolute_fixed {
  opacity: 1;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  font-family: "dohyeon";
}

.moving_categoriebar_innerbox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  /* left: -10%; */
}

.moving_categoriebar_button {
  padding: 0px 80px;
  border: none;
  color: #fcb9aa;
  text-shadow: 2px 2px 2px #cd8b7c;
  cursor: pointer;
  font-family: "dohyeon";
  font-size: 1.5rem;
  background-color: transparent;
}

.moving_categoriebar_button:hover {
  color: white;
  transform: scale(1.2);
  border-radius: 5px;
  text-shadow: 1px 1px 2px black;
}
</style>
