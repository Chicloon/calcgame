<template>
  <div class="panel">
    <div class="numbers">
      <div
        class="button button-number"
        v-for="n in 9"
        :key="'panelNumber' + n"
        @click="setNumber(n)"
      >
        <span>{{ n }}</span>
      </div>
      <div class="button button-number" @click="setNumber(0)">
        <span>0</span>
      </div>
    </div>
    <div class="actions">
      <div class="button button-action" @click="moveCursorLeft()">
        <span> &lt; </span>
      </div>
      <div class="button button-action" @click="moveCursorRight()">
        <span> &gt; </span>
      </div>
      <div class="button button-action" @click="toggleSign()">
        <span> -/+ </span>
      </div>
      <div class="button button-action" @click="checkResult('+')">
        <span> = </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  methods: {
    setNumber(number) {
      console.log("got number", number);
      this.$store.dispatch("game/inputNumber", number);
    },
    moveCursorLeft() {
      this.$store.dispatch("game/moveCursorLeft");
    },
    moveCursorRight() {
      this.$store.dispatch("game/moveCursorRight");
    },
    toggleSign() {
      this.$store.dispatch("game/toggleSign");
    },
    checkResult() {
      this.$store.dispatch("game/checkResult");
    }
  },
  created() {
    this.$store.dispatch("game/inputNumber");
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  user-select: none;
}
.numbers {
  /* width: 75%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.actions {
  display: flex;
  flex-direction: column;
}

.button {
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  margin: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s;
  box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 1);

  &:hover {
    transform: translateY(-10px);
  }

  span {
    font-size: 2rem;
  }

  &-number {
    background-color: rgb(255, 112, 66);
  }

  &-action {
    background-color: rgb(122, 122, 122);
  }
}
</style>
