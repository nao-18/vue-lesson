<template>
  <div>
    <!-- slotは全てのtemplateを送れる -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>