<template>
  <div>
    <!-- Floating Chat Button -->
    <div class="position-fixed bottom-0 end-0 m-4 z-3">
      <button class="btn btn-success rounded-circle shadow-lg p-3" @click="showChat = !showChat"
        aria-label="Toggle yoga assistant">
        🧘
      </button>
    </div>

    <!-- Chat Window -->
    <transition name="fade">
      <div v-if="showChat" class="chat-window position-fixed bottom-0 end-0 m-4 shadow rounded bg-white p-3"
        style="width: 350px; height: 450px" role="dialog" aria-labelledby="chat-title">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <strong id="chat-title">YogaGinia 🧘</strong>
          <button class="btn btn-sm btn-outline-secondary" @click="showChat = false" aria-label="Close chat">×</button>
        </div>

        <div class="chat-body overflow-auto mb-2 p-2" style="height: 330px" role="log" aria-live="polite">
          <div v-for="(msg, idx) in chatMessages" :key="idx" :class="msg.from === 'user' ? 'text-end' : 'text-start'">
            <span :class="msg.from === 'user' ? 'bg-success text-white' : 'bg-light'"
              class="d-inline-block rounded px-3 py-2 my-1"
              :aria-label="msg.from === 'user' ? 'You said:' : 'Assistant said:'">
              <!-- Render HTML content when it's provided -->
              <div v-if="msg.isHtml" v-html="msg.text"></div>
              <template v-else>{{ msg.text }}</template>
            </span>
          </div>
          <div v-if="isTyping" class="text-start">
            <span class="bg-light d-inline-block rounded px-3 py-2 my-1">
              <small>Assistant is typing...</small>
            </span>
          </div>
        </div>

        <div class="d-flex">
          <input class="form-control me-2" v-model="userMessage" type="text"
            placeholder="Ask about yoga poses, classes, etc..." @keyup.enter="sendMessage" aria-label="Message input"
            :disabled="isTyping" />
          <button class="btn btn-primary" @click="sendMessage" aria-label="Send message"
            :disabled="isTyping || !userMessage.trim()">Send</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showChat = ref(false)
const userMessage = ref('')
const isTyping = ref(false)
const chatMessages = ref([])

// Store fetched data from MongoDB
const studioData = ref({
  teachers: [],
  activities: []
})

// Initialize with a greeting message and fetch data from MongoDB
onMounted(async () => {
  const initialMessage = "Hello! I'm your YogaTella assistant. How can I help you with your yoga practice today? You can ask about poses, courses, workshops, meditation, or our teachers."
  chatMessages.value.push({ from: 'bot', text: initialMessage })

  // Load data directly if API endpoints aren't working
  loadSampleData()

  // Attempt to fetch data from API endpoints
  await fetchStudioData()
})

