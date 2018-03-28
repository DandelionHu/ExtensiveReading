<template>
    <div class="homePage">
        <header-index></header-index>
        <banner-index :bannerImage='banner'></banner-index>
        <footer-index :footerBar='1'></footer-index>
    </div>
</template>

<script>
import HeaderIndex from '@/components/Header/index'
import FooterIndex from '@/components/Footer/index'
import BannerIndex from '@/components/Banner/index'
export default {
    name:'homePage',
    data(){
        return{
            banner:[
                {url:require('@/assets/image/index/header/banner.png'),id:'1',title:'第一张'},
                {url:require('@/assets/image/index/header/banner1.jpg'),id:'2',title:'第二张'},
                {url:require('@/assets/image/index/header/banner2.jpg'),id:'3',title:'第三张'},
                {url:require('@/assets/image/index/header/banner3.jpg'),id:'4',title:'第四张'}
            ]
        }
    },    
    components:{
        HeaderIndex,
        FooterIndex,
        BannerIndex
    }
}
</script>

<style>

</style>
