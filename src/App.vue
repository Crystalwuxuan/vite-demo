<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useUser } from "./store/user.ts"; //.vue后缀要写，.ts不用写
import { storeToRefs } from "pinia";
import axios from "axios";
import { nextTick, onMounted } from "vue";
import * as echarts from "echarts";

onMounted(() => {
  nextTick(() => {
    let divElement = document.querySelector(".chart-box") as HTMLElement;
    let chart = echarts.init(divElement);
    chart.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    });
  });
});
const userStore = useUser(); //必须在函数内调用
const changeUser = () => {
  userStore.setUser({ name: "Green" });
};
const { user: u } = storeToRefs(userStore);
const testProxy = () => {
  axios.post("/api/user/login", {
    account: "admin",
    password: "approve12456.",
  });
};
</script>

<template>
  <div class="test">
    <button @click="changeUser">变更{{ userStore.user }}</button>
    <button @click="testProxy">测试发请求代理</button>
  </div>
  <div class="chart-box">

  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
