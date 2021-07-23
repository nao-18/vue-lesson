<template>
  <div>
    <LikeHeader>
      <!-- <template v-slot:title="slotProps"> -->

      <!--
        v-slot:属性名は 「#属性名」に置き換えられる。
        defaultのみ場合のslot="slotプロパティ名"は 「#default="slotプロパティ名"」になる。
       -->
      <template #[title]="slotProps">
        <p>{{ slotProps }}</p>
        <h2>こんにちは</h2>
      </template>
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
      title: "title",
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