<template>
  <!-- eslint-disable -->
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <button class="close" @click="$emit('close')">Close</button>
      <div class="chat_container">
        <div class="chat_screen" v-for="i in message_arr">{{ i }}</div>
      </div>
      <div class="input_button_box">
        <input
          type="text"
          v-model="message"
          @keyup.enter="chat()"
          autocomplete="off"
        />
        <button class="chat_button" @click="chat()">입력</button>
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      chating: false,
      message: '',
      message_arr: []
    }
  },

  created() {
    this.$socket.on('chat_message'),
      (mes) => {
        console.log(mes)
        const chat_screen = document.querySelector('.chat_screen')
        window.scrolllTo(0, chat_screen.scrollHeight)
        this.message_arr.push(mes.data)
      }
  },

  methods: {
    chat: function () {
      if (this.message) {
        this.$socket.emit('chat_message', { message: this.message })
        this.message_arr.push(this.message)
        this.message = ''
      }
    },

    openModal() {
      this.chating = true
    },
    closeModal() {
      this.chating = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    }
  }
}
</script>

<style scoped>
.modal.modal-overlay {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  z-index: 30;
  top: 45%;
  left: 80%;
  width: 20%;
  height: 45%;
  background: white;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter-active,
.modal-leave-active.modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter,
.modal-leave-to.modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.close {
  display: inline-block;
}

.modal-footer {
  display: flex;
}

.chat_container {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 80%;
  height: 80%;
}

.chat_screen {
  width: 80%;
  text-align: right;
}
</style>