// Function to load sample data from the paste you provided
function loadSampleData() {
  // Sample activities based on the paste you provided
  studioData.value.activities = [
    {
      _id: "680f81ad27434f93d3be5ad9",
      name: "Vinyasa",
      type: "Yoga",
      overview: "Energetic, flowing class linking breath and movement. Ideal for all levels.",
      description: "A dynamic Vinyasa flow class that synchronizes breath with movement.",
      day: "Monday",
      time: "09:00",
      level: "all",
      teacherID: "680d07d7400112c435c36073",
      imgURL: "v1746872878/Vinyasa-for-Beginners-Program_Ekhart_Yoga_1613559623_ofacn"
    },
    {
      _id: "681a012d1a2693e8c7549da4",
      name: "Forrest yoga",
      type: "Yoga",
      overview: "Deep core-focused class with breath work and long holds. Builds resilience.",
      description: "Forrest Yoga focuses on deep core engagement, breath work, and mindfulness.",
      day: "Wednesday",
      time: "10:00",
      level: "intermediate",
      teacherID: "680d07d7400112c435c36073",
      imgURL: "v1746872901/Increased-Strength-and-Flexibility_rxwftk.jpg",
      highlights: true
    },
    {
      _id: "681a012d1a2693e8c7549da5",
      name: "Katonah yoga",
      type: "Yoga",
      overview: "Geometric alignment and Taoist theory blend. Smart sequences for body-mind.",
      description: "A unique blend of Katonah Yoga combining geometric alignment, breath and Taoist theory.",
      day: "Friday",
      time: "18:00",
      level: "intermediate",
      teacherID: "680d07d7400112c435c36072",
      imgURL: "v1746872892/Kari_76_jnn8zv.jpg"
    },
    {
      _id: "681a012d1a2693e8c7549daa",
      name: "Basis of meditation",
      type: "Meditation",
      overview: "Beginner-friendly intro to meditation covering breath, posture, and stillness.",
      description: "Learn the essential techniques of meditation with a clear and supportive approach.",
      day: "Tuesday",
      time: "09:00",
      level: "beginner",
      teacherID: "680d07d7400112c435c36071",
      imgURL: "v1746873501/yoga-meditation-turning-point-tampa_rsf9nf.jpg"
    },
    {
      _id: "681a01811a2693e8c7549dc4",
      name: "History of yoga",
      type: "Seminar",
      overview: "Travel through time and tradition to understand yoga's powerful past.",
      description: "Explore the rich and fascinating history of yoga from its ancient roots to modern practice.",
      day: "15/05/2025",
      time: "18:00",
      teacherID: "680d07d7400112c435c36075",
      imgURL: "v1746870825/wellcomecollection-2ed2c61b-65c3-46dd-adb1-8a23cd9f600a_bm"
    },
    {
      _id: "681a02b31a2693e8c7549e1d",
      name: "Handstand Workshop",
      type: "Workshop",
      overview: "Turn your world upside down with playful, strong inversion skills.",
      description: "Dive into the art of inversions in this dynamic Handstand workshop.",
      day: "Saturday",
      time: "15:00",
      guestID: "68190b7703c140e6c7ed92c1",
      teacherID: "680d07d7400112c435c36074",
      imgURL: "v1746871416/how-to-do-handstand_rawjl1.jpg",
      highlights: true,
      guest: "Ilaria Lila"
    }
  ]

  // Sample teachers - since we don't have the teacher data structure, creating a minimal sample
  studioData.value.teachers = [
    { _id: "680d07d7400112c435c36071", name: "Marco" },
    { _id: "680d07d7400112c435c36072", name: "Kari" },
    { _id: "680d07d7400112c435c36073", name: "Denise" },
    { _id: "680d07d7400112c435c36074", name: "Emanuele" },
    { _id: "680d07d7400112c435c36075", name: "Sara" },
    { _id: "6810b7d9075135a9d23237a8", name: "Amadio" }
  ]
}

// Function to fetch data from MongoDB
async function fetchStudioData() {
  try {
    // Fetch teachers
    const teachersResponse = await fetch('/api/teachers')
    if (teachersResponse.ok) {
      const teachersData = await teachersResponse.json()
      if (teachersData && teachersData.length > 0) {
        studioData.value.teachers = teachersData
        console.log('Teachers loaded from API:', studioData.value.teachers.length)
      }
    }

    // Fetch activities
    const activitiesResponse = await fetch('/api/activities')
    if (activitiesResponse.ok) {
      const activitiesData = await activitiesResponse.json()
      if (activitiesData && activitiesData.length > 0) {
        studioData.value.activities = activitiesData
        console.log('Activities loaded from API:', studioData.value.activities.length)
      }
    }
  } catch (error) {
    console.error('Error fetching studio data:', error)
    // API fetch failed, already using sample data as fallback
  }
}

function sendMessage() {
  if (!userMessage.value.trim() || isTyping.value) return
  const message = userMessage.value.trim()

  // Add user message to chat display
  chatMessages.value.push({ from: 'user', text: message })

  // Clear input field and show typing indicator
  userMessage.value = ''
  isTyping.value = true

  // Simulate response delay for realistic feel
  setTimeout(async () => {
    // Process message and get response
    const botReply = await processUserMessage(message)

    // Add response to chat
    chatMessages.value.push(botReply)
    isTyping.value = false
  }, 800) // Realistic typing delay
}

