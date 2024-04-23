<script setup>
import { ref, computed } from 'vue'
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

const computedData = computed(() => (calc.value.replace(/負/g, '-')))

function calcFn (item) {
  // 如果已經有算出答案了, 則初始化
  if (result.value) {
    calc.value = ''
    result.value = ''
  }

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
  const lastItem = calc.value.at(-1)
  const isMark = mark.includes(item)
  if (isMark) {
    // 符號

    // 如果前面有數字, 才可以加入運算符號
    if (!calc.value.split('').length && item !== '(') return

    if (item === '(') {
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
        // 檢查前一個數字是不是小數
        // 如果是小數，就要連整個小數一起轉換正負數
        // 如果不是小數，就只轉換最後一個數字
        /*
          1. 找出目前索引
          2. 找到前一個運算符號的索引
          3. 使用 slice 取出前一個運算符號到目前的數字
          4. 使用 includes 判斷是否有小數點
          5. 有小數點就抓出小數點的索引
          6. 將整個小數複製下來並轉換正負數
          7. 使用 splice 刪除整個小數
          8. 將轉換正負後的小數加回去
        */
        const data = calc.value.split('')
        textHandler()

        function textHandler () {
          // 先前的數字到符號以前若有"負"的話就是負號
          // 將整個負號的數字取出 (可能是多位數或小數的負號)
          // 2＋3.1
          const curIndex = calc.value.length
          let lastIndex = 0
          for (let i = curIndex; i >= 0; i--) {
            if (mark.includes(calc.value[i]) && calc.value[i] !== '.') {
              lastIndex = i + 1
              break
            }
          }
          const number = calc.value.slice(lastIndex, curIndex)
          // 如果先前的數字是負數，則轉換成正數
          if (calc.value.at(number.length * -1) === '負') {
            const data = calc.value.split('')
            data.splice(number.length * -1, 1) // 把 "負" 刪掉
            calc.value = data.join('')
          } else {
            data.splice(number.length * -1, number.length)
            data.push(String(`負${number}`))
            calc.value = data.join('')
          }
        }
      }
    } else if (item === '.') {
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
      result.value = simplifyNumber(eval(calcData).toFixed(13)) // eslint-disable-line

      // 處理 小數後面如果是0，例: 0.000 => 0、1.000 => 1
      function simplifyNumber (numStr) {
        const num = parseFloat(numStr)
        const simplifiedNumStr = num.toFixed(13).replace(/\.?0+$/, '')
        return parseFloat(simplifiedNumStr)
      }
    } else if (canChangeMark.includes(item) && canChangeMark.includes(lastItem)) {
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

      if (lastItem === undefined) return
      if (lastItem === '(') return

      calc.value += item
    } else {
      calc.value += item
    }
  } else {
    // 處理:數字

    // 防止數字變成 00
    if (lastItem === '0' && item === '0') return
    if (lastItem === '0') {
      // 防止 01、02、03~09
      const data = calc.value.split('')
      data.splice(-1, 1)
      data.push(item)
      calc.value = data.join('')
    } else {
      calc.value += item
    }
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
          {{ computedData }}
        </p>
      </div>

      <!-- 計算結果區塊 -->
      <div>
        <p style="font-size:45px;
                  letter-spacing: 4px;
                  line-height: 1.2;">
          <!-- 123456 -->
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
