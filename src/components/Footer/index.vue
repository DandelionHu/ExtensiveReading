<template>
  <div class="footerIndex">
      <el-row :gutter="20">
        <el-col :span="5" :offset="3">
            <div class="grid-content bg-purple">
                <img src="../../assets/image/index/footer/logo_white.png">
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <ul>
                    <li><a href="">使用说明</a>/<a href="">帮助中心</a></li>
                    <li><a href="">网站地图</a></li>
                    <li><a href="">移动应用</a></li>
                    <li><a href="">免责声明</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">更多</a></li>
                </ul>
            </div>
        </el-col>
        <el-col :span="5">
            <div class="grid-content bg-purple">
                <p>扫一扫</p>
                <span>关注微信公众号</span>
                <img src="../../assets/image/index/footer/ewm.png">
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:"footerIndex",
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    .footerIndex
        font-size $font-size-medium
        background $color-background-f
        color $color-text-w
        width 100%
        .el-row
            margin 0px !important
    
</style>
 