<template>
    <!-- persistent 영역밖을 클릭해도 창이 닫히지않음 -->
    <!-- fallthrough 속성을 명시적으로 나타내기 위해 $attrs 사용 -->
      <q-dialog persistent v-bind="$attrs" @hide="onHide">
        <q-card :style="{width : '660px'}">
            <q-toolbar>
                <q-toolbar-title>글쓰기</q-toolbar-title>
                <q-btn v-close-popup flat round dense icon="close"/>
            </q-toolbar>
            <q-separator />
           
            <PostForm 
          v-model:title="form.title"
          v-model:category="form.category"
          v-model:content="form.content"/>
          <q-separator />

        </q-card>
    </q-dialog>
</template>


<!-- inheriAttrs:false를 사용하면 fallthrough속성을 막을 수 있다.-->
<!-- <script>
export default {
    inheritAttrs: false
}
</script> -->

<script>
const getInitialForm = () => ({
    title: '',
    category :'',
    content: '',
    tags:[]

})

</script>

<script setup>
import { ref } from 'vue';
import PostForm from './PostForm.vue';


const form = ref(getInitialForm())

const onHide = () => {
    form.value = getInitialForm();
}

</script>


<style lang="scss" scoped>

</style>