async function processUserMessage(message) {
  const lowerMsg = message.toLowerCase()

  // Check for teacher-related queries
  if (
    lowerMsg.includes('teacher') ||
    lowerMsg.includes('instructor') ||
    lowerMsg.includes('who teaches')
  ) {
    return await handleTeacherQuery(lowerMsg)
  }

  // Check for course/class/activity-related queries
  if (
    lowerMsg.includes('course') ||
    lowerMsg.includes('class') ||
    lowerMsg.includes('activity') ||
    lowerMsg.includes('offerings') ||
    lowerMsg.includes('schedule') ||
    lowerMsg.includes('what do you offer')
  ) {
    return await handleCourseQuery(lowerMsg)
  }

  // Check for workshop-related queries
  if (
    lowerMsg.includes('workshop') ||
    lowerMsg.includes('special event')
  ) {
    return await handleWorkshopQuery(lowerMsg)
  }

  // Check for meditation-related queries
  if (
    lowerMsg.includes('meditation') ||
    lowerMsg.includes('meditate')
  ) {
    return await handleMeditationQuery(lowerMsg)
  }

  // Check for seminar-related queries
  if (
    lowerMsg.includes('seminar') ||
    lowerMsg.includes('lecture') ||
    lowerMsg.includes('talk')
  ) {
    return await handleSeminarQuery(lowerMsg)
  }

  // Handle other yoga-related queries with the standard responses
  return {
    from: 'bot',
    text: getIntelligentYogaResponse(message)
  }
}

async function handleTeacherQuery(query) {
  // If no teachers data available, use fallback
  if (!studioData.value.teachers || studioData.value.teachers.length === 0) {
    return {
      from: 'bot',
      text: "We have several experienced yoga teachers at YogaTella. You can visit our Teachers page to learn more about them."
    }
  }

  // Check if asking for a specific teacher
  const teacherNames = studioData.value.teachers.map(t => t.name ? t.name.toLowerCase() : '')
  let specificTeacher = null

  for (const name of teacherNames) {
    if (name && query.includes(name.toLowerCase())) {
      specificTeacher = studioData.value.teachers.find(
        t => t.name && t.name.toLowerCase() === name
      )
      break
    }
  }

  // If asking about a specific teacher
  if (specificTeacher) {
    // Find activities taught by this teacher
    const teacherActivities = studioData.value.activities.filter(
      activity => activity.teacherID === specificTeacher._id
    )

    let teacherInfo = `<strong>${specificTeacher.name}</strong> is one of our wonderful teachers. `

    if (specificTeacher.specialties) {
      teacherInfo += `They specialize in ${specificTeacher.specialties.join(', ')}. `
    }

    if (specificTeacher.description) {
      teacherInfo += specificTeacher.description.substring(0, 150) + '...'
    } else if (specificTeacher.bio) {
      teacherInfo += specificTeacher.bio.substring(0, 150) + '...'
    }

    // Add information about classes taught by this teacher
    if (teacherActivities.length > 0) {
      teacherInfo += `<br><br><strong>${specificTeacher.name} teaches:</strong><ul style="margin-top: 5px; margin-bottom: 5px; padding-left: 20px;">`

      teacherActivities.slice(0, 3).forEach(activity => {
        teacherInfo += `<li><strong>${activity.name}</strong> - ${activity.day} at ${activity.time}</li>`
      })

      if (teacherActivities.length > 3) {
        teacherInfo += `<li>...and ${teacherActivities.length - 3} more activities</li>`
      }

      teacherInfo += "</ul>"
    }

    teacherInfo += `<a href="/teachers/${encodeURIComponent(specificTeacher.name)}" target="_blank">View ${specificTeacher.name}'s full profile</a>`

    return {
      from: 'bot',
      text: teacherInfo,
      isHtml: true
    }
  }

  // If asking for all teachers
  let teachersList = "<strong>Our YogaTella Teachers:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

  studioData.value.teachers.forEach(teacher => {
    if (teacher.name) {
      teachersList += `<li><a href="/teachers/${encodeURIComponent(teacher.name)}" target="_blank">${teacher.name}</a></li>`
    }
  })

  teachersList += "</ul>Visit our <a href='/teachers' target='_blank'>Teachers page</a> to learn more about all of them."

  return {
    from: 'bot',
    text: teachersList,
    isHtml: true
  }
}

