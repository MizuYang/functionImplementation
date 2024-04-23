<script setup>
import { ref } from 'vue'
// console.log(eval((1+2)*3-(4+15))) // eslint-disable-line
const data = ref([
  '', '', '清除', '倒退',
  '%', '(', ')', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '－',
  '1', '2', '3', '＋',
  '±', '0', '.', '＝'
])
const calc = ref('')
const result = ref('')

function calcFn (item) {
  if (item === '清除') {
    calc.value = ''
    result.value = ''
    return
  } else if (item === '倒退') {
    calc.value = calc.value.slice(0, -1)
    return
  }
  // 先區分是數字還是運算符號
  const mark = ['＋', '－', '×', '÷', '%', '(', ')', '.', '±', '＝']
  const canChangeMark = ['＋', '－', '×', '÷', '%']
  const isMark = mark.includes(item)
  if (isMark) {
    // 符號
    const lastItem = calc.value.at(-1)
    console.log('前一個item', lastItem)
    console.log('這次的item', item)

    // 如果前面有數字, 才可以加入運算符號
    if (!calc.value.split('').length && item !== '(') return

    console.log('執行', item)
    console.log(canChangeMark.includes(lastItem))

    if (item === '(') {
      console.log('進入 (')
      // 處理: (
      // 如果前面是 '＋', '－', '×', '÷', '%' 或空值，才可以加入'('
      if (canChangeMark.includes(lastItem) || lastItem === undefined) {
        // 如果前面沒有烙單的 '('，才可以加入'('
        let left = 0
        let right = 0
        for (let i = 0; i < calc.value.length; i++) {
          if (calc.value[i] === '(') {
            left++
          } else if (calc.value[i] === ')') {
            right++
          }
        }
        const isPass = left === right

        if (isPass) {
          calc.value += item
        }
      }
    } else if (item === ')') {
      console.log('進入 )')
      // 處理: )
      // 如果前一個是數字，而且前面有烙單的'('，才可以加入')'
      let left = 0
      let right = 0
      for (let i = 0; i < calc.value.length; i++) {
        if (calc.value[i] === '(') {
          left++
        } else if (calc.value[i] === ')') {
          right++
        }
      }
      const isPass = left > right
      if (!mark.includes(lastItem) && left > 0 && isPass) {
        calc.value += item
      }
    } else if (item === '±') {
      // 處理: ±
      // 如果前一個是數字才可以使用
      if (!mark.includes(lastItem) && lastItem !== undefined) {
        // 如果先前的數字是負數，則轉換成正數
        if (calc.value.at(-2) === '負') {
          const data = calc.value.split('')
          console.log('前個數字是負數', data)
          const num = data.at(-1)
          data.splice(-2, 2)
          data.push(num)
          calc.value = data.join('')
        } else {
          console.log('前個數字是正數')
          const data = calc.value.split('')
          const num = data.at(-1)
          data.splice(-1, 1)
          data.push(String(`負${num}`))
          calc.value = data.join('')
        }
      }
    } else if (item === '.') {
      console.log('進入 .')
      // 處理: .
      // 如果前一個是數字，而且前面沒有小數點，才可以加入'.'
      if (!mark.includes(lastItem) && lastItem !== undefined) {
        // 如果前一個是數字，而且前面沒有小數點，才可以加入'.'
        // 找出當前的位置~前一個運算符號的位置, 並使用 slice 取出
        // 再使用 includes 判斷是否有小數點
        // 有小數點就不能加入
        const curIndex = calc.value.length
        let lastIndex = 0
        for (let i = curIndex; i >= 0; i--) {
          if (mark.includes(calc.value[i])) {
            lastIndex = i
            break
          }
        }
        const ary = calc.value.slice(lastIndex, curIndex)
        const isPass = !ary.includes('.')
        if (isPass) calc.value += item
      }
    } else if (item === '＝') {
      // 將 '＋', '－', '×', '÷', '負' 轉換成 '+', '-', '*', '/', '-'
      const calcData = calc.value.replace(/＋/g, '+')
        .replace(/－/g, '-')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/負/g, '-')
      result.value = eval(calcData) // eslint-disable-line
    } else if (canChangeMark.includes(item) && canChangeMark.includes(lastItem)) {
      console.log("這次和上次都是 '＋', '－', '×', '÷', '%'")

      // 處理: 這次和上次都是 '＋', '－', '×', '÷', '%'
      // 若前面是 '(', ')', '.' 則中斷
      const stop = ['(', ')', '.']
      if (stop.includes(lastItem)) return
      // 若前個字元是'＋', '－', '×', '÷', '%'，則可以更換符號
      const data = calc.value.split('')
      data[data.length - 1] = item
      calc.value = data.join('')
    } else if (canChangeMark.includes(item)) {
      // 處理: 這次是 '＋', '－', '×', '÷', '%'
      console.log("這次是 '＋', '－', '×', '÷', '%'")

      if (lastItem === undefined) return
      if (lastItem === '(') return

      calc.value += item
    } else {
      calc.value += item
    }
  } else {
    // 處理:數字
    calc.value += item
  }
}
</script>

<template>
<div class="d-flex justify-content-center align-items-center"
     style="height:95vh;">
  <div class="計算機外殼 p-5">

    <!-- 計算機面板 -->
    <div class="text-end pt-10 pb-5 pe-5 mx-5 mt-5 mb-10"
         style="background-color:#ff00c817;">
      <!-- 公式區塊 -->
      <div>
        <p style="letter-spacing: 4px;">
          <!-- (1+2)*3-(4+5) -->
          {{ calc }}
        </p>
      </div>

      <!-- 計算結果區塊 -->
      <div>
        <p style="font-size:45px;
                  letter-spacing: 4px;
                  line-height: 1.2;">
          <!-- 123456 -->
          <!-- {{ tempNum || result || 0 }} -->
          {{ result || 0 }}
        </p>
      </div>
    </div>

    <!-- 計算機按鈕 -->
    <ul class="row row-cols-4 g-2 text-center">
      <template v-for="item in data" :key="item">
        <li class="col">
          <button type="button"
                  class="btn btn-計算機按鈕"
                  @click="calcFn(item)">
            {{ item }}
          </button>
        </li>
      </template>
    </ul>
  </div>
</div>
</template>

<style lang='scss' scope>
.計算機外殼 {
  width: 500px;
  background-color: #f3f3f3;
}
.btn-計算機按鈕 {
  width: 100px;
  height: 70px;
  background-color: #fff;
  border: none;

  &:hover {
    background-color: #cbc9c9;
  }
  &:active {
    background-color: #dcdbdb;
  }
}
</style>
