<template>
  <div>
    <LikeHeader>
      <!--
        親から子へ特定のslotへ送りたい場合は、
        親コンポーネントの送りたいtemplateへ「v-slot:引数」で定義する。
        必ず、tepmlateタグで囲わないといけない。
       -->
      <h1>ホゲhごえ</h1>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <p>ああああああ</p>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

// コンポーネント名やtemplate内のタグ、vueファイル名は"パスカルケース"で書く。
export default {
  data() {
    return {
      number: 10,
    };
  },
  components: {
    LikeHeader,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>