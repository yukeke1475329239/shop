<template>
	<div class="app1">
		<header>
			<p><span><img src="http://www.lb717.com/static/mobile/images/return.png" alt=""></span><span class="go" v-on:click="go_Home">返回</span></p>
			<div class="title">
				<span>商品</span>
				<span>详情</span>
				
			</div>
		</header>
		<section>
			<dl class="goods">
				<dt><img :src="data.url" alt=""></dt>
				<dd class="pr">
				   <p>{{data.con}}</p>
				   <p>￥{{data.price}}</p>
				   <p>(运费:￥0)</p>
				   <p class="pa">溯源查询</p>
				</dd>
			</dl>
		</section>
		<footer>
		      <p>
				<img src="http://www.lb717.com/static/mobile/images/food/05.png" alt=""><span>客服</span>
				</p>
				<p  class="pr"><b>{{num()}}</b>
				 <img src="http://www.lb717.com/static/mobile/images/footer/3.png" alt=""> 
				   <span>购物车</span>	
				</p>
				<p class="purchase cart">加入购物车</p>
			    <p class="purchase buyNow">立即购买</p>
		</footer>
	</div>
</template>
<script>
export default{
	data(){
		return {
           ind:0,
           data:""
                   
		}
	},
	methods:{
		go_Home(){
			this.$router.push("Home")
		},
		num(){
			 return this.$store.state.arr.length
		}
	},
	mounted(){
		this.ind=this.$route.query.sum
		this.data=this.$store.state.items[this.ind]
		
	}
}	

</script>
<style lang="scss" scoped>
	.app1{
       width: 100%;
       height: 100%;
     /*  display:flex;
       flex-direction:column;*/
	}
	span{
		 display:inline-block;
	}
	b{
		display:flex;
	}
	header{
		width: 100%;
		height: 50px;
		display:flex;
		align-items: center;
		border-bottom:1px solid #ccc;
		font-size: 16px;
		color:#666;
		
		p{
			width: 80px;
			
			position: relative;
			img{
				width: 20px;
				height: 20px;
                position: absolute;
                top:1px;
                left:10px;
			}
			.go{
				position: absolute;
				top:0px;
				left:30px;
			}
			
		}
		.title{
			flex:auto;
			margin-left:45px;

		}
	}
	section{
	  width: 100%;
		  
	}
   footer{
        width: 100%;
	   	height: 55px;
	   	line-height: 55px;
	   	position: fixed;
	   	bottom: 0;
	   	background: #fff;
	   	display:flex;
	   	flex:none;
	   	padding-left: 10px;
	   	z-index: 1;
		.pr{
			position:relative;
			b{
				    display:inline-block;
					width: 18px;
					height: 15px;
					padding-bottom: 2px;
					color: plum;
					text-align:center;
					line-height: 20px;
					color:#fff;
					background: #fc4141;
					border-radius: 100%;
					position: absolute;
					top: -4px;
					right: 5px;
			}
		}
	    p{
            flex:auto;
            height: 55px;
            line-height: 55px;
            img{
	   			width: 20px;
	   			height: 20px;
	   			display:block;
            }
            span{
            	height: 20px;
            	line-height: 20px;
            }	
        }
	   		
            
	  
	   	.purchase{
	   		width: 120px;
	   		text-align: center;
	   		font-size: 16px;
	   		color:#fff;
	   	}
	   	.cart{
	   		  background: #fe8282;
	   	}
	   	.buyNow{
	   		    background: #fb4142;
	   	}
   }
   .goods{
   	width: 100%;
   	height:400px;
   	dt{
   		width: 100%;
   		height: 300px;
   		border-bottom:1px solid #eee;
   		img{
   			width: 100%;
   			height:100%;
   		}
   	}
   	dd{
   		height: 100px;
   		padding-left:15px;
   		position: relative;
   		p{
   			height: 30px;
   			line-height: 30px;
   		}
   		.pa{
   			position: absolute;
   			right:20px;
   			width: 80px;
   			height: 35px;
   			background: #4f99f2;
   			border-radius:5px;
   			color:#fff;
   			text-align:center;
   			line-height: 35px;
   			bottom:10px;

   		}
   	}
   
   }
</style>