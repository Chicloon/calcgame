<template>
  <b-container>
    <!-- <h1>This is an about page</h1> -->
    <Controls />
    <Task />
    <Panel />
  </b-container>
</template>

}
<script>
import Panel from "../components/game/Panel";
import Task from "../components/game/Task";
import Controls from "../components/game/Controls";
import { BContainer } from "bootstrap-vue";
export default {
  name: "game",
  components: {
    Panel,
    Task,
    Controls,
    "b-container": BContainer
  }
};
</script>
