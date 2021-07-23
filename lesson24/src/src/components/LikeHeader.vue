<template>
  <div>
    <!-- slotは全てのtemplateを送られる -->
    <!-- slotタグ内の記述は全てdefault値として扱われる(フォールバックコンテンツ) -->
    <slot>デフォルトのタイトル</slot>
    <hr />

    <!--
      複数slotを同時に使える
     -->
    <slot></slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>