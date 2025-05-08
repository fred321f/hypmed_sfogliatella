<template>
  <div>
    <!-- Floating Chat Button -->
    <div class="position-fixed bottom-0 end-0 m-4 z-3">
      <button class="btn btn-success rounded-circle shadow-lg p-3" @click="showChat = !showChat">
        💬
      </button>
    </div>

    <!-- Chat Window -->
    <transition name="fade">
      <div v-if="showChat" class="chat-window position-fixed bottom-0 end-0 m-4 shadow rounded bg-white p-3"
        style="width: 300px; height: 400px">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <strong>YoginiaTella 🧘</strong>
          <button class="btn btn-sm btn-outline-secondary" @click="showChat = false">×</button>
        </div>

        <div class="chat-body overflow-auto mb-2" style="height: 290px">
          <div v-for="(msg, idx) in chatMessages" :key="idx" :class="msg.from === 'user' ? 'text-end' : 'text-start'">
            <span :class="msg.from === 'user' ? 'bg-success text-white' : 'bg-light'"
              class="d-inline-block rounded px-2 py-1 my-1">
              {{ msg.text }}
            </span>
          </div>
        </div>

        <div class="d-flex">
          <input class="form-control me-2" v-model="userMessage" type="text" placeholder="Type your message..."
            @keyup.enter="sendMessage" />
          <button class="btn btn-primary" @click="sendMessage">Send</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showChat = ref(false)
const userMessage = ref('')
const chatMessages = ref([
  { from: 'bot', text: 'Hello! How can I assist you today?' }
])

async function sendMessage() {
  if (!userMessage.value.trim()) return
  const message = userMessage.value.trim()
  chatMessages.value.push({ from: 'user', text: message })
  userMessage.value = ''

  try {
    const HUGGINGFACE_TOKEN = import.meta.env.VITE_HUGGINGFACE_TOKEN
    const MODEL = 'HuggingFaceH4/zephyr-7b-beta'

    const res = await fetch(`https://api-inference.huggingface.co/models/${MODEL}?wait_for_model=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUGGINGFACE_TOKEN}`
      },
      body: JSON.stringify({ inputs: message })
    })

    const data = await res.json()
    console.log("API response:", data)

    const reply = data?.generated_text || data?.[0]?.generated_text || data?.[0]?.generated_text?.[0] ||
      'Sorry, I couldn\'t understand that.'
    chatMessages.value.push({ from: 'bot', text: reply })
  } catch (err) {
    console.error(err)
    chatMessages.value.push({ from: 'bot', text: 'Something went wrong. Please try again later.' })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>