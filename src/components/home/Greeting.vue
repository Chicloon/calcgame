<template>
  <div>
    <h1>Привет!</h1>
    <p>Добро пожаловать на {{ trainingDay }} тренировочный день</p>
    <p>Ваш последний результат - решено {{ tasksDone }} из {{ totalTasks }}</p>
    <p>Общая точноть - {{ accuracy }}%</p>
  </div>
</template>

<script>
export default {
  name: "Greeting"
};
</script>
