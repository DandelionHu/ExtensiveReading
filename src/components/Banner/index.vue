<template>
    <div class="bannerIndex">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerImage" :key="item.id">
          <img :src="item.url" class="bannerimg">
          <h3>{{ item.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name:'bannerIndex',
  data(){
    return{

    }
  },
  props:{
    bannerImage: {
      type: Array,
      required:true
    },
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .bannerimg
    width 100%

</style>
