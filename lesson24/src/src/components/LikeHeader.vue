<template>
  <div>
    <slot :user="user"></slot>
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