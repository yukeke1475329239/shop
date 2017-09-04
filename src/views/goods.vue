<template>
  <div id="app">
     <header>
     	 <p class="one"></p>
       <p v-on:click="edit">{{txt}}</p>
       <p>购物车</p>
     </header>
     <section>
         <product v-for="(x,index) in arr" 
         :content="x.con" 
         :ImgUrl="x.url"
         :con="x.count"
         :price="x.price"
         :shopId="x.shopId"
         :state="x.state"
         :id="x.id"
         :judge="x.judge"></product>  
      <div class="last">
            <img src="http://www.lb717.com/static/mobile/images/myimg/my16.png" alt="">
               <span>热门推荐</span>
            <img src="http://www.lb717.com/static/mobile/images/myimg/my17.png" alt="">
        </div>
         <ul class="uls">
         <goodsDetail v-for="(x,index) in data"
          :info="x" :key="index">
         </goodsDetail>
               <li class="lastTxt">到底了。。。。</li>
         </ul> 
     </section>
     <nav>
         <div class="select" v-on:click="isSelect">
            <span class="btn" v-if="asyc"></span>
            <span class="btn2" v-if="!asyc">√</span>
            <span class="select_span">全选</span>
         </div>
         <div class="total">
           <span  v-show="flag">合计:</span>
           <span class="price"  v-show="flag">￥{{Total()}}</span>
         </div>
         <div class="settlement"   v-on:click="settlement">
              <span v-show="flag">结算</span> 
              <span v-show="!flag" @click="detail">删除</span>
         </div>
     </nav>
  </div>
</template>
<script>
import goodsDetail from "../compont/detail.vue"
import product from "../compont/product.vue"
 export default {
  name: 'app',
  data () {
      return {
        flag:true,
        txt:"编辑",
        data:[],
        arr:[],
        asyc:""
      }
  },
   components:{
      goodsDetail,
      product
  },
  mounted(){
      this.data=this.$store.state.items
      this.arr=this.$store.state.arr
     
  },
  methods:{
    // 总价
    Total(){
      console.log()
      return this.$store.state.total
    },
    // 点击全选
    isSelect(){
      this.$store.commit("asyc")
      this.asyc=this.$store.state.asyc
      this.$store.commit("judge")
    },
    // 点击编辑
    edit(){
      this.flag=!this.flag
      if(this.txt=="编辑"){
         this.txt="完成"
      }else{
        this.txt="编辑"
      }
    },
    detail(){
      alert(111)
    },
    settlement(){
      
      if(this.flag){
        this.$router.push("/payment")
      }else{
        console.log(this.$store.state.Single_click)
      }
     }
  }
}
</script>

<style lang="scss" scoped>
 #app{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;

 }
 span{
  display:inline-block;
 }
 /*头部*/
 header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: relative;
    text-align:center;
    font-size: 16px;
    border-bottom:1px solid #ccc;
    flex:none;
    .one{
      left:30px;
      position: absolute;
    }
    :nth-child(2){
      position: absolute;
      right:30px;
    }
 }
 section{
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #eee;
 }
 /*底部*/
 nav{
    width: 100%;
    height: 45px;
    display:flex;
    align-items: center;
    border-bottom:1px solid #ccc;
    flex:none;

    .select{
     width:20%;
     padding-left:10px;
     box-sizing: border-box; 
   
      .select_span{
        width: 30px;
        height: 100%;
       
      }

    }
    .total{
        width: 50%;
        text-align: center;
        font-size: 16px;
        .price{
          color:#fc4141;
          font-weight: bold;
        }
     }
    .settlement{
      width: 30%;
      height: 100%;
      line-height: 45px;
      text-align:center;
      background: #fc4141;
      color:#fff;
      font-size: 16px;
    }
 }
   .btn{
        display:inline-block;
        width: 18px;
        height: 18px;
        border-radius:100%;
        border:1px solid #ccc;
      }
      .btn2{
        display:inline-block;
        width: 18px;
        height: 18px;
        border-radius:100%;
        border:1px solid #ccc;
        color:#fff;
        background: #fc4141;
        border:none;
        text-align:center;
      }
 /*热门推荐*/
 .last{
      width: 100%;
      height: 45px;
      display:flex;
      align-items: center;
      background: #fff;
      justify-content: center;
      font-size: 16px;
      img{
        width: 16px;
        height: 12px;
      }
    }
 /*详情*/
  .uls{
    width: 100%;
    height:auto;
    background: #eee;
    display:flex;
    flex-wrap:wrap;
    .lastTxt{
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      color:#999;
    }
}

 /*.wrap{
    width: 100%;
    display:flex;
    height: 120px;
    align-items: center;
    background: #fff;
     .push-button{
      width: 15%;
      text-align:center;
     }
     .img{
      width:25%;
      height:auto;
      border-radius:10px;
      img{
        width: 100%;
      }
     }
     .deatil{
      width: 60%;
     }
   }*/
</style>