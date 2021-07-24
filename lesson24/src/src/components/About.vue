<template>
  <div>
    <h1>About</h1>
    <input type="text" />
  </div>
</template>

<script>
export default {
  activated() {
    //keep-aliveにてコンポーネントが選択状態で呼び出される。
    console.log("Activated");
  },
  deactivated() {
    //keep-aliveにてコンポーネントの選択状態が解除された際に呼び出される。
    console.log("Deactivated");
  },
};
</script>