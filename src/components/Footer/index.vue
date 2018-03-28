<template>
  <div class="footerIndex">
      <el-row :gutter="20">
        <el-col :span="4" :offset="3">
            <div class="grid-content">
                <img class="logo" src="../../assets/image/index/footer/logo_white.png">
            </div>
        </el-col>
        <el-col :span="11">
            <div class="grid-content">
                <ul :class="{active: isActive}">
                    <li><a href="">使用说明</a>/<a href="">帮助中心</a></li>
                    <li><a href="">网站地图</a></li>
                    <li><a href="">移动应用</a></li>
                    <li><a href="">免责声明</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">更多</a></li>
                </ul>
                <ul>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">服务建议</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">网站备案：深ICP备09203006号-2</a></li>
                </ul>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="webchat">
                <p>扫一扫</p>
                <span>关注微信公众号</span>
                <img src="../../assets/image/index/footer/ewm.png">
            </div>
        </el-col>
      </el-row>
      <p class="record">网站备案：深ICP备09203006号-2</p>
  </div>
</template>

<script>
export default {
    name:"footerIndex",
    data(){
        return{
            isActive:true
        }
    },
    props:{
        footerBar
    }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    .footerIndex
        font-size $font-size-medium
        background $color-background-f
        color $color-text-w
        width 100%
        padding 5px 0px
        .el-row
            margin 0px !important
            height 100%
            .el-col
                height 150px    
                .grid-content
                      display flex
                      height 100%
                      display -webkit-flex
                      align-items center
                    img.logo
                        vertical-align middle
                        width 190px
                        height 60px
                    ul 
                        width 100%
                        padding-top 20px
                        display none
                        li
                            display inline-block
                            padding 5px 25px
                            width 24%
                            a
                                color $color-text-w
                    ul.active
                        display block
                .webchat
                    display block
                    width 70%
                    float right 
                    p,span
                        display block
                        text-align center
                        line-height 22px
                    img 
                        display block
                        margin 0 auto
                        width 100px
                        height 100px
            .el-col.el-col-11
                .grid-content
                    height 80%
        .record
            text-align center
            color #a6a6a6
            margin-top -25px
            float left
            width 100%

    
</style>
 