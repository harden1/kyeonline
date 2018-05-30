<template>
    <div>
        <div class="member-content">
            <div class="member-title-blank"></div>   
            <div class="member-title-container">
                <div class="member-tiitle-logo" :style="memberTitleIcon"></div>
                <div class="member-title-text">项目成员</div>
                <div class="member-to-home" :style="memberToHomeIcon" v-on:click="memberToHomePage"></div>
                <div class="member-blank"></div>
            </div>
        </div>
        <div class="member-list">
            <div class="member-list-title">组织架构图</div>
            <div class="member-list-leader" :style="memberLeaderBac">
                <div class="member-leader-name">{{projectLeader}}</div>
                <div class="member-leader-desc">项目负责人</div>
            </div>
            <div class="member-list-line" :style="memberLine"></div>
            <div class="member-list-type">
                <div class="member-red-tag">
                    <div class="member-list-tag">
                        项目管理
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div> 
                <div class="member-yellow-tag">
                    <div class="member-list-tag">
                        产品运营
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div> 
                <div class="member-blue-tag">
                    <div class="member-list-tag">
                        技术中心
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div> 
                <div class="member-green-tag">
                    <div class="member-list-tag">
                        互联网
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div> 
                <div class="member-purple-tag">
                    <div class="member-list-tag">
                        测试
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div> 
                <div class="member-manage-tag">
                    <div class="member-list-tag">
                        运维
                    </div>
                    <div class="member-list-tag-transgo"></div>
                </div>

                <div class="member-blank"></div> 
            </div>

            <div class="member-list-content">
                <div class="member-red-makeup member-makeup">
                    <div v-for="item in projectManageArr">
                        <div class="member-red-makeup-item member-item">
                            <div class="member-makeup-item-name">{{item.name}}</div>
                            <div class="member-makeup-item-pos font-color-red">{{item.position}}</div>
                        </div>
                        <div class="member-blank-5"></div>
                    </div>
                </div>
                <div class="member-yellow-makeup member-makeup">
                    <div v-for="item in productOperationArr">
                        <div class="member-yellow-makeup-item member-item">
                            <div class="member-makeup-item-name">{{item.name}}</div>
                            <div class="member-makeup-item-pos font-color-yellow">{{item.position}}</div>
                        </div>
                        <div class="member-blank-5"></div>
                    </div>    
                </div>
                <div class="member-blue1-makeup member-makeup">
                    <div v-for="item in technologyArr">
                        <div class="member-blue1-makeup-item member-item">
                            <div class="member-makeup-item-name">{{item.name}}</div>
                            <div class="member-makeup-item-pos font-color-blue">{{item.position}}</div>
                        </div>

                    </div>  
                     <div class="member-blank"></div> 
                </div>
                <div class="member-green-makeup member-makeup">
                    <div class="member-green-makeup-scroll"  @wheel="memberMouseScroll($event)">
                        <div v-for="item in internetArr">
                            <div class="member-green-makeup-item member-item">
                                <div class="member-makeup-item-name">{{item.name}}</div>
                                <div class="member-makeup-item-pos font-color-green">{{item.position}}</div>
                            </div>
                            <div class="member-blank-5"></div>
                        </div>
                    </div>
                </div>
                <div class="member-purple-makeup member-makeup">
                    <div v-for="item in testArr">
                        <div class="member-purple-makeup-item member-item">
                            <div class="member-makeup-item-name">{{item.name}}</div>
                            <div class="member-makeup-item-pos font-color-purple">{{item.position}}</div>
                        </div>
                        <div class="member-blank-5"></div>
                    </div>
                </div>
                <div class="member-manage-makeup member-makeup">
                    <div v-for="item in manageArr">
                        <div class="member-manage-makeup-item member-item">
                            <div class="member-makeup-item-name">{{item.name}}</div>
                            <div class="member-makeup-item-pos font-color-yellow">{{item.position}}</div>
                        </div>
                        <div class="member-blank-5"></div>
                    </div>
                </div>
                <div class="member-blank"></div> 
            </div>
        </div>
        <!-- <div class="footer">小力量撼动大世界</div> -->
    </div>
    
</template>

