<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title" />
      <pre>{{ eventData.title }}</pre>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      />
      <p>{{ typeof eventData.maxNumber }}</p>
    </div>
    <label for="host">主催者</label>
    <input id="host" type="text" v-model.trim="eventData.host" />
    <pre>{{ eventData.host }}</pre>
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
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "加藤",
      },
    };
  },
  components: {
    LikeHeader,
    Home,
    About,
  },
};
</script>