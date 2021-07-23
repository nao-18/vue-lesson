<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    //propsはdataのようにスクリプトで扱える
    halfNumber() {
      return this.totalNumber / 2;
    },
  },
  methods: {
    increment() {
      // 親のイベントを発火させるのが$emit
      this.$emit("my-click", this.totalNumber + 1);
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>