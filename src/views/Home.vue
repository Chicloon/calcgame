<template>
  <!-- <div class="home"> -->
  <b-container class="main">
    <!-- <Greeting /> -->
    <Settings />
  </b-container>
  <!-- </div> -->
</template>

<script>
import Greeting from "../../src/components/home/Greeting";
import Settings from "../../src/components/home/Settings";
import { BContainer } from "bootstrap-vue";

export default {
  name: "home",
  components: {
    Greeting,
    Settings,
    "b-container": BContainer
  }
};
</script>
