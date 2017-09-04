<template>
	<div class="ware">
          <div class="wrap">
            <div class="push-button" @click="isShow">
                 <span :class="{btn:states}"></span>
             </div>
                <div class="img"><img :src="ImgUrl" alt=""></div>
                <div class="deatil">
                  <p class="txt">{{content}}</p>
                  <p>×{{num}}</p>
                  <p class="color">￥{{price}}</p>
                  <div class="pa">
                     <button class="cancel" @click="cancel">-</button><input type="button" v-model="num" class="amount"><button class="add" @click="add">+</button>
                  </div>
                </div> 
          </div> 
      </div>
</template>	
<script>

	export default({
		data(){
			return {
              num:1,
              states:false
			}
		},
		props:["content","ImgUrl","con","price","shopId","judge","state"],
    mounted(){
     
    },
    methods:{
			isShow(){

        this.$store.commit("Single_click")
        console.log( this.state)
        this.states = !this.states
        this.$set()
        // this.Single_click=this.$store.state.Single_click
      },
			cancel(){
				this.num<=1?this.num=1:this.num--
				if(!this.states){
					this.upData()
				}
				
			},
            add(){
                this.num++
                if(!this.states){
                	this.upData()
                }
            },
            upData(){
            	if(!this.states){
					        this.$store.commit(this.shopId,this.num*this.price)
                }else{
                	this.$store.commit(this.shopId,0)
                }
               console.log(this.$store.state.total)
            }
		},
		watch:{
         states:function(data){
         	if(data){
               this.$store.commit(this.shopId,0)
         	}else{
               this.$store.commit(this.shopId,this.num*this.price)
         	}
         }
		}

	})

</script>
<style lang="scss" scoped>
	/*购买的商品*/
 .ware{
  width: 100%;
  height:auto;
  
  .wrap{
    display:flex;
    height: 120px;
    align-items: center;
     background:#fff;
     margin-bottom:10px;
  }
  .push-button{
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius:40px;
    // border: 1px solid #ccc; 
    flex:none;
    span{
      display: inline-block;
 	width: 20px;
 	height:20px;
 	border:1px solid #ccc;
 	border-radius:100%;
   margin-left:9px;
    }
    .btn{
       background: red;
       display:inline-block;
       width: 20px;
        position: relative;
       border:1px solid #ccc;
      	height:20px;
    }
    .btn:after{
      content: "";
      position: absolute;
      width: 10px;
      height: 5px;
      border: 1px solid transparent;
      border-bottom-color: #fff;
      border-left-color: #fff;
      left:3px;
      top:5px;
      transform: rotate(-45deg);
      
    }
    .btn2{
	    width: 20px;
	 	height:20px;
	 	color:#fff;
	 	border-radius:100%;
	 	margin-left:9px;
	 	text-align:center;
	 	line-height: 20px;
	 	background: #fc4141;
    }
  }
   .img{
    width:87px;
    height: 87px;
   
    flex:none;
    img{
      width:100%;
      height: 100%;
       border-radius:5px;
    }
   }
   .deatil{
      flex:auto;
      position:relative;
      padding-left:8px;
      .txt{
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        overflow: hidden;
        color:#666;
      }
      .color{
            color: #fc4141;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
      }
      .pa{
        position: absolute;
        right:5px;
        bottom: 2px;
         button{
          outline: none;
          width: 30px;
          height: 30px;
          background: #fff;
          border:none;
          border:1px solid #ccc;
        }
        .amount{
          width: 45px;
          height: 30px;
          background: #fff;
          border:0;
          border:1px solid  #ccc;
        }
      }
   }
 }



</style>