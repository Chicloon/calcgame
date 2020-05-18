<template>
  <div class="controls">
    <div class="control-buttons">
      buttons is here
    </div>
    <div class="timer">
      <b-progress
        :max="duration * 60"
        height="2rem"
        show-progress
        variant="info"
        striped
        animated
      >
        <b-progress-bar :value="time">{{ displayTime }}</b-progress-bar>
      </b-progress>
    </div>
  </div>
</template>

<script>
import { BProgress, BProgressBar } from "bootstrap-vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Controls",
  components: {
    "b-progress": BProgress,
    "b-progress-bar": BProgressBar
  },
  data() {
    return {
      value: 45,
      max: 100
    };
  },
  computed: {
    ...mapState("game", ["duration", "time"]),
    ...mapGetters("game", {
      displayTime: "displayTime"
    })
  }
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
.progress {
  justify-content: flex-end;
}
.timer {
  width: 25%;
}
</style>
