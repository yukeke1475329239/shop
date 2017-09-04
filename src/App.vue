<template>
  <div class="app">
     
     <router-view class="main"></router-view>  
      <footer>
        <ul>
          <li>
            <router-link to=/Home>
               <span><img src="http://www.lb717.com/static/mobile/images/footer/1r.png" alt=""></span>
               <span>首页</span>
            </router-link> 
          </li>
           
          <li>
            <router-link to=/classify>
               <span><img src="http://www.lb717.com/static/mobile/images/footer/2.png" alt=""></span>
               <span>分类</span>
            </router-link> 
          </li>
          <li class="con">
           
              <span><img src="http://www.lb717.com/static/mobile/images/footer/inter.png" alt=""></span>
           
          </li>
          <li>
            <router-link to="/goods">
               <span><img src="http://www.lb717.com/static/mobile/images/footer/3.png" alt=""></span>
               <span class="goods">购物车<b>{{num}}</b></span>
            </router-link> 
          </li>
          <li>
            <router-link to=/my>
               <span><img src="http://www.lb717.com/static/mobile/images/footer/4.png" alt=""></span>
               <span>我的</span>
            </router-link> 
          </li>
        </ul>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  mounted(){
    
  },
  computed:{
     num(){
      return this.$store.state.arr.length
     }
  }
  
    
    
}
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
}
span{
  display:block;
}
footer ul{
  width: 100%;
  height: 55px;
  display:flex;
  align-items: center;
  .con{
    img{
      width: 38px;
      height: 38px;
    }
  }
  li{
    flex:1;
    text-align:center;
    img{
      width: 20px;
      height: 20px;
          vertical-align: top;
    border: 0;
    }
  }
}
.main{
  flex:auto;
}
footer{
  flex:none;
}
.router-link-active{
  img{
    color:#fc4141;
  }
  color: #fc4141;
}
.goods{
  position: relative;
  b{
    display:block;
    width: 15px;
    height: 15px;
    color:#fff;
    background:#fc4141;
    border-radius:100%;
    position: absolute;
    top:-24px;
    right:5px;
  }
}
</style>
