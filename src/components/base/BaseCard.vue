<template>
    <!-- $attrs은 이벤트 등등도 같이 바인딩시킴 -->
    <q-card :flat="flat" :bordered="bordered" v-bind="$attrs">
        <!-- $slots - 내장 슬롯  -->
        <!-- '_'는 관례상 무시되는 변수 -->
        <template v-for="(_, name) in $slots" :key="name">
            <slot :name="name"></slot>

        </template>
    </q-card>
</template>

<script setup>

defineProps({
    flat:{
        type:Boolean,
        default: true
    },
    bordered: {
        type: Boolean,
        default : true
    }
})

</script>

<style lang="scss" scoped>

</style>