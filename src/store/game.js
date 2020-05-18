import moment from "moment";

const state = () => ({
  duration: 10,
  time: 0,
  answer: 0,
  displayExpression: "expression",
  formData: {},
  cursor: 0,
  sign: true,
  currentAnswer: []
});

const actions = {
  setGameSettings({ commit, state }, formData) {
    console.log("form data", state.formData);
    formData && commit("setFromData", formData);
    const { duration, difficulty, options } = state.formData;
    const getOrders = difficulty => {
      const arrLength = difficulty >= 5 ? 5 : difficulty + 1;
      const orders = new Array(arrLength).fill(1);
      if (difficulty > 5) {
        for (let i = 0; i < difficulty - 5; i++) {
          orders[i]++;
        }
      }
      return orders;
    };

    const getNumbers = orders => {
      const numbers = [];
      orders.forEach(order => {
        const rank = Math.pow(10, order);
        let number = Math.ceil(Math.random() * rank);
        if (number === rank) {
          number--;
        }
        numbers.push(number);
      });
      return numbers;
    };

    const getExpression = numbers => {
      let expression = numbers.shift();
      let displayExpression = expression;

      numbers.forEach(number => {
        const option = options[Math.floor(Math.random() * options.length)];
        const exponent = Math.floor(Math.random() * 10);
        switch (option) {
          case "summ":
            console.log("got summ");
            expression = `${expression} + ${number}`;
            displayExpression = `${displayExpression} + ${number}`;
            break;
          case "diff":
            expression = `${expression} - ${number}`;
            displayExpression = `${displayExpression} - ${number}`;
            break;
          case "multiply":
            expression = `${expression} * ${number}`;
            displayExpression = `${displayExpression} * ${number}`;
            break;
          case "division":
            expression = `${expression} / ${number}`;
            displayExpression = `${displayExpression} / ${number}`;
            break;
          case "exp":
            console.log("got exp");
            expression = `${expression} + Math.pow(${number},${exponent})`;
            displayExpression = `${displayExpression} + ${number}^${exponent}`;
            break;
          default:
            break;
        }
      });
      expression = `Math.floor(${expression})`;
      console.log(expression);
      console.log(displayExpression);
      const answer = new Function("return " + expression)();
      console.log(answer);
      commit("setupGame", { answer, displayExpression, duration });
    };
    const orders = getOrders(parseInt(difficulty));
    const numbers = getNumbers(orders);

    getExpression(numbers);
  },

  moveCursorRight({ commit, state: { cursor, currentAnswer } }) {
    // const { cursor, cursor } = state;
    const position = cursor !== currentAnswer.length ? cursor + 1 : cursor;
    commit("setCursor", position);
  },

  moveCursorLeft({ commit, state: { cursor } }) {
    // console.log("cursor", cursor);
    const position = cursor !== 0 ? cursor - 1 : cursor;
    commit("setCursor", position);
  },
  toggleSign({ commit }) {
    commit("toggleSign");
  },

  inputNumber({ commit, state }, number) {
    if (!number) {
      commit("setCurrentAnswer", []);
    }
    commit("setCursor", state.cursor + 1);
    // console.log()
    const currentAnswer = state.currentAnswer;
    currentAnswer.push(number);
    commit("setCurrentAnswer", currentAnswer);
  },
  checkResult({ comit, state }) {
    const result = parseInt(
      (state.sign ? "+" : "-") + state.currentAnswer.join("")
    );
    console.log("result", result);
    if (result === state.answer) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  },
  startTimer({ commit, state }) {
    commit("setTime", state.duration * 60);
    const timer = () => {
      setTimeout(() => {
        if (state.time !== 0) {
          commit("setTime", state.time - 1);
          timer();
        }
      }, 1000);
    };
    timer();
  }
};

const mutations = {
  setCursor(state, position) {
    state.cursor = position;
    console.log("cursor", state.cursor);
  },
  toggleSign(state) {
    state.sign = !state.sign;
    console.log(state.sign);
  },
  setCurrentAnswer(state, answer) {
    state.currentAnswer = answer;
  },
  setFromData(state, formData) {
    console.log("setForm data");
    state.formData = formData;
  },
  setTime(state, time) {
    state.time = time;
    console.log("timer", time);
  },
  setupGame(state, { displayExpression, answer, duration }) {
    state.answer = answer;
    state.displayExpression = displayExpression;
    state.duration = duration;
    console.log("state", state);
  }
};

const getters = {
  displayTime: state => {
    const duration = moment.duration(state.time, "seconds").asMilliseconds();
    const formatted = moment.utc(duration).format("mm:ss");
    return formatted;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
