<template>
  <div class="change-log-view">
    <div class="banner-box">
      <h1>最新变化</h1>
      <p>敬请期待...</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.change-log-view{
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;

  .banner-box{
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    margin-bottom: 20px;

    h1{
      font-size: 30pt;
    }
  }
}
</style>
