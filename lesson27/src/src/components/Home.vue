<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'brown' }">
      {{ tmpData }}
    </p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase | lowerCase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
    };
  },
  //filters(グローバルも)もmethodsと同じで描画する度に実行される。
  filters: {
    //filters内部ではthisは使えない。
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    border(el, binding) {
      // thisはdirectives配下で使えない。
      // this.tmpData = "こんにちは";

      // boder幅追加
      el.style.borderWidth = binding.value.width;
      //boder色追加
      el.style.borderColor = binding.value.color;
      //引数からデータ追加
      el.style.borderStyle = binding.arg;
      //丸み
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      //影
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    },
  },
};
</script>