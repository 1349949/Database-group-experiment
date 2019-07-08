<template>
  <div class="progressContainer">
    <div class="progressItem" :style="{width:(rest/total)*100+'%', backgroundColor:'#'+bgcolor}"></div>
  </div>
</template>
<script>
export default {
  data() {
    return { }
  },
  props: ['total', 'rest', 'barwidth', 'bgcolor'],
  computed: {}

}
</script>

<style scoped>
.progressContainer{
  position: relative;
  height: 10px;
  width: 100%;
  background-color: #aaa;
  border-radius: 5px;
}
.progressItem{
  border-radius: 5px;
  position: relative;
  height: 10px;
  width: 100%;
  background-image: linear-gradient(100edg,rgba(255,255,255,.15)25%,transparent 25%,transparent 50%,
  rgba(255,255,255,.15)50%,rgba(255,255,255,.15)70%,transparent 75%,transparent);
}

</style>
