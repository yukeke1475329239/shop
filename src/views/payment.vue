<template>
	<div class="app1">
	<div class="mask" v-if="flag">
		<div class="popup">
			 <p class="title">提示</p>
			 <div class="content">
			 	<p>您还未填写收货地址信息,请先添加地址</p>
			 </div>
			 <div class="btn">
			 	<button v-on:click="cancel">取消</button>
			 	<button v-on:click="add">去添加</button>
			 </div>
		</div>
	</div>	
		<header>
			<dl>
			   <dt v-on:click="returnPage"><img src="http://www.lb717.com/static/mobile/images/return.png" alt=""></dt> <dd>返回</dd>
            </dl>
			<p>订单支付</p>
		</header>
		<section>
			<div class="address_box">
				<div class="contact">
					<span class="bold">小明</span>
					<span>15810265841</span>
				</div>
				<div class="address">
					北京 北京 石景山区
				</div>
				<p class="addressImg"><img src="http://www.lb717.com/static/mobile/images/myimg/my19.png" alt=""></p>
				<p class="Arrow">
					<img src="http://www.lb717.com/static/mobile/images/homeImg/dayreturn.png" alt="">
				</p>
			</div>
			<div class="background">
				<img src="http://www.lb717.com/static/mobile/images/goshop/6.gif" alt="">
			</div>
			<div class="goods">
			        <p class="name">
						<img src="http://www.lb717.com/static/mobile/images/order/1.png" alt="">
						<span>第玖商城</span>
					</p>
				<dl class="pr">
					<dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/1348/2017-03/huge/6695064093.jpg" alt=""></dt>
					<dd>
						<p>
						<img src="http://www.lb717.com/static/mobile/images/pre_label.png" alt="">
                         西域美农 玫瑰红葡萄干  250g
						</p>
						<p class="price">￥9.90</p>
						<p class="Discount_price"><i>￥</i><span>16.00</span></p>
						
						
					</dd>
					<div class="pa">
							<span class="cancel">-</span>
							<span class="number">1</span>
							<span class="add">+</span>
						</div>
				</dl>
				<div class="tot">
					<p><span>商品总金额:</span><span>￥9.90</span></p>
					<p><span>运费:</span><span>￥6.00</span></p>
					<p><span>总额(含运费):</span><span class="freight">￥15.90</span></p>
				</div>				
			</div>
			
			<div class="Payment_method">
				  <div class="balance">
				      <p><span>余额支付</span><span>￥0.00</span></p>
				      <p class="switch">
				         <input type="checkbox" class="checkbox" id="name1">
				         <label for="name1" class="checkbox_label"></label>
				      </p>
				  </div>
				<div class="balance">
				      <p><span>奖金支付</span><span>￥0.00</span></p>
				      <p class="switch">
				         <input type="checkbox" class="checkbox" id="name2">
				         <label for="name2" class="checkbox_label"></label>
				      </p>
				  </div>
				</div>
				<div class="balance2">
					<p class="p">
					<img src="http://www.lb717.com/static/mobile/images/hometown/home06.png" alt="">
					<i class="txt">微信支付</i>
					</p>
					<p class="choice"></p>
				</div>
				<div class="balance2">
					<p class="p">
					<img src="http://www.lb717.com/static/mobile/images/hometown/home09.png" alt="">
					<i class="txt">支付宝支付</i>
					</p>
					<p class="choice"></p>
				</div>
				<div class="balance2">
					<p class="p">
					<img src="http://www.lb717.com/static/mobile/images/hometown/home11.png" alt="">
					<i class="txt">银联支付</i>
					</p>
					<p class="choice"></p>
				</div>
		</section>
        <footer id="footer">
        	<div class="total">
        		<div class="color"><span>总计:</span><span>266</span><p>(含运费)</p></div>
        	</div>
        	<p class="submit">提交订单</p>

        </footer> 
	</div>
</template>
<script>
	
	export default{
		data(){
			return {
               flag:true
			}
		},
		methods:{
			returnPage(){
				this.$router.push("goods")
			},
			cancel(){
               this.flag=false
			},
			add(){
               this.$router.push("Delivery_address")
			}
		}
	}
