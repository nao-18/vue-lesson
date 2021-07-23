<template>
  <div>
    <!-- slotは全てのtemplateを送られる -->
    <!-- slotタグ内の記述は全てdefault値として扱われる(フォールバックコンテンツ) -->
    <slot>デフォルトのタイトル</slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>