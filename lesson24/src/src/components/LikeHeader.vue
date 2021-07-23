<template>
  <div>
    <!-- slotは全てのtemplateを送られる -->
    <!-- slotタグ内の記述は全てdefault値として扱われる(フォールバックコンテンツ) -->

    <!--
      名前付きslotで親コンポーネントで定義したslot名を
      子コンポーネントで「name=属性名」で受け取る。
     -->
    <slot name="title" :user="user"></slot>
    <slot></slot>
    <hr />

    <!--
      複数slotを同時に使える
     -->
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "jack",
        lastName: "donald",
      },
    };
  },
};
</script>