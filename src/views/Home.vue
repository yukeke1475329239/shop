
<template>
<div id="app1">
<!-- 头部 -->
   <header>
   	  <div class="logo">
   	  	<img src="http://www.lb717.com/static/mobile/images/homeImg/homelo.gif" alt="">
   	  </div>
   	  <div class="searchBox">
   	  	<i><img src="http://www.lb717.com/static/mobile/images/homeImg/serach.png" alt=""></i>
   	  	<input type="text" class="search" id="searchName" placeholder="请输入您要购买的商品" @focus="go_to_search">
   	  </div>
   	  <dl class="shop">
   	  	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/shoping.png" alt=""></dt>
   	    <dd>我的店铺</dd>
   	  </dl>
   </header>
   <!-- 轮播 -->
   <div class="wrap">
    <swiper :options="swiperOption" ref="mySwiper" class="banner">
       <swiper-slide class="q" v-for="x in imgArr"><img :src="x" alt=""></swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  
  <!-- 导航 -->
	   <div class="sub-nav">
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav3.png" alt=""></dt>
	   	    	<dd>牛奶乳品</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav1.png" alt=""></dt>
	   	    	<dd>家乡味道</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav4.png" alt=""></dt>
	   	    	<dd>休闲零食</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav6.png" alt=""></dt>
	   	    	<dd>米面粮油</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav7.png" alt=""></dt>
	   	    	<dd>调味掉料</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav8.png" alt=""></dt>
	   	    	<dd>酒水饮料</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav5.png" alt=""></dt>
	   	    	<dd>生鲜果蔬</dd>
	   	    </dl>
	   	    <dl>
	   	    	<dt><img src="http://www.lb717.com/static/mobile/images/homeImg/nav2.png" alt=""></dt>
	   	    	<dd>进口食品</dd>
	   	    </dl>
	   	    <div class="dynamic">
	   	    	<span class="left">商城动态</span>
	   	    	<div class="right">
	   	    	    <div class="swiperBox">
		   	    		<swiper :options="swipervertical" ref="mySwiper" class="bos">
						       <swiper-slide class="verticalBox">7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</swiper-slide>
						       <swiper-slide class="verticalBox" >7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</swiper-slide>
						       <swiper-slide class="verticalBox" >7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</swiper-slide>
						</swiper>
					</div>
	   	    	</div>
	   	    </div>
       </div>
       <!-- 详情页 -->
       <ul class="uls"><detail v-for="(x,index) in data" :info="x" :inds="index" :key="index"></detail></ul>	
	   
  </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import detail from "../compont/detail.vue"
 export default {
    name: 'app',

    components:{
       swiper, swiperSlide,
       detail
    },
    data() {
      return {
      	imgArr:["http://www.lb717.com/static/mobile/images/activity/banner_activite.jpg",
		      	"http://www.lb717.com/static/mobile/images/homeImg/video717.png",
		      	"http://www.lb717.com/static/mobile/images/homeImg/video.png",
		      	"http://www.lb717.com/static/mobile/images/homeImg/banner1.png",
		      	"http://www.lb717.com/static/mobile/images/homeImg/home.png"],
        swiperOption: {
          autoplay: 1000,        
          pagination : '.swiper-pagination',
          paginationClickable :true,
          loop:true,
          // direction: 'vertical'
        },
        swipervertical:{
        	autoplay: 1500,
        	direction: 'vertical',
        	loop:true
        },
        data:[]
      }
    },
    computed:{
      swiper () {
        // return this.$refs.mySwiper.swiper
      }
    },
    methods:{
    	go_to_search(){
    	   this.$router.push({
    	   	path:"/search"
    	   })
    	}
    },
    mounted(){
    	setTimeout(()=>{
          this.data=this.$store.state.items
    	},1000)
    	
   }

  }
</script>

<style lang="scss" scoped>
 #app1{
 	width: 100%;
 	height: 100%;
 	display:flex;
    flex-direction: column;
 }
 /*头部*/
 header{
  	display:flex;
    height: 45px;
    flex:none;
  }
 .logo{
		width: 42px;
	    height: 18px;
	    margin:10px;
	    margin-left:10px;
		    img{
		    	width: 100%;
	            height: 100%;
		    }
  }
  .shop{
	 display:block; 
	 width: 48px;
	 height: 38px;
	 margin-left:16px;
	 margin-top:9px;
	 dt{
	 	width: 20px;
	 	height: 17px;
	 	img{
	 		width: 100%;
	 		margin-left:13px;
	 	}
	 }	
	 dd{
	 	text-align: center;
	    font-size: 12px;
	    color: #fd4848;
	 }
  }
 .searchBox{
	  	background: #f5f5f5;
	    height: 30px;
	    margin-top:6px;
	    border-radius:3px;
	    position: relative;
	    width:190px;
	  	i{
	  		font-style: normal;
	  		img{
	  		    position: absolute;
			    width: 11px;
			    height:11px;
			    left:10px;
			    margin-top:9px;
	  	    }
	  		    
	  	}
  	
  	input{
  		margin-left:30px;
	    width:139px;
	    height:30px;
	    background: none;
	    border: none;
	    font-size:12px;
	    outline: none;
  	}
  }
 .sub-nav{
	 	margin-top:10px;
	 	width: 100%;
	 	height: auto;
	 	display:flex;
	 	flex-wrap:wrap;
	 	dl{
	 		width: 25%;
	 		height:65px;
	 		text-align:center;
	 		color:#444;
	 		img{
	 			width: 38px;
	 			height: 38px;
	 		}
	 	}
 }
 .dynamic{
	 	width: 100%;
	 	height: 45px;
	 	display:flex;
	 	.left{
	 		-webkit-flex:1;
	 		color: #ff6d00;
	 		font-size: 16px;
	        margin-left:10px;
	 		font-weight: bold;
 	}
 	.right{
	 		flex:8;
	 		.swiperBox{
	 			padding-left:5px;
	 			width: 95%;
	 			height: 35px;
	 			border:1px solid #eee;
	 			border-radius:8px;
	 			margin-top:5px;
	 			overflow: hidden;
	 		}
	 	}
 }
.q{
	width: 300px;
	height: 150px;
	img{
		width: 100%;
		height: 100%;
	}
}
.wrap{
	width: 100%;
	height:100%;
	overflow: auto;
}

.uls{
	 width: 100%;
  height:auto;
  background: #eee;
  display:flex;
  flex-wrap:wrap;
}

</style>