<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase | lowerCase }}</p>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber.js";

export default {
  mixins: [tokyoNumber],
};
</script>