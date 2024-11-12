<template>
  <div class="markdown-content" v-html="parserContent"></div>
</template>
<script setup>
import {ref, watch} from "vue";
import markdownIt from "markdown-it"
const md = markdownIt()

// eslint-disable-next-line no-undef
const props = defineProps({
  content: {
    type: String,
    default: ""
  }
})

const parserContent = ref("")

watch(props, (value) => {
  parserContent.value = md.render(value.content)
}, {deep: true, immediate: true})

</script>

<style scoped lang="less">
.markdown-content{
  :deep(p){
    line-height: 1.6em;
    margin-bottom: 10px;
  }
  :deep(h1){
    line-height: 1.6em;
    margin: 20px 0;
  }
  :deep(h2){
    line-height: 1.6em;
    margin: 15px 0;
  }
  :deep(h3){
    line-height: 1.6em;
    margin: 13px 0;
  }

  :deep(ol){
    margin-bottom: 10px;
  }


  :deep(pre){
    width: 100%;
    font-size: 8pt;
    color: #888888;
    background-color: #efefef;
    padding: 15px 20px;
    border-radius: 4px;
    line-height: 1.4;
    margin-bottom: 10px;

    code{
      padding: 0;
      border-radius: unset;
      margin: 0;
      background-color: unset;
    }
  }

  :deep(code){
    font-size: 8pt;
    color: #888888;
    background-color: #efefef;
    padding: 3px 5px;
    border-radius: 4px;
    margin: 0 5px;
  }

  :deep(table){
    width: 100%;
    border-top: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    margin: 0 0 10px;

    td,th{
      border-right: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
      padding: 5px 10px;
    }
    th{
      text-align: left;
    }
  }

  :deep(img){
    width: fit-content;
    display: block;
    min-width: 100px;
    max-width: 100%;
    border-top: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    margin: 10px auto;
  }
}

</style>