<script>

    import { getMemberPageData }  from '../http/'

    // import { tissueData } from './tissue'
     import tissueData from '../../static/tissue.json'

    export default {
        name: 'member',
        mounted () {   
            this.doNetWork()
        },
        data(){
            return {
              
                projectLeader: '-',       //项目负责人
                projectManageArr: '',     //项目管理
                productOperationArr: '',  //产品运营
                internetArr: '',          //互联网
                testArr: '',              //测试
                manageArr: '',            //运维
                technologyArr: '',        //技术中心
                memberTitleIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/member.png') + ')',
                },
                memberLeaderBac: {
                    backgroundImage: 'url(' + require('../assets/imgs/member-blue.png') + ')',
                },
                memberLine: {
                    backgroundImage: 'url(' + require('../assets/imgs/member-line.png') + ')',
                },
                memberToHomeIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/home.png') + ')',
                },
            }
        },
        methods: {
            doNetWork(){
                    this.projectLeader = tissueData.projectLeader
                    this.projectManageArr = tissueData.deptStructure[0].staffStructure
                    this.productOperationArr = tissueData.deptStructure[1].staffStructure
                    this.technologyArr = tissueData.deptStructure[2].staffStructure
                    this.internetArr = tissueData.deptStructure[3].staffStructure
                    this.testArr = tissueData.deptStructure[4].staffStructure
                    this.manageArr = tissueData.deptStructure[5].staffStructure



                // this.$http.get('static/tissue.json').then(function(response){
                //     var data = JSON.parse(response.bodyText)
                //     // console.log(data);
                    
                //     this.projectLeader = data.projectLeader
                //     this.projectManageArr = data.deptStructure[0].staffStructure
                //     this.productOperationArr = data.deptStructure[1].staffStructure
                //     this.technologyArr = data.deptStructure[2].staffStructure
                //     this.internetArr = data.deptStructure[3].staffStructure
                //     this.testArr = data.deptStructure[4].staffStructure
                //     this.manageArr = data.deptStructure[5].staffStructure
                    
                // },function(response){
                //     console.log(response);
                // });




                // getMemberPageData().then(response => {       
                   
                //     var data = response.data
               
                //     this.projectLeader = data.projectLeader
                //     this.projectManageArr = data.deptStructure[0].staffStructure
                //     this.productOperationArr = data.deptStructure[1].staffStructure
                //     this.technologyArr = data.deptStructure[2].staffStructure
                //     this.internetArr = data.deptStructure[3].staffStructure
                //     this.testArr = data.deptStructure[4].staffStructure
                //     this.manageArr = data.deptStructure[5].staffStructure

                // });
                
            },
            memberToHomePage: function(){
                this.$emit('memberToHomePage')
            },
            memberMouseScroll: function(e){
                e.stopPropagation()
            }
        }
    }
</script>

