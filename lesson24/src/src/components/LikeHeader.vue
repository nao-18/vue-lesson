<template>
  <div>
    <slot name="title" :user="user"></slot>
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