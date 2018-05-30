<template>
    <div class="title-bar">
      <!--   <template v-if="isShowAlert">
            <v-project-state-alert></v-project-state-alert>
        </template> -->
        
        <el-row :gutter="20">
          <el-col :span="6" class="home-update-time">
              <div class="grid-content bg-purple home-col-init">
                  <i class="el-icon-time"></i><span class="update-time-padding">更新时间 {{updateTime}}</span>
              </div>
          </el-col>
          <el-col :span="14">
            <div class="title-content">
                <div class="home-title-icon" :style="homeTitleIcon"></div>
                <div class="grid-content bg-purple home-title home-col-init">跨越电商开发项目</div>
                <div class="clear-both"></div>
            </div>
            
            
          </el-col>
          <el-col :span="4" class="home-issue">
              <div class="grid-content bg-purple home-col-init status-content" v-on:click="projectStateClick">
                  <div class="title-point"></div>
                  <div class="status-text">项目状态正常</div>
                  <div class="title-blank"></div>
              </div>
          </el-col>

        </el-row>
    </div>
</template>

<script>

export default {
    props: ['updateTime'],
    data(){
        return{
            homeTitleIcon: {
                backgroundImage: 'url(' + require('../assets/imgs/KYE.png') + ')',
            }
            
        }
    },
    methods: {
        projectStateClick: function(){
            
            this.$emit('projectState')
        } 
    }
}
</script>

<style lang="scss" scoped>
    .home-col-init{
        border: none;
        text-align: center;
        background-color: #f3f7fa;
    }
    .home-update-time{
        text-align: left;
        color: #7b85a5;
        font-size: 16px;
        margin-top: 10px;
    }
    .home-issue{
        color: grey;
        padding-left: 60px !important;
    }
    .home-title{
        
        float: left;
        color: #66aae9;
        font-size: 22px;
        font-weight: 600;
        margin-left: 12px;
        padding-top: 3px;

    }
    .title-bar{
      height: 50px;
      background-color: #26293c;
      margin-top: 60px;
    }
    .title-point{
      float: left;
      width: 13px;
      height: 13px;
      background-color: #45be89;
      border-radius: 50%;
    }
    .status-text{
      float: left;
      width: 110px;
      height: 10px;
      font-size: 16px;  
      text-align: left;
      padding-left: 10px;
      color: #7b85a5;
    }
    .status-content{
      margin-top: 10px;
      cursor: pointer;
    }
    .title-blank{
      clear: both;
    }
    .grid-content{
      background-color: #26293c;
    }
    .home-title-icon{
      float: left;
      width: 32px;
      height: 30px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .clear-both{
      clear: both;
    }
    .title-content{
      width: 245px;
      margin-left: 300px;
    //   margin-right: auto;
    }
    .update-time-padding{
        padding-left: 10px;
    }
</style>