</script>
<style lang="scss">
.mask{
	width: 100%;
	height: 100%;
	background: #000;
	// opacity: 0.7;
	position:absolute;
	top:0;
	left:0;
	bottom: 0;
	z-index:99;
    background: rgba(0, 0, 0, 0.8);
}
.popup{
	width: 240px;
	height: 140px;
	background: #fff;
	border-radius:15px;
	z-index:100;
	position: absolute;
	left:50%;
	top:50%;
	transform:translate3d(-50%,-50%,0);
	.title{
		width: 100%;
		height: 40px;
		text-align:center;
		line-height: 40px;
		font-size: 16px;
	}
	.content{
		width: 100%;
		height:auto;
		p{
			width: 70%;
			margin-left:15%;
			height: 50px;
			
        }
	}
	.btn{
		width: 100%;
		height: 35px;
		border-top:1px solid #ccc;
		height: 49px;
		
        button{
			display:inline-block;
			width: 49%;
			border:none;
			height: 100%;
			
			background: #fff;
			&:nth-of-type(2n){
				border-radius:0 0 15px 0;
				border-left:1px solid #ccc;
			}
			&:nth-of-type(2n+1){
				border-radius:0 0 0 15px;
			}
		}
	}
}
	.app1{
		width: 100%;
		height: 100%;
		display:flex;
		flex-direction:column;
		overflow: hidden;
		font-family: "YouYuan";
	}
	header,#footer{
		display:flex;
		height: 55px;
		align-items: center;
		flex:none;
		width: 100%;
	}
	header{
		font-size: 18px;
		border-bottom: 1px solid #ccc;
		dl{
			width:40%;
		    justify-content: center;
			display:flex;
			height: 100%;
			align-items: center;
			font-size: 16px;
            img{
			width: 20px;
			height: 20px;
		  }
		}
		:last-child{
			flex:auto;
		}
	}
	#footer{
		position:fixed;
		bottom: 0;
        z-index: 2;
        background: #fff;
        display:flex;
		.total{
			flex:auto;
			display:flex;
			justify-content: flex-end;
			padding-right:15px;
			.color{
				span{
					display:inline-block;
					color: #fc4141;
			        font-weight: bold;
			        font-size: 16px;
				}
				
			}
		}
		.submit{
			width: 120px;
			height: 55px;
			color:#fff;
	        background: #fc4d4d;
	        font-size: 16px;
	        text-align: center;
	        line-height: 55px;
		} 

	}
	section{
		width: 100%;
		height: 100%;
		overflow: auto;
        background: #eee;
	}
	.contact{
		height: 40px;
		line-height: 40px;
		span{
			text-indent: 30px;
		}
		.bold{
			font-weight: bold;
		}
	}
	.address{
		text-indent:30px;
		
	}
	.address_box{
		width: 100%;
		height: 70px;
		position: relative;
		background: #fff;
		span{
			display:inline-block;
		}
		.addressImg{
			position: absolute;
            left:10px;
            top:20px;
            img{
            	width: 10px;
            	height: 15px;
            }
		}
		.Arrow{
			position: absolute;
			right:10px;
			top:20px;
			img{
				width: 10px;
				height: 15px;
			}
		}
	}
.background{
	width: 100%;
	height: 8px;
	line-height: 8px;
	img{
		width: 100%;
		height:auto;
	}
}
.goods{
	width: 100%;
	height:auto;
    margin-top:10px;
    background: #fff;
    .name{
    	width: 100%;
    	height: 35px;
    	line-height: 35px;
    	display:flex;
        font-size:16px;
    	img{
    		width: 18px;
    		height: 17px;
            margin-left:15px;
            margin-top:10px;
    	}
    }
}
.pr{
	width: 100%;
	height: 100px;
	display:flex;
	padding-left:15px;
	 box-sizing: border-box;
	 position: relative;
	dt{
		width: 85px;
		height: 85px;
        img{
			width: 100%;
			height:auto;
		}
	}
	dd{
		width: 180px;
		padding-left:10px;
        box-sizing: border-box;
		:first-child{
			font-size:14px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			height: 40px;
			line-height: 40px;
			img{
				width: 28px;
				height: 15px;
			}
		}
		.price{
			color: #fc4d4d;
			height: 25px;
			line-height: 25px;

		}
		.Discount_price{
			display:flex;
			align-items: center;
			color:#ccc;
			height: 25px;
			
			i{
				font-style:normal;
            }
			span{
			 text-decoration: line-through;
			 display:inline-block;
			 line-height: 20px;
			 height: 20px;
			}
		}

	}
	.pa{
			position: absolute;
			display:flex;
			right:10px;
			width: 100px;
			bottom:20px;
			span{
				width: 30px;
				height: 25px;
				border:1px solid #ccc;
				color:#333;
				text-align:center;
				line-height: 25px;
            }
            .cancel{
            	border-radius:5px 0 0 5px;
            }
            .add{
            	border-radius:0 5px 5px 0;
            }
		}	
}
.tot{
	width: 100%;
	height:auto;
	p{
	  display:flex;
	  justify-content:space-between;
	  padding:0 15px;
	  box-sizing: border-box;
	  color:#666;
	  height: 25px;
	  line-height: 25px;
	  font-size:12px;

	}
	.freight{
		font-weight: bold;
		color: #fc4d4d;
	}
}
.Payment_method{
	width: 100%;
	height:auto;
	
    color:#666;
    margin-top:10px;
    background: #fff;
	.balance{
		width: 100%;
		height: 55px;
		display:flex;
		padding:0 15px;
        box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid #ccc;

		span{
			display:inline-block;
		}
		.switch{
          width: 60px;
          height: 100%;
          position: relative;
		}
		.checkbox{
          position: absolute;
          left:-1000px;
          visibility: hidden;
		}
		.checkbox:checked+.checkbox_label{
			background:lightgreen;

		}
         .checkbox_label{
			position: absolute;
			width: 55px;
			height: 30px;
			top:11px;
			border-radius:30px;
			border:1px solid #eee;
			background: #fff;
		}
		.checkbox_label:after{
			display:inline-block;
			margin-top:-1px;
			content:"";
			width: 30px;
			height: 30px;
			background: #fff;
			border-radius: 20px;
			border:1px solid #eee;
            transition: all 0.5s ease;
		}
		.checkbox:checked + label:after{
            margin-left:24px;
		}

	}
}
.balance2{
		width: 100%;
		height: 55px;
		background: #fff;
		display:flex;
		align-items: center;
		padding:0 35px 0 15px;
		box-sizing: border-box;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		.p{
			width: 120px;
			height: 55px;
			line-height: 55px;
			position: relative;
		}
		span{
			display:inline-block;

		}
		img{
			width: 35px;
			height: 35px;
			margin-top:4px;
		}
		.choice{
			width: 30px;
			height: 30px;
			border:1px solid #ccc;
			border-radius:100%;
		}
		.txt{
			position: absolute;
			
			left:50px;
			font-style:normal;
		}
	}







</style>