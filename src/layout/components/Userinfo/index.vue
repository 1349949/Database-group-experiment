<template>
  <div class="user-info-wrapper">
    <div class="container">
      <img :src="url" class="avatar" />
      <div class="user-info-text">{{ name }}</div>
      <div class="user-info-text">{{ id }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'id', 'url'],
  data() {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.user-info-wrapper{
  text-align: center;
}
.container{
  height: 97.5%;
  width:100%;
  background-color: $menuBg;
}
.avatar{
  border-radius: 50%;
  background-color: #666;
  width: 60px;
  height: 60px;
  margin-top: 8px;
  }
.user-info-text{
  color:#BBCBD9;
  font-size: 14px;
  margin-top: 8px;
}
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }
  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }
  .drawer-switch {
    float: right
  }
}
</style>
