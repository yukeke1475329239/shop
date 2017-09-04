<template>
    <div id="app">
    <header>
      <p @click="retun_Page"><img src="http://www.lb717.com/static/mobile/images/return.png" alt=""></p> 
      <p>收货地址</p> 
      <p></p>
    
    </header>
     <main>
         <div class="box" v-for="(x,i) in address_list">
             <div class="one">
                 <p class="name">{{x.username}}</p>
                 <p class="tel">{{x.phone}}</p>
             </div>
             <div class="address">
                 <p class="">{{x.province}}</p>
                 <p>{{x.city}}</p>
                 <p>{{x.area}}</p>
                  <p>{{x.save_address}}</p>
             </div>  
             <div class="is_default">
                 <div class="configDefault" @click="set_default(i)">
                   <p :class="{btn:x.is_default}"></p>
                   <p>设为默认</p>
                 </div>
                 <div class="edit">
                     <p @click="edit_address(i)">
                         <img src="http://www.lb717.com/static/mobile/images/goshop/edit.png" alt="">
                         编辑
                      </p>
                     
                     <p @click="del_address(i)"><img src="http://www.lb717.com/static/mobile/images/goshop/rem.png" alt="">删除</p>
                 </div>

             </div>     
         </div>
            
         <div class="New_add_address">
             <p @click="address_Page"> 
                 <img src="http://www.lb717.com/static/mobile/images/goshop/add.png"> 
                 <span>新增加地址</span>
             </p>
         </div> 
     </main>
    <div class="footer"> </div>
  </div> 
</template>
<script>
  export default({
    //   name: '#app',
     data() {
       return {
         address_list:[]
       }
     },
    methods:{
        set_default(ind){
             this.$store.commit('reset_default',ind)
        },
        del_address(ind){
          this.$store.commit("del_address",ind)
          this.save_address_to()
        },
        edit_address(ind){
           this.$router.push({
               name:"Delivery_address",
               params:{
                   index:ind
               }
           })
             
        },
        retun_Page(){
            this.$router.go(-1)
        },
        address_Page(){
            this.$router.push({
                name:"Delivery_address",
                params:{index:'new'}
                })
        },
        save_address_to(){
               let ls=localStorage
               ls.setItem("address",JSON.stringify(this.$store.state.address_info))
        } 
    },
    mounted(){
        this.address_list=this.$store.state.address_info
    },
    created(){
            if(localStorage.getItem('address')){
                this.$store.commit('add_address_info',JSON.parse(localStorage.getItem('address')))
            }
    }

  })  
   
</script>
<style scoped lang="scss">
   #app{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
      box-sizing:border-box;
 }
  header{
      width: 100%;
      height: 45px;
      position: relative;
      line-height: 45px;
      text-align:center;
      font-size:16px;
      border-bottom:1px solid #ccc;
      :first-child{
          position:absolute;
          left:5%;
          top:6px;
          img{
              width: 25px;
              height: 20px;
          }
      }
      :last-child{
          position:absolute;
          right:5%;
      }
  }
  main{
       background: #eee;
       flex:1;
  }
     .footer{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 55px;
        background:#eee;
        z-index: 10;
    }
    .box{
        width: 100%;
        height:auto;
        background: #fff;
    }
    .one,.address{
        width: 100%;
        height: 35px;
        align-items: center;
        padding-left:15px;
        font-size:16px;
        display:flex;
        .tel{
            text-indent: 20px;
            color:#666;
        }
        &:nth-of-type(2n+1){
            align-items: flex-end;
        }
        &:nth-of-type(2n){
            font-size:14px;
            color:#666;
             border-bottom:1px solid #ccc;
              height: 35px;
        }
    }
    .is_default{
        border-bottom:1px solid #ccc;
        width: 100%;
        height: 35px;
        display:flex;
        justify-content: space-between;
        .configDefault{
            display:flex;
            align-items:center;
            :first-child{
                width: 20px;
                height: 20px;
                border-radius:100%;
                border:1px solid #ccc;
                margin:0 15px;
            }
            .btn{
                background: #fc4141;
                position: relative; 
            }
            .btn::after{
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
        }
        img{
            width: 20px;
            height: 20px;
            margin:0 10px;
            margin-top:10px;
        }
        .edit{
            display:flex;
            align-items: center;
        }
    }
     .New_add_address{
      width: 100%;
      height: 45px;
      margin-top:30px;
      span{
          display:inline-block;
      }
      img{
          width: 15px;
          height: 15px;
      }
      p{
          width: 60%;
          margin-left:20%;
          height: 45px;
          border-radius:30px;
          background:#fc4141; 
          color:#fff;   
          display:flex;
          align-items: center;
          justify-content: center;
          font-size:16px;
          span{
              text-indent: 10px;
          }
      }
  }
    



</style>   