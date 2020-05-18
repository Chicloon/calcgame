<template>
  <div>
    <div class="expression">
      {{ displayExpression }}
    </div>
    {{ currentAnswer }}
    <div class="answer">
      <p v-show="!sign" class="number">-</p>
      <p
        class="number"
        v-for="(n, index) in currentAnswer"
        :key="'number' + index"
        :class="{ underline: cursor === index }"
      >
        {{ n }}
      </p>

      <p class="number" :class="{ underline: cursor >= currentAnswer.length }">
        &nbsp;
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Task",
  data() {
    return {
      // answer: [1, 1, 3, 2, 4],
      // underline: 3
    };
  },
  computed: mapState("game", [
    "displayExpression",
    "currentAnswer",
    "cursor",
    "sign"
  ]),
  created() {
    this.$store.dispatch("game/startTimer");
  }
};
</script>

<style lang="scss" scoped>
.expression {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.answer {
  text-align: center;
  margin-bottom: 20px;
}
.number {
  margin: 0 5px;
  text-align: center;
  display: inline-block;
  font-size: 25px;
  min-width: 20px;
}
.underline {
  border-bottom: 5px solid black;
}
</style>
