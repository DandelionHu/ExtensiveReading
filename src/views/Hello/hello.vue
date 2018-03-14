<template>
<div class="hello">
  <ul>
    <li>我是hello</li>
    <li v-for="(item,key) in data">{{item}}</li>
  </ul>
  <span></span>
</div>
</template>

<script>
export default {
  name:'hello',
  data(){
    return {
      data:[]
    }
  },
  mounted:function(){
    this.Axios.get('/api/data').then(res=>{
      this.data=res.data;
      console.info(res)
    })
  }
}
</script>

