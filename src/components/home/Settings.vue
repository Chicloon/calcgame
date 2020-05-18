<template>
  <div class="settings">
    <h2>Настойки</h2>
    <div class="settings-form">
      <b-form @submit="onSubmit">
        <b-form-group class="range">
          <b-form-input
            v-model.lazy="form.duration"
            type="range"
            id="duration"
            name="duration"
            min="1"
            max="15"
          />
          <p>Длительность {{ form.duration }} минут</p>
          <b-form-input
            v-model.lazy="form.difficulty"
            type="range"
            id="difficulty"
            name="difficulty"
            min="1"
            max="10"
          />
          <p>Сложность {{ form.difficulty }}</p>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox-group v-model="form.options" stacked>
            <b-form-checkbox value="summ">Суммирование</b-form-checkbox>
            <b-form-checkbox value="diff">Деление</b-form-checkbox>
            <b-form-checkbox value="multiply">Умножение</b-form-checkbox>
            <b-form-checkbox value="division">Деление</b-form-checkbox>
            <b-form-checkbox value="exp">Возведение в степень</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button v-show="!showAlert" type="submit" variant="outline-secondary"
          >Play</b-button
        >
      </b-form>
    </div>
    <b-alert :show="showAlert" fade variant="warning" @dismissed="showAlert = 0"
      >Выберете как минимум одно действие</b-alert
    >
  </div>
</template>

<script>
import {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckboxGroup,
  BFormCheckbox,
  BAlert
} from "bootstrap-vue";
export default {
  name: "Settings",
  components: {
    "b-button": BButton,
    "b-form": BForm,
    "b-form-group": BFormGroup,
    "b-form-input": BFormInput,
    "b-form-checkbox-group": BFormCheckboxGroup,
    "b-form-checkbox": BFormCheckbox,
    "b-alert": BAlert
  },
  data() {
    return {
      form: {
        duration: 1,
        difficulty: 3,
        options: ["summ"]
      },
      showAlert: 0
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const { form } = this;
      this.$store.dispatch("game/setGameSettings", form);
      this.$router.push("/game");
    }
  }
};
</script>

<style lang="scss" scoped>
.settings {
  position: relative;
}
.settings-form {
  button[type="submit"] {
    position: absolute;
    right: 0;
  }
}
.range {
  width: 50%;
}
</style>
