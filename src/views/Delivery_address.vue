<template>
  <div id="app">
         <transition>
                <p class="tip" v-if="address_Show">添加地址成功</p>
        </transition> 
    <header>
      <p @click="retunPage"><img src="http://www.lb717.com/static/mobile/images/return.png" alt=""></p> 
      <p>收货地址</p> 
      <p></p>
    
    </header>
     <main>
       <form class="address_form">
          <p><input type="text" placeholder="收货人姓名" name="user_name" class="user_name" v-model="username"></p> 
          <p><input type="text" placeholder="手机号" name="tel" class="tel" v-model="phone"></p>
          <nav>
              <div class="select_left">
                  <select name="" id="select_left" v-model="province" @change="province_fn">
                      <option value="请选择省" selectIndex>请选择省</option>
                      <option v-for="(p,index) in province_list" :value="p.name">{{p.name}}</option>     
                  </select>
              </div>
                 <div class="select_right">
                    <select name="" id="select_right"  v-model="city" @change="region_cli">
                         <option value="请选择市" selectIndex>请选择市</option> 
                         <option v-for="c in city_list">{{c.name}}</option> 
                    </select>
                </div> 
          </nav>
           <p class="region">
            <select name="" id="region" v-model="area">
               <option value="请选择区" selectIndex>请选择区</option> 
               <option :value="r" v-for="r in region_list">{{r}}</option>  
            </select> 
          </p>  
          <p class="address_select">
             <input type="text" placeholder="详细地址" id="address_select" v-model="save_address">

          </p> 
            <div class="is_default">
                <p v-bind:class="{bg:is_default}"></p>
                 <input type="checkbox" v-model="is_default" class="checkbox"> 
                <p>设为默认地址</p>
            </div>       
       </form> 
      
        
          <div class="New_add_address">
             <p @click="save"> 
                <span>保存地址</span>
             </p>
         </div>
     </main> 
    <div class="footer"> </div>
  </div>  
</template>
<script>
    export default({
        data(){
            return {
                username:"",
                phone:"",
                asyc:false,
                province:"请选择省",
                save_address:"",
                province_list:[],
                city:"请选择市",
                city_list:[],
                region:"",
                region_list:[],
                flag:true,
                area:"请选择区",
                address_Show:false,
                is_default:true
               
            }
        },
        
        methods:{
            New_add_address(){
                this.asyc=!this.asyc
                this.flag=false
            },
             retunPage(){
              this.$router.go(-1)
           },
           province_fn(){
             this.province_list.forEach((v,i)=>{
                 if(v.name==this.province){
                  this.city_list=v.city
                 }
             })
           },
           region_cli(){
               this.city_list.forEach((v,i)=>{
                  if(this.city==v.name){
                     this.region_list=v.area
                  }
               })
           },
           save(){
              let vm=this
              let ind=vm.$route.params.index;
              if(this.username && this.phone && this.province && this.city && this.area && this.save_address){
                   let obj_address={
                       username:vm.username,
                       phone:vm.phone,
                       province:vm.province,
                       city:vm.city,
                       area:vm.area,
                       save_address:vm.save_address,
                       is_default:vm.is_default
                   }
                   if(ind=='new'){
                       this.$store.commit("add_address_info",obj_address)
                        this.address_Show=true
                        setTimeout(()=>{
                                this.address_Show=false
                        },1000)
                        // setTimeout(()=>{
                        //         this.$router.go(-1)
                        // },3000)
                        this.$store.commit('reset_default',this.$store.state.address_info.length-1)
                    }else{
                        this.$store.commit('edit_address',[obj_address,ind])
                        if(this.is_default){
                            this.$store.commit('reset_default',ind)
                        }
                    }
                    
                     vm.$router.push({name:'myAddress'})
                     vm.save_address_to()
              }else{
                  alert("请填写完整信息")
              }
           },
           save_address_to(){
               let ls=localStorage
               ls.setItem("address",JSON.stringify(this.$store.state.address_info))
           } 
        },
        created(){
             this.$http.get("./server/address.json").then((data)=>{
             this.province_list=data.data.data
            })
        },
        mounted(){
        //   let inx=this.$route.paramsthis.$route.params
          let obj=this.$store.state.address_info[this.$route.params.index] 
          if(!obj) return 
          this.username=obj.username
          this.phone=obj.phone
          this.province=obj.province
          this.city=obj.city
          this.area=obj.area
          this.save_address=obj.save_address
          this.is_default=obj.is_default
        }
       
    })


</script>
<style lang="scss" scoped>
      .v-enter,.v-leave-to{
            opacity: 0;
        }
        .v-enter-to,.v-leave{
            opacity: 1;
        }
        .v-enter-active,.v-leave-active{
            transition: opacity 2s ease;
        }
    	.tip{
    		position: fixed;
    		width:80%;
    		height: 35px;
    		background: #000;
    		color:#fff;
    		text-align:center;
    		line-height: 35px;
    		bottom:50%;
    		left:10%;
            border-radius:20px;
            
    	}
        .checkbox{
            opacity: 0;  
           display:inline-block;
           
            
        }
  #app{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
      box-sizing:border-box;
  }
 main{
     flex:1;
     background: #eee;
 }
  header{
      width: 100%;
      height: 45px;
      position: relative;
      line-height: 45px;
      text-align:center;
      font-size:16px;
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
  .address_form{
      width: 100%;
      height:auto;
      padding-left:10px;
     
  }
  .user_name,.tel{
      width: 94%;
      height: 40px;
      border:none;
      margin-top:15px;
      font-size:16px;
      text-indent: 16px;
      color:#666;
      outline:none;
  }
  nav{
      display:flex;
      width: 100%;
      height: 40px;
    //   justify-content:space-between;
      margin-top:10px;
      font-size:16px;
  }
  .select_left,.select_right{
      width: 100px;
      #select_left,#select_right{
          width: 100px;
          height: 40px;
          outline: none;
          border:0;
          text-indent: 10px;
      }
      #select_right{
          margin-left:70px;
      }
  }
    .region{
        width: 100%;
        height: 40px;
        font-size:16px;
        margin-top:10px;
        #region{
            width: 95%;
            height: 100%;
            outline: none;
            border:0;
            text-indent: 10px;
        }
    }
    .address_select{
        width: 100%;
        height: 40px;
        margin-top:10px;
        font-size:16px;
       
        #address_select{
            width: 95%;
            height: 100%;
            border:0;
             outline: none;
              text-indent: 10px;
        
        }
    }
    .footer{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 55px;
        background:#eee;
        z-index: 10;
    }
    .is_default{
        width: 100%;
        height: 60px;
        display:flex;
        align-items: center;
        padding-left:15px;
        font-size:14px;
        :first-child{
            width: 20px;
            height: 20px;
            border-radius:100%;
            border:1px solid #ccc;
        }
        .bg{
            background: #fc4141;
            position:relative;
        }
        .bg::after{
            position: absolute;
            content:"";
            width: 10px;
            height: 5px;
            border:1px solid transparent; 
            border-bottom-color: #fff;
            border-left-color: #fff;
            left: 3px;
            top: 5px;
            transform: rotate(-45deg); 
        }
        
    }
</style>          
