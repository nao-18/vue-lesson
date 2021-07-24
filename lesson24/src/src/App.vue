<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>

    <!--
      動的コンポーネント
     -->
    <!-- keep-aliveタグで切り替えのデータを保持できる。 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!--
      <About v-if="currentComponent === 'About'"></About>
      <Home v-if="currentComponent === 'Home'"></Home>
    -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

// コンポーネント名やtemplate内のタグ、vueファイル名は"パスカルケース"で書く。
export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
    };
  },
  components: {
    LikeHeader,
    Home,
    About,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>