export const tokyoNumber = {
  data() {
    return {
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
};