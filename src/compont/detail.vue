<template>
  <li>
      <dl class="goods-wrap">
       <dt class="goods-img" v-on:click="add(inds)">
         <img :src="info.url" alt="">
       </dt>
       <dd class="goods-info">
         <p class="goods-detail">{{info.con}}</p>
         <p class="goods-price">
           <span class="price">￥{{info.price}}</span>
           <span class="goods-car"><img :src="info.carUrl" alt="" v-on:click="shop(info)"></span>
         </p>
       </dd>
     </dl>
  </li>
</template>

<script>
export default {
  name: 'app',
 
  data () {
    return {
      brr:[]
    }
  },
  props:{
    info:{
      required:true
    },
    inds:{}
    
  },
  computed:{
     count:function(){
       return store.store.count
     }
  },
  methods:{
    add(ind){
      this.$router.push({
        path:"details",
        query:{sum:ind}
      })
    },
    shop:function(i){
      this.$store.commit("goods",i)
          
          //this.$store.dispatch("goods2")
          // this.store.dispatch("goods2")
    }
  }
}
</script>

<style lang="scss" scoped>
 ul{
 
 
  li{
    width: 49%;
    height: 260px;
    background: #fff;
    margin-top:8px;
    &:nth-of-type(2n){
      margin-left:4px;
    }
  }
 }
 .goods-wrap{
  width: 100%;
  height:260px;
  .goods-img{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .goods-info{
    width: 100%;
    height: 40px;
    
  }
  .goods-price{
    color: #fc4141;
  }
  .goods-price{
    display:flex;
    justify-content: space-between;
    padding:0 5px;
    box-sizing: border-box;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .goods-detail{
    font-size: 12px;
    height: 38px;
    overflow: hidden;
  }
 }
 

 

</style>