async function handleCourseQuery(query) {
  // Group activities by type
  const groupedActivities = {
    Yoga: studioData.value.activities.filter(activity => activity.type === "Yoga"),
    Meditation: studioData.value.activities.filter(activity => activity.type === "Meditation"),
    Workshop: studioData.value.activities.filter(activity => activity.type === "Workshop"),
    Seminar: studioData.value.activities.filter(activity => activity.type === "Seminar")
  }

  // If asking about all offerings/courses
  if (
    query.includes('all') ||
    query.includes('different type') ||
    query.includes('what kind') ||
    query.includes('what courses') ||
    query.includes('can you provide')
  ) {
    let coursesHtml = "<strong>At YogaTella, we offer a variety of courses:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

    // Yoga classes
    coursesHtml += `<li><strong>Yoga Classes:</strong> We offer ${groupedActivities.Yoga.length} different yoga classes including Vinyasa, Forrest, Katonah, and Power yoga.</li>`

    // Meditation classes
    coursesHtml += `<li><strong>Meditation Sessions:</strong> We have ${groupedActivities.Meditation.length} meditation offerings for all levels, from beginners to advanced practitioners.</li>`

    // Workshops
    coursesHtml += `<li><strong>Workshops:</strong> We host various workshops such as Handstand Workshop, Face Yoga, and Holistic Nutrition.</li>`

    // Seminars
    coursesHtml += `<li><strong>Seminars:</strong> Educational seminars on topics like History of Yoga, Ayurveda, and integrating yoga into everyday life.</li>`

    coursesHtml += "</ul><strong>Would you like details about a specific type of course?</strong>"

    return {
      from: 'bot',
      text: coursesHtml,
      isHtml: true
    }
  }

  // Check if asking about yoga classes specifically
  if (query.includes('yoga class')) {
    let yogaHtml = "<strong>Our Yoga Classes:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

    groupedActivities.Yoga.forEach(activity => {
      // Find teacher name
      const teacher = studioData.value.teachers.find(t => t._id === activity.teacherID)
      const teacherName = teacher ? teacher.name : "our instructors"

      yogaHtml += `<li><strong>${activity.name}</strong> (${activity.day} at ${activity.time}) - ${activity.overview} Taught by ${teacherName}.</li>`
    })

    yogaHtml += "</ul>Visit our <a href='/activities' target='_blank'>Activities page</a> for more details."

    return {
      from: 'bot',
      text: yogaHtml,
      isHtml: true
    }
  }

  // Check if asking about a specific level
  const levels = ['beginner', 'intermediate', 'advanced', 'all']
  let specificLevel = null

  for (const level of levels) {
    if (query.includes(level)) {
      specificLevel = level
      break
    }
  }

  if (specificLevel) {
    const levelActivities = studioData.value.activities.filter(
      activity => activity.level === specificLevel
    )

    if (levelActivities.length === 0) {
      return {
        from: 'bot',
        text: `We have several classes suitable for ${specificLevel} level practitioners, though they might not be specifically labeled as such. Would you like to see our full range of activities?`,
      }
    }

    let levelHtml = `<strong>${specificLevel.charAt(0).toUpperCase() + specificLevel.slice(1)} Level Activities:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>`

    levelActivities.forEach(activity => {
      // Find teacher name
      const teacher = studioData.value.teachers.find(t => t._id === activity.teacherID)
      const teacherName = teacher ? teacher.name : "our instructors"

      levelHtml += `<li><strong>${activity.name}</strong> (${activity.type}) - ${activity.day} at ${activity.time} with ${teacherName}</li>`
    })

    levelHtml += "</ul>"

    return {
      from: 'bot',
      text: levelHtml,
      isHtml: true
    }
  }

  // Default course response
  let coursesHtml = "<strong>Our Regular Offerings:</strong><br/>"
  coursesHtml += "We offer various classes throughout the week:<br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

  // Add a few yoga classes
  const yogaSample = groupedActivities.Yoga.slice(0, 3)
  yogaSample.forEach(activity => {
    coursesHtml += `<li><strong>${activity.name}</strong> - ${activity.day} at ${activity.time} (${activity.level} level)</li>`
  })

  // Add a meditation class if available
  if (groupedActivities.Meditation.length > 0) {
    const meditation = groupedActivities.Meditation[0]
    coursesHtml += `<li><strong>${meditation.name}</strong> - ${meditation.day} at ${meditation.time} (${meditation.level} level)</li>`
  }

  coursesHtml += "</ul>Visit our <a href='/activities' target='_blank'>Activities page</a> for our complete schedule."

  return {
    from: 'bot',
    text: coursesHtml,
    isHtml: true
  }
}

