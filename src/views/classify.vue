<template>
<div id="app1">
   <header>
   	  <div class="nav">
        <input type="text" placeholder="请输入您要购买的商品" @focus="go">
        <img src="http://www.lb717.com/static/mobile/images/homeImg/serach.png" alt="">
      </div>
   </header>
      <div class="wrap">
         <div class="left">
           <ul>
             <li v-for="(x,index) in dataList"  v-on:click="add(index)" :key="index" >{{x.assortment}}</li>
           </ul>
         </div>
         <div class="right">
          <dl v-for="y in classData">
            <dt><img :src=y.urlImg alt=""></dt>
             <dd>{{y.describe}}</dd>
          </dl>
        </div>
       </div>

  </div>
</template>

<script>
//import classifyList from "../compont/classifyList.vue"

export default {
  name: 'app',
  data () {
    return {
      ind:0,
      dataList:[],
      classData:[
              {
                "urlImg":"http://www.lb717.com/static/mobile/images/category/jia3@2x.png",
                "describe":"东南"
              },
              {
                "urlImg":"http://www.lb717.com/static/mobile/images/category/jia2@2x.png",
                "describe":"西北"
              },
              {
                "urlImg":"http://www.lb717.com/static/mobile/images/category/jia1@2x.png",
                "describe":"东北"
              },
              {
                "urlImg":"http://www.lb717.com/static/mobile/images/category/jia4@2x.png",
                "describe":"西南"
              },
              {
                "urlImg":"http://www.lb717.com/static/mobile/images/category/jia5@2x.png",
                "describe":"中原"
              }]
    }
  },
  methods:{
    go(){
      this.$router.push({
        path:"/search"
      })
    },
    add(i){
      this.ind=i;
      this.classData=this.dataList[i].content
    
    }
  },
 mounted(){
      this.$http.get("../../static/data.json").then((data)=>{
          this.dataList=data.data.list
      })
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
  width: 100%;
  height: 45px;
  text-align:center;
  padding-top:10px;
  border-bottom:1px solid #eee;
  .nav{
     position: relative;
     background: #f5f5f5;;
     width: 80%;
     margin-left:10%;
     height: 30px;
     
     border-radius:18px;
    input{
      position: absolute;
      height: 25px;
      width: 60%;
      left:23%;
      border:none;
      background:#f5f5f5;
      outline: none;
      top:3px;
    }
    img{
     position: absolute;
     width: 15px;
     height: 15px;
     left:28px;
     top:8px;
    }
  }
}
 /*内容*/

.wrap{
  width: 100%;
  height:auto;
  display:flex;
  .left{
    width: 25%;
    background: #f0eced;
    li{
      height: 38px;
      line-height: 38px;
      text-align:center;
      font-size: 14px;
    }
  }
  .active{
    background:#fff;
  }
  .right{
    width: 75%;
   
    padding-left:5px;
    dl{
      height: 100px;
      width: 28%;
      background:#f7f7f7;;
      text-align:center;
      display:inline-block;
      margin-top:5px;
      dt{
        width: 60px;
        height: 60px;
        margin-left:8px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        height: 30px;
        line-height: 30px;
        font-size:14px;
        color: #909090;

      }
    }
  }

}
 

</style>