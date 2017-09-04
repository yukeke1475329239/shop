<template>
<div id="app">
   <header>
    <p><img src="http://www.lb717.com/static/mobile/images/myimg/my1.png" alt=""></p>
    <p></p>
    <p>我的717商城</p>
   </header>
   <section>
    
      <div class="wrap">
        <img src="http://www.lb717.com/static/mobile/images/default_avatar.png" alt="">
        <p>71712419215</p>
      </div>
        <div class="shop">
          <div class="shop1">
              <p><img src="http://www.lb717.com/static/mobile/images/myimg/my9.png" alt=""></p>
              <p id="p">我的店铺</p>
          </div>
          <div class="shop2"><img src="http://www.lb717.com/static/mobile/images/myimg/my14.png" alt=""></div>
        </div>

       <div class="list">
         <dl>
           <dt><img src="http://www.lb717.com/static/mobile/images/myimg/my4.png" alt=""></dt>
           <dt>待付款</dt>
         </dl>
         <dl>
           <dt><img src="http://www.lb717.com/static/mobile/images/myimg/my5.png" alt=""></dt>
           <dt>待发货</dt>
         </dl>
         <dl>
           <dt><img src="http://www.lb717.com/static/mobile/images/myimg/my6.png" alt=""></dt>
           <dt>待收货</dt>
         </dl>
         <dl>
           <dt><img src="http://www.lb717.com/static/mobile/images/myimg/my7.png" alt=""></dt>
           <dt>售后</dt>
         </dl>
         <dl class="borderRight">
           <dt><img src="http://www.lb717.com/static/mobile/images/myimg/my8.png" alt=""></dt>
           <dt>我的订单></dt>
         </dl>
       </div>
       <ol>
         <li>
          <label for=""><img src="http://www.lb717.com/static/mobile/images/myimg/myhome.png" alt="">我的社区</label>
          <i><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></i>
         </li>
         <li>
          <label for=""><img src="http://www.lb717.com/static/mobile/images/myimg/my10.png" alt="">账户余额</label>
           <i><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></i>
         </li>
         <li @click="returnPage_address">
          <label for=""><img src="http://www.lb717.com/static/mobile/images/myimg/my12.png" alt="">地址管理</label>
           <i><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></i>
         </li>
         <div class="last">
           <img src="http://www.lb717.com/static/mobile/images/myimg/my16.png" alt="">
             <span>热门推荐</span>
             <img src="http://www.lb717.com/static/mobile/images/myimg/my17.png" alt="">

         </div>
         
       </ol>
       <!-- 详情页 -->
       <ul class="uls"><myDetail v-for="(x,index) in data" :info="x" :key="index"></myDetail>
             <li class="lastTxt">到底了。。。。</li>
       </ul> 
   </section>

  <!--  -->
</div>
</template>

<script>
import myDetail from "../compont/detail.vue"
export default {
  name: 'app',
  components:{
      myDetail
  },
  data () {
    return {
      data:[]
    }
  },
   mounted(){
     this.data=this.$store.state.items
   },
   methods:{
     returnPage_address(){
       this.$router.push("myAddress")
     }
   }
}
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
 header{
    width: 100%;
    height: 45px;
    text-align:center;
    line-height: 45px;
    font-size: 18px;
    flex:none;
      :first-child{
        position:absolute;
        left:10px;
        img{
          width: 18px;
          height: 18px;
          top:15px;
        }
      }
 }
 section{
  width: 100%;
  height:auto;
  background: #eee;
   overflow: auto;
   flex: 1;
 }

 .wrap{
    width: 100%;
    height: 90px;
    text-align:center;
    background:url("http://www.lb717.com/static/mobile/images/my/phpot.png") no-repeat;
    color:#fff;
    img{
      width: 52px;
      height: 52px;
      margin-top:8px;
    }
 } 
 .shop{
    width: 100%;
    display:flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding:0 15px;
    box-sizing: border-box;
    background: #fff;
    img{
      width: 31px;
      height: 26px;

    }
    .shop1{
      p{
        display:inline-block;
      }
      #p{
        font-size:18px;
        color: #fc4141;
      
      }

    }
    .shop2{
     img{
      width: 8px;
      height: 15px;
     }
    }
  }
  .list{
    background: #fff;
    width: 100%;
    height: 65px;
    display:flex;
    align-items: flex-end;
    justify-content: space-around;
    img{
      width: 20px;
      height: 20px;
    }
    dl{
      display:flex;
      flex-wrap:wrap;
      width: 100%;
      text-align: center; 
      padding-top:15px;
     padding-bottom: 4px;
      dt{
        width: 100%;
      }
      dd{
        width: 100%;
      }
      
     
    }
    .borderRight{
      border-left:1px solid #ccc;
      box-sizing: border-box;
    }
  }
  ol{
    width: 100%;
    height: auto;
     margin-top:5px;
    
    li{
      background: #fff;
      height: 45px;
      line-height: 45px;
      margin-bottom: 3px;
      display:flex;
      justify-content: space-between;
       padding-right:15px;
       padding-left:25px;
      img{
        width: 17px;
        height: 15px;
        margin-right:5px;
      }
      i{
            font-style: normal;
            img{
              width: 5px;
              height: 10px;
            }

      }
    }
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
  }
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


</style>