<template>
  <div class="headerIndex">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <div class="logo">
            <img src="../../assets/image/index/header/logo_orange.png">
        </div>
        <div class="search">
            <el-select v-model="searchType">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="searchText" placeholder="请输入书名/作者名字/编码"></el-input>
            <el-button icon="el-icon-search"></el-button>
        </div>
        <el-menu-item index="1"><img src="">蒲公英绘本馆</el-menu-item>
        <el-menu-item index="2"><img src="">第一只小蜗牛</el-menu-item>
        <el-menu-item index="3">绘本</el-menu-item>
        <el-menu-item index="4">绘本馆</el-menu-item>
        <el-menu-item index="5">
            <a href="" target="_blank">登录</a>|
            <a href="" target="_blank">注册</a>
        </el-menu-item>
        <el-menu-item index="6">个人中心</el-menu-item>
        <el-menu-item index="7">后台管理</el-menu-item>
        <el-submenu index="8">
            <template slot="title">发现更多</template>
            <el-menu-item index="8-1">选项1</el-menu-item>
            <el-menu-item index="8-2">选项2</el-menu-item>
            <el-menu-item index="8-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
export default {
    name:'headerIndex',
    data(){
        return{
            options: [{
                value: '0',
                label: '绘本'
                }, {
                value: '1',
                label: '双皮奶'
                }, {
                value: '2',
                label: '蚵仔煎'
                }, {
                value: '3',
                label: '龙须面'
                }, {
                value: '4',
                label: '北京烤鸭'
                }],
            searchType: '绘本',
            searchText:'',
            activeIndex: '1',
        }
    },
    mounted:function(){

    },
    methods:{
        handleCommand(command) {
            this.$message('click on item ' + command);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    .headerIndex{
        width: 100%;
        height: 60px;
    
    }
</style>


