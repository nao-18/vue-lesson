import { createApp } from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

const app = createApp(App);
app.component('LikeNumber', LikeNumber);
// app.directive('border', {
//   bind(el, binding, vnode) {
//     //ディレクティブが初めて対象の要素に紐づいた時。
//   },
//   // inserted(el, binding, vnode) {
//   //   // 親Nodeに挿入された時
//   // },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新される度。子コンポーネントが更新される前。
//   },
//   // componentUpdated(el, binding, vnode, oldVnode) {
//   //   // コンポーネントが更新される度。子コンポーネントが更新された後。
//   // },
//   // unbind(el, binding, vnode) {
//   //   // ディレクティブが紐づいている要素から取り除かれた時。
//   // },
// });

app.directive('border', function(el, binding) {
  // boder幅追加
  el.style.borderWidth = binding.value.width;
  //boder色追加
  el.style.borderColor = binding.value.color;
  //引数からデータ追加
  el.style.borderStyle = binding.arg;
  //丸み
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem"
  }
  //影
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)"
  }
});
app.mount('#app');
