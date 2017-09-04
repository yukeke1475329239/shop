import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Home from './views/Home.vue'
import classify from './views/classify.vue'
import goods from './views/goods.vue'
import my from './views/my.vue'
import search from './views/search.vue'
import details from './views/details.vue'
import reset from './css/reset.css'
import payment from './views/payment.vue'
import Delivery_address from './views/Delivery_address.vue'
import myAddress from './views/myAddress.vue'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import store from "./store/store"
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.prototype.$http=axios;
const routes=[
      {
      	path:"/",
      	redirect:{
      		name:"Home"
      	}
      },
      {
      	name:"Home",
      	path:"/Home",
      	component:Home
      },
      {
        name:"classify",
        path:"/classify",
        component:classify
      },
      {
        name:"goods",
        path:"/goods",
        component:goods
      },
      {
        name:"my",
        path:"/my",
        component:my
      },
      {
        name:"search",
        path:"/search",
        component:search
      },
      {
        name:"details",
        path:"/details",
        component:details
      },
      {
        name:"payment",
        path:"/payment",
        component:payment
      },
      {
        name:"Delivery_address",
        path:"/Delivery_address/:index",
        component:Delivery_address
      },
      {
        name:"myAddress",
        path:"/myAddress",
        component:myAddress
      }
]

const store=new Vuex.Store({
    state:{
    arr:[],
    finalTotal:0,
    total:0,
    one:0,
    two:0,
    three:0,
    five:0,
    Single_click:true,
    asyc:false,
    goods_info:[],
    address_info:[]
    },
    mutations:{
      del_address:function(state,ind){
       state.address_info.splice(ind,1)
      },
      add_goods:function(state,goods){
        state.goods_info.push(goods)
      },
      add_address_info(state,address){
        if(Object.prototype.toString.call(address)=='[object Array]'){
          state.address_info=address
        }else if(Object.prototype.toString.call(address)=='[object Object]'){
            state.address_info.push(address)
        }else{
          console.log("格式不正确")
        }
        
      },
      edit_address(state,data){
        state.address_info[data[1]]=data[0]
      },
      reset_default(state,ind){
         state.address_info=state.address_info.map((item)=>{
            item.is_default=false
             return item
         })
          state.address_info[ind].is_default=true
      },
      Single_click:function(state){
        console.log(state.Single_click)
        state.Single_click=!state.Single_click
      },
      asyc:function(state){
        
         state.asyc=!state.asyc
         console.log()
      },
      judge:function(state){
        console.log()
          state.Single_click=!state.Single_click
      },
      goods:function(state,el){
        console.log(el)
         state.arr.push(el)
      },
      one:function(state,el){
          state.one=el;
          state.total=state.one+state.two+state.three+state.five
      },
      two:function(state,el){
          state.two=el;
          state.total=state.one+state.two+state.three+state.five
      },
      three:function(state,el){
          state.three=el;
          state.total=state.one+state.two+state.three+state.five
      },
      five:function(state,el){
          state.five=el;
          state.total=state.one+state.two+state.three+state.five
      }
    }
})
let router=new VueRouter({
    routes,
})
let vm=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data:{

 },
 created:function(){
      this.$http.get("./server/detail.json").then((data)=>{
        store.state.items=data.data.items
      })
  }
})
