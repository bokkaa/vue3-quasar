<template>
 <PostList :items="posts"/>
 </template>
 
 <script setup>
 import PostList from 'src/components/apps/post/PostList.vue';

// 더미데이터
const posts = Array.from(Array(20), (_, index) => ({
  id: 'A'+index,
  title: 'vue3 FireBase 강의' + index,
  contents:
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam eaqueaspernatur quos explicabo expedita recusandae. Harum, exercitationemimpedit reiciendis, corrupti sequi quisquam magnam, non alias modi in abnatus?',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));


 </script>
 
 <style lang="scss" scoped>
 </style>