async function handleWorkshopQuery(query) {
  const workshops = studioData.value.activities.filter(activity => activity.type === "Workshop")

  if (workshops.length === 0) {
    return {
      from: 'bot',
      text: "We regularly host special workshops at YogaTella. Please check our website for upcoming workshops."
    }
  }

  let workshopsHtml = "<strong>Our Workshops:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

  workshops.forEach(workshop => {
    // Find teacher name
    const teacher = studioData.value.teachers.find(t => t._id === workshop.teacherID)
    const teacherName = teacher ? teacher.name : "our instructors"

    const guestInfo = workshop.guest ? ` featuring ${workshop.guest}` : ''

    workshopsHtml += `<li><strong>${workshop.name}</strong> - ${workshop.day} at ${workshop.time} with ${teacherName}${guestInfo}<br/><em>${workshop.overview}</em></li>`
  })

  workshopsHtml += "</ul>Visit our <a href='/activities' target='_blank'>Activities page</a> for more details."

  return {
    from: 'bot',
    text: workshopsHtml,
    isHtml: true
  }
}

async function handleMeditationQuery(query) {
  const meditations = studioData.value.activities.filter(activity => activity.type === "Meditation")

  if (meditations.length === 0) {
    return {
      from: 'bot',
      text: "We offer various meditation sessions at YogaTella. Meditation is a powerful practice for mental clarity and inner peace. For beginners, we recommend starting with our 'Basis of Meditation' class. Please check our schedule for times."
    }
  }

  let meditationHtml = "<strong>Our Meditation Offerings:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

  meditations.forEach(meditation => {
    // Find teacher name
    const teacher = studioData.value.teachers.find(t => t._id === meditation.teacherID)
    const teacherName = teacher ? teacher.name : "our instructors"

    meditationHtml += `<li><strong>${meditation.name}</strong> - ${meditation.day} at ${meditation.time} (${meditation.level} level) with ${teacherName}<br/><em>${meditation.overview}</em></li>`
  })

  meditationHtml += "</ul>Visit our <a href='/activities' target='_blank'>Activities page</a> for more details."

  return {
    from: 'bot',
    text: meditationHtml,
    isHtml: true
  }
}

