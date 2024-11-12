<template>
  <div class="update-note-box">
    <h1 class="title">{{ currentUpdateNote.title }}</h1>
    <p class="author-and-time">由 {{ currentUpdateNote.create_by }} 发表于 {{ currentUpdateNote.create_time }}</p>
    <markdown-viewer :content="currentUpdateNote.content" />
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import MarkdownViewer from "@/components/markdownViewer.vue";
const route = useRoute()

const currentUpdateNote = ref({})
function getUpdateNoteInfo(id){
  axios.get("https://dieloli.org/api/v1/updateNote/queryById", {params: {id: id}}).then((res) => {
    if(res.data.success){
      currentUpdateNote.value = res.data.result
    }else{
      currentUpdateNote.value = {}
    }
  }).catch((err) => {
    console.error(err)
    currentUpdateNote.value = {}
  })
}


onMounted(() => {
  // console.log(route)
  let id = route.query.id
  if(id != null && id !== ''){
    getUpdateNoteInfo(id)
  }
})
</script>
<style scoped lang="less">
.update-note-box{
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 40px;
  margin: 20px auto;

  .title{
    font-size: 25pt;
    font-weight: bold;
  }

  .author-and-time{
    font-size: 10pt;
    color: #888888;
    margin: 10px 0 30px 0;
  }
}
</style>
