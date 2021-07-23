<template>
  <div>
    <LikeHeader v-slot:default="slotProps">
      <!-- <template v-slot:title="slotProps"> -->
      <p>{{ slotProps }}</p>
      <h2>こんにちは</h2>
      <!-- </template> -->
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