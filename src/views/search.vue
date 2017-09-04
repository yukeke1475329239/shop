<template>
	<div class="app1">
  		<header>
  			<div class="search_input">
  				<input type="text" placeholder="请输入您要购买的商品" v-model.trim="search_value">
  			    <img src="http://www.lb717.com/static/mobile/images/homeImg/serach.png" alt="">
  			</div>
  			<p @click="search_btn">搜索</p>
  		</header>
		<div class="box2">
           <div class="content">
	           	<div class="nav">
					       <p>最近搜索</p>
					        <p><img src="http://www.lb717.com/static/mobile/images/my/remo.png" alt=""></p>
			    	   </div>
      				<div class="none" v-if="searchGoods.length==0">
      					暂无搜索记录...
      				</div>
              <div class="section" v-if="searchGoods.length!=0">
                <div class="uls">
                 <li><span>锅巴</span></li>
                 <li><span>酱</span></li>
                </div>
              </div>
				<div class="section">
					<p class="one">大家都在搜</p>
					<ul class="uls">
					  <li><p><span>粽子</span></p></li>
						<li><span>锅巴</span></li>
						<li><span>酱</span></li>
						<li><span>小吃</span></li>
						<li><span>零食</span></li>
						<li><span>干果</span></li>
						<li><span>特产</span></li>
						<li><span>油</span></li>
						<li><span>大米</span></li>
						<li><span>面粉</span></li>
					</ul>
				</div>
      </div>	
		</div>
	</div>


</template>
<script>
	export default{
		data(){
			return {
         search_value:"",
         searchGoods:[]
			}
		},
    methods:{
      search_btn(){
        let ls=localStorage
         this.searchGoods=JSON.parse(localStorage.getItem("commodityName"))
            
        if(this.search_value){
          this.searchGoods.push(this.search_value)
              localStorage.setItem("commodityName",JSON.stringify(this.searchGoods))
              console.log( ) 
        }
      }
    }
	}
</script>
<style  lang="scss" scoped>
.app1{
	width: 100%;
	height: 100%;
	display:flex;
	flex-direction: column;
	box-sizing: border-box;
}
	header{
		width: 100%;
		height: 50px;
		display:flex;
		align-items: center;
		border-bottom:1px solid #ccc;
		p{
			width: 55px;
			text-align: center;
      font-size: 16px;
		}
		.search_input{
          flex:auto;
          position: relative;
         
          text-align: center;
          img{
          	position: absolute;
          	left:10%;
          	width: 12px;
          	height: 12px;
          	top:7px;
          }
          input{
          	background: #f5f5f5;
          	width: 90%;
          	height: 30px;
          	border:none;
          	border-radius:5px;
          	outline:none;
          	text-indent: 35px;
          }
		}
	}
    .box2{
    	width: 100%;
    	height:100%;
    	overflow: auto;
    }
    .content{
    	width: 100%;
    	height: auto;
    }
    .nav{
    	width: 100%;
    	height: 45px;
    	display:flex;
    	align-items: center;
    	justify-content: space-between;
    	padding:0 15px;
    	box-sizing: border-box;
    	p{
    		font-size: 16px;
    	}
    	img{
    		width: 14px;
    		height: 14px;
    	}
    }
    .none{
    	text-indent:20px;
    	font-size: 16px;
    	height: 100px;
    }
    .section{
    	width: 100%;
    	height:auto;
    	padding:0 10px;
    	box-sizing: border-box;
    	color:#666;
    	font-size: 14px;
        .one{
        	height: 35px;
        	line-height: 35px;
        	
        	
        }
    }
    .uls{
    	color:#666;
    	width: 100%;
    	height:auto;
    	display:flex;
    	flex-wrap:wrap;
    	li{
    		text-align: center;
            width: 18%;
            border-radius:5px;
            border:1px solid #ccc;
            height: 30px;
            line-height: 30px;
            margin-right:5%;
           margin-bottom: 10px;
    	}
    }


</style>