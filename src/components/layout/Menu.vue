<script setup>

</script>

<template>
  <nav>
    <ul class="px-2 py-5"
        id="menu">
      <li class="">
        <RouterLink to=''
                    class="d-block w-100 ps-3 py-2"
                    active-class='active'>
          錨點跳轉
        </RouterLink>
      </li>
      <li class="">
        <RouterLink to=''
                    class="d-block w-100 ps-3 py-2"
                    active-class='active'>
          錨點跳轉
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang='scss' scope>
nav {
  position: fixed;
  width:200px;
  min-height: 100vh;
  background-color:#535353;
}
ul > li:nth-child(1) {
  border-top: 1px solid #fff;
}
ul > li {
  border-bottom: 1px solid #fff;
}
ul > li > a {
  color: #fff;

  &:hover {
    color: #fff;
    background-color:#6f6f6f;

  }
}
</style>