async function handleSeminarQuery(query) {
  const seminars = studioData.value.activities.filter(activity => activity.type === "Seminar")

  if (seminars.length === 0) {
    return {
      from: 'bot',
      text: "We regularly host educational seminars on various yoga and wellness topics. Please check our website for upcoming seminars."
    }
  }

  let seminarHtml = "<strong>Our Seminars:</strong><br/><ul style='margin-top: 5px; margin-bottom: 5px; padding-left: 20px;'>"

  seminars.forEach(seminar => {
    // Find teacher name
    const teacher = studioData.value.teachers.find(t => t._id === seminar.teacherID)
    const teacherName = teacher ? teacher.name : "our instructors"

    seminarHtml += `<li><strong>${seminar.name}</strong> - ${seminar.day} at ${seminar.time} with ${teacherName}<br/><em>${seminar.overview}</em></li>`
  })

  seminarHtml += "</ul>Visit our <a href='/activities' target='_blank'>Activities page</a> for more details."

  return {
    from: 'bot',
    text: seminarHtml,
    isHtml: true
  }
}

// Standard yoga knowledge base response function
function getIntelligentYogaResponse(message) {
  const lowerMsg = message.toLowerCase()

  // Comprehensive knowledge base for yoga questions
  const yogaKnowledgeBase = {
    greetings: [
      "Namaste! How can I assist with your yoga journey today?",
      "Hello! What aspect of yoga would you like to explore today?",
      "Welcome to YogaTella! How may I help you with your practice?"
    ],

    poses: {
      general: "Yoga has hundreds of poses (asanas), each with unique benefits. Some essential poses include Downward-Facing Dog, Warrior I & II, Tree Pose, Child's Pose, and Mountain Pose. Would you like to know about a specific pose?",
      downward_dog: "Downward-Facing Dog (Adho Mukha Svanasana) strengthens the arms and legs while stretching the shoulders, hamstrings, calves, and feet. It's an excellent pose for overall conditioning.",
      warrior: "Warrior poses build strength, stability, and focus. Warrior I opens the chest while strengthening the legs, Warrior II builds stamina, and Warrior III improves balance and posture.",
      tree: "Tree Pose (Vrksasana) improves balance and concentration while strengthening the ankles, calves, and thighs. It also opens the hips and stretches the inner thighs and groin muscles.",
      childs: "Child's Pose (Balasana) is a restful pose that gently stretches your lower back, hips, thighs, and ankles. It's perfect for beginners and can be done between more challenging poses.",
      cobra: "Cobra Pose (Bhujangasana) strengthens the spine while opening the chest and shoulders. It helps improve posture and can relieve mild back pain.",
      mountain: "Mountain Pose (Tadasana) improves posture, balance, and body awareness. It's the foundation for all standing poses and helps establish proper alignment.",
    },

    beginners: {
      general: "Welcome to yoga! For beginners, I recommend our Gentle Flow or Yoga Basics classes. Wear comfortable clothing, bring water, and arrive 10-15 minutes early to meet your instructor. Remember, yoga is a personal journey—there's no competition.",
      tips: "As a beginner, focus on proper alignment rather than depth in poses. Don't hesitate to use props like blocks and straps, and always listen to your body—never push through pain.",
      gear: "For your first class, you'll need comfortable clothing that allows movement, a yoga mat (we have rentals available), and water. Optional items include a small towel and a light layer for the final relaxation.",
    },

    meditation: {
      general: "Meditation is a powerful practice for mental clarity and inner peace. We offer guided meditation sessions daily. For beginners, start with 5-10 minutes of breath awareness meditation, gradually increasing the duration as you become more comfortable.",
      techniques: "We teach various meditation techniques including mindfulness, loving-kindness, body scan, and mantra meditation. Each approach offers unique benefits for mental and emotional wellbeing.",
      benefits: "Regular meditation can reduce stress, improve focus, enhance emotional regulation, promote better sleep, and cultivate greater self-awareness and compassion.",
    },

    breathing: {
      general: "Pranayama (breathing exercises) is essential in yoga. Try Equal Breathing: inhale for 4 counts, exhale for 4 counts. For stress relief, try 4-7-8 breathing: inhale for 4, hold for 7, exhale for 8. Practice these techniques for 5 minutes daily.",
      ujjayi: "Ujjayi breath, or 'victorious breath,' involves slightly constricting the back of the throat to create a gentle ocean sound while breathing. It helps focus the mind and warm the body during practice.",
      kapalabhati: "Kapalabhati (Skull Shining Breath) is an energizing breathing technique involving forceful exhalations and passive inhalations. It's excellent for clearing the mind and increasing energy.",
    },

    benefits: {
      general: "Yoga offers numerous benefits including improved flexibility, strength, posture, and balance. It reduces stress, enhances mental clarity, boosts immunity, and promotes better sleep. Regular practice can also help manage chronic conditions like back pain and anxiety.",
      physical: "Physical benefits of yoga include increased flexibility, improved muscle strength and tone, enhanced balance, better posture, and protection from injury. It can also improve cardiovascular health and athletic performance.",
      mental: "Mentally, yoga reduces stress, calms the mind, improves concentration, enhances body awareness, and can help manage anxiety and depression. Many practitioners report greater mental clarity and peace.",
    },

    default: [
      "Thank you for your question. At YogaTella, we believe in personalized guidance for every student. Would you like to know more about our class offerings where our instructors can address this in person?",
      "I appreciate your interest in yoga. Our skilled instructors would be happy to explore this topic more deeply during one of our classes. Is there a particular aspect of this you're curious about?",
      "That's a great question about yoga. Our instructors at YogaTella can provide personalized guidance during our classes. Is there something specific about yoga practice you'd like to know more about?"
    ]
  };

  // Greeting patterns
  if (/^(hi|hello|hey|greetings|namaste).*/i.test(lowerMsg)) {
    return getRandomResponse(yogaKnowledgeBase.greetings)
  }

  // Pose inquiries
  if (lowerMsg.includes('pose') || lowerMsg.includes('asana')) {
    if (lowerMsg.includes('child')) return yogaKnowledgeBase.poses.childs
    if (lowerMsg.includes('warrior')) return yogaKnowledgeBase.poses.warrior
    if (lowerMsg.includes('tree')) return yogaKnowledgeBase.poses.tree
    if (lowerMsg.includes('downward') || lowerMsg.includes('dog')) return yogaKnowledgeBase.poses.downward_dog
    if (lowerMsg.includes('cobra')) return yogaKnowledgeBase.poses.cobra
    if (lowerMsg.includes('mountain')) return yogaKnowledgeBase.poses.mountain
    return yogaKnowledgeBase.poses.general
  }

  // Beginner information
  if (lowerMsg.includes('begin') || lowerMsg.includes('start') || lowerMsg.includes('new')) {
    if (lowerMsg.includes('tip')) return yogaKnowledgeBase.beginners.tips
    if (lowerMsg.includes('gear') || lowerMsg.includes('equipment') || lowerMsg.includes('need')) return yogaKnowledgeBase.beginners.gear
    return yogaKnowledgeBase.beginners.general
  }

  // Breathing
  if (lowerMsg.includes('breath') || lowerMsg.includes('pranayama')) {
    if (lowerMsg.includes('ujjayi')) return yogaKnowledgeBase.breathing.ujjayi
    if (lowerMsg.includes('kapalabhati')) return yogaKnowledgeBase.breathing.kapalabhati
    return yogaKnowledgeBase.breathing.general
  }

  // Benefits
  if (lowerMsg.includes('benefit') || lowerMsg.includes('good for')) {
    if (lowerMsg.includes('physical') || lowerMsg.includes('body')) return yogaKnowledgeBase.benefits.physical
    if (lowerMsg.includes('mental') || lowerMsg.includes('mind')) return yogaKnowledgeBase.benefits.mental
    return yogaKnowledgeBase.benefits.general
  }

  // Default response
  return getRandomResponse(yogaKnowledgeBase.default)
}

// Helper to get random response from array for variety
function getRandomResponse(responseArray) {
  const index = Math.floor(Math.random() * responseArray.length)
  return responseArray[index]
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

.chat-window {
  z-index: 1050;
  border: 1px solid #e0e0e0;
}

/* Message bubble styling */
.chat-body span {
  max-width: 85%;
  word-wrap: break-word;
}

.bg-success {
  background-color: #28a745 !important;
}
</style>