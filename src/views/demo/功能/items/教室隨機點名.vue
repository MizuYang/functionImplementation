<script setup>
import { ref } from 'vue'

// data
const students = ref([])
// 等待點名的學生名單
const waitRollcallStudents = ref([])
const timer = ref(null)
const rollcallIng = ref(false)

init()

function getStudents () {
  const studentsNumber = 30

  const data = []

  for (let i = 0; i < studentsNumber; i++) {
    data[i] = {
      index: i,
      name: `學生${i + 1}`,
      isRollcalled: false
    }
  }
  students.value = data
}
function startRollcall () {
  if (!waitRollcallStudents.value.length) return

  rollcallIng.value = true

  timer.value = setTimeout(() => {
    // 隨機從等待點名名單抽一名學生
    const student = waitRollcallStudents.value[Math.floor(Math.random() * waitRollcallStudents.value.length)]

    // 將該學生標記為已點名
    students.value[student.index].isRollcalled = true

    // 將該學生從等待點名名單中移除
    const delIdx = waitRollcallStudents.value.findIndex(item => item.index === student.index)
    waitRollcallStudents.value.splice(delIdx, 1)

    // 如果還有學生在等待點名，則繼續點名
    if (waitRollcallStudents.value) startRollcall()
  }, 100)
}
function getWaitRollcall () {
  waitRollcallStudents.value = JSON.parse(JSON.stringify(students.value))
}
function stopRollcall () {
  rollcallIng.value = false
  clearTimeout(timer.value)
}
function init () {
  getStudents()
  getWaitRollcall()
  rollcallIng.value = false
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center px-15"
       style="height:95vh;">
    <div class="container">

      <div class="text-center mb-10">
        <button type="button"
                class="btn btn-rollcall border"
                @click="startRollcall"
                :disabled="rollcallIng">
          開始隨機點名
        </button>
        <button type="button"
                class="btn btn-rollcall border mx-10"
                @click="stopRollcall"
                :disabled="!rollcallIng||!waitRollcallStudents.length">
          停止點名
        </button>
        <button type="button"
                class="btn btn-rollcall border mx-10"
                @click="init">
          重置點名清單
        </button>
      </div>

      <ul class="row row-cols-5 g-5">
        <template v-for="student in students" :key="student.name">
          <li class="col">
            <p class="text-center border px-5 py-10"
               :class="{'rollcall-finish':student.isRollcalled}">
              {{ student.name }}
            </p>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang='scss' scope>
.rollcall-finish {
  background-color: #b300ff2c;
  // 漸層色
  background-image: linear-gradient(45deg, #b300ff9f, #ff00ff09);
}
.btn-rollcall {
  background-color: #fee6ff;
  &:hover {
    background-color: #f9d6ff;
  }
  &:active {
    background-color: #f0c6ff;
  }
}
</style>
