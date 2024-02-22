<template>
  <q-page padding>
    <div class="test-h4">useAsyncState</div>
    <q-separator />
    <p>isReady : {{ isReady }}</p>
    <p>isLoading : {{ isLoading }}</p>
    <button @click="handleButten">execute</button>
    <p>error : {{ error }}</p>
    <p>state : {{ state }}</p>
  </q-page>
</template>

<script setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

// axios.get을 하게되면 promise 객체를 반환한다.
const { state, isLoading, error, isReady, execute } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.data),
  // 초기값
  { name: 'bokkaa' },
  {
    // 비동기처리를 바로 할거냐? false = > 아니오
    //즉 execute 버튼을 클릭했을 때 비동기 로직이 실행된다.
    immediate: false,
  },
);

const handleButten = () => {
  //execute() => 1초후에 결과를 다시 조회
  //비동기 로직 다시 실행하는 메소드
  execute(1000);
};
</script>

<style lang="scss" scoped>
</style>