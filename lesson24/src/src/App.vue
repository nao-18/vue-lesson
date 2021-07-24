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
      <p>{{ eventData.maxNumber }}</p>
    </div>
    <label for="host">主催者</label>
    <input id="host" type="text" v-model.trim="eventData.host" />
    <pre>{{ eventData.host }}</pre>
    <label for="detail">イベントの内容</label>
    <textarea
      id="detail"
      cols="30"
      rows="10"
      v-model="eventData.detail"
    ></textarea>
    <p style="white-space: pre fdsa">{{ eventData.detail }}</p>
    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>
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
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
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