<style lang="scss" scoped> 
   
    .member-list{
        margin-top: 40px;
        background-color: #2b3247;
        width: 1440px;
        height: 710px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 3px;
    }
    .footer{
        margin-top: 10px;
    }
    .member-tiitle-logo{
        float: left;
        width: 30px;
        height: 30px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-left: 30px;
    }
    .member-title-text{
        float: left;
        height: 30px;
        line-height: 25px;
        font-size: 20px;
        width: 90px;
        color: #66aae9;
    }
    .member-title-container{
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    .member-title-blank{
        height: 60px;
    }
    .member-blank{
        clear: both;
    }
    .member-list-title{
        color: white;
        text-align: left;
        font-size: 17px;
        padding-top: 30px;
        padding-left: 30px;
    }
    .member-list-leader{
        width: 170px;
        height: 80px;
        margin: 10px auto 0 auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 3px;
    }
    .member-leader-name{
        text-align: left;
        color: white;
        font-size: 17px;
        padding-top: 20px;
        padding-left: 20px;
    }
    .member-leader-desc{
        color: #94debe;
        text-align: left;
        margin-top: 5px;
        margin-left: 20px;
    }
    .member-list-line{
        width: 1000px;
        height: 130px;
        margin-left: 180px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .member-list-type{
        width: 1100px;
        height: 50px;
        margin-left: 130px;
        text-align: center;
    }
    .member-red-tag .member-list-tag{ 
        width:90px; 
        height:35px; 
        background-color:#f86464; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
    .member-red-tag{
        float: left;
        width: 91px;
        margin-left: 50px;
    }
    .member-red-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#f86464 transparent transparent; font-size:0; line-height:0;margin-left: 35px;
    }
    .member-yellow-tag .member-list-tag{ 
        width:90px; 
        height:35px; 
        background-color:#f2a553; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 15px;
    }
    .member-yellow-tag{
        float: left;
        width: 91px;
        margin-left: 80px;
    }
    .member-yellow-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#f2a553 transparent transparent; font-size:0; line-height:0;margin-left: 35px;
    }
    .member-blue-tag .member-list-tag{ 
        width:190px; 
        height:35px; 
        background-color:#62a6e6; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
    .member-blue-tag{
        float: left;
        width: 185px;
        margin-left: 65px;
    }
    .member-blue-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#62a6e6 transparent transparent; font-size:0; line-height:0;margin-left: 75px;
    }
     .member-green-tag .member-list-tag{ 
        width:90px; 
        height:35px; 
        background-color:#57c6d2; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
    .member-green-tag{
        float: left;
        width: 91px;
        margin-left: 70px;
    }
    .member-green-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#57c6d2 transparent transparent; font-size:0; line-height:0;margin-left: 35px;
    }
    .member-purple-tag .member-list-tag{ 
        width:90px; 
        height:35px; 
        background-color:#926dde; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
    .member-purple-tag{
        float: left;
        width: 91px;
        margin-left: 70px;
    }
    .member-purple-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#926dde transparent transparent; font-size:0; line-height:0;margin-left: 35px;
    }
    .member-manage-tag .member-list-tag{ 
        width:90px; 
        height:35px; 
        background-color:#f2a553; 
        border-radius: 3px;
        line-height: 35px;
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
    .member-manage-tag{
        float: left;
        width: 91px;
        margin-left: 80px;
    }
    .member-manage-tag .member-list-tag-transgo{
        width:0; height:0; border-width:10px; border-style:solid; border-color:#f2a553 transparent transparent; font-size:0; line-height:0;margin-left: 35px;
    }
    .member-list-content{
        width: 1100px;
        height: 420px;
        margin-left: 130px;
        text-align: center;
    }
    .member-red-makeup{
        height: 200px;
        margin-left: 50px;
    }
    .member-yellow-makeup{
        height: 200px;
        margin-left: 80px;
    }
    .member-blue1-makeup{
        height: 400px;
        width: 200px !important;
        margin-left: 60px;
        margin-top: -10px;
    }
    .member-blue2-makeup{
        height: 400px;
        margin-left: 5px;
    }
    .member-green-makeup{
        height: 380px;
        margin-left: 65px;
        overflow-x:hidden;
    }
    .member-green-makeup-scroll{
        width: 125%;
        height: 380px;
        overflow-y: scroll;
    }
     .member-green-makeup::-webkit-scrollbar-button {
        background-color:#2b3247;
    }
    .member-green-makeup::-webkit-scrollbar {
        width:5px;
        height:10px;
    }
    .member-green-makeup::-webkit-scrollbar-thumb{
        background:#4f525f;
        border-radius:10px;
    }


    .member-purple-makeup{
        height: 200px;
        margin-left: 70px;
    }
    .member-manage-makeup{
        height: 200px;
        margin-left: 80px;
    }
    .member-makeup{
        float: left;
        width: 90px;
    }
    .member-red-makeup-item{
        background-color: #f86464;
    }
    .member-yellow-makeup-item{
        background-color: #f2a553;
    }
    .member-blue1-makeup-item{
        background-color: #62a6e6;
        margin-left: 10px;
        margin-top: 10px;
        float: left;
    }
    .member-green-makeup-item{
        background-color: #57c6d2;
    }
    .member-manage-makeup-item{
        background-color: #f2a553;
    }
    .member-purple-makeup-item{ 
        background-color: #926dde;
    }
    .member-makeup-item-name{
        color: white;
        padding-top: 20px;
        font-size: 15px;
    }
    .member-makeup-item-pos{
        color: #e4cece;
        width: 60px;
        font-size: 15px;
        margin: 5px auto 0 auto;
    }
    .member-blank-5{
        height: 10px;
    }
    .member-item{
        width: 90px;
        height: 85px;
        border-radius: 3px;
    }
    .font-color-yellow{
        color: #f5d7b8 !important;
    }
    .font-color-blue{
        color: #b4cfe9 !important;
    }
    .font-color-green{
        color: #b2e7ed !important;
    }
    .font-color-purple{
        color: #d5c8ef !important;
    }
    .member-to-home{
        width: 20px;
        height: 20px;
        position: absolute;
        // background-color: white;
        left: 1500px;
        margin-top: 10px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
    }
</style>
