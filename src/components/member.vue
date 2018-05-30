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
           
            <div class="member-tree">
            <div class="member-tree-container">
                <div class="member-leader" :style="memberLeaderBac">
                    <div class="leader-name">杨鹏远</div>
                    <div class="leader-pos">项目负责人</div>   
                </div> 
                <div class="member-line" :style="memberLine"></div>

                <div class="member-pos-title">
                    <div class="manage-head" :style="manageHeadIcon">项目管理</div>
                    <div class="support-head" :style="supportHeadIcon">产品运营</div>
                    <div class="tech-head" :style="techHeadIcon">开发架构</div>
                    <div class="net-head" :style="netHeadIcon">互联网</div>
                    <div class="test-head" :style="testHeadIcon">测试</div>
                    <div class="protect-head" :style="protectHeadIcon">运维架构</div>
                </div>

                <div class="member-name-container">
                    <div class="manage-line line">
                        
                        <template v-for="item in projectManageArr">
                            <div class="manage-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>    

                        <div class="member-blank"></div> 
                    </div>
                    <div class="support-line line">

                        <template v-for="item in productOperationArr">
                            <div class="support-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>

                        <div class="member-blank"></div> 
                    </div>
                    <div class="tech-line line">

                        <template v-for="item in technologyArr">     
                            <div class="tech-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>

                        <div class="member-blank"></div> 
                    </div>
                    <div class="net-line line">

                        <template  v-for="item in internetArr">  
                            <div class="net-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>
                        
                        <div class="member-blank"></div> 
                    </div>
                    <div class="test-line line">

                        <template v-for="item in testArr">
                            <div class="test-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>
                        
                        <div class="member-blank"></div> 
                    </div>
                    <div class="protect-line line">

                        <template v-for="item in manageArr">
                            <div class="protect-item item" :key="item.name">
                                <div class="member-name">{{item.name}}</div>
                                <div class="member-pos">{{item.position}}</div>
                            </div>
                        </template>

                        <div class="member-blank"></div> 
                    </div>
                </div>

                <div class="member-blank"></div>   
            </div> 
            <!--member-tree-container end-->

            </div>
            <!--member-tree end-->

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
                    backgroundImage: 'url(' + require('../assets/imgs/member-title-icon.png') + ')',
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
                manageHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/manageHead.png') + ')',
                },
                supportHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/supportHead.png') + ')',
                },
                techHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/techHead.png') + ')',
                },
                netHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/netHead.png') + ')',
                },
                testHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/testHead.png') + ')',
                },
                protectHeadIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/protectHead.png') + ')',
                }
                
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
        width: 31px;
        height: 24px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-left: 30px;
    }
    .member-title-text{
        float: left;
        height: 30px;
        line-height: 25px;
        font-size: 22px;
        width: 100px;
        color: #66aae9;
        padding-left: 10px;
        font-weight: 600;
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
    .member-tree{
        
        width: 1320px;
        height: 615px;
        // border: 1px solid red;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        
        overflow-x:hidden;
        overflow-y: hidden;

    }
    .member-tree:hover{
        overflow-x: scroll !important;
    }
    .member-tree-container{ 
        width: 3000px;
    }
     // webkit
    
    .member-tree::-webkit-scrollbar-button {
        background-color:#2b3247;
    }
    
    .member-tree::-webkit-scrollbar {
        width:5px;
        height:10px;
    }
    .member-tree::-webkit-scrollbar-thumb{
        background:#3f465c;
        border-radius:10px;
    }
    
    .member-leader{
        float: left;
        width: 170px;
        height: 80px;
        margin-top: 245px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .member-line{
        float: left;
        width: 117px;
        height: 524px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 28px;
    }
    .member-pos-title{
        float: left;
        width: 92px;
        height: 580px;
        // border-right: 1px solid black;

        div{
            width: 92px;
            height: 80px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: white;
            font-size: 16px;
            font-weight: 600;
            line-height: 80px;
            padding-left: 12px;
        }
        div:nth-child(4){
            padding-left: 20px !important;
        }
        div:nth-child(5){
            padding-left: 27px !important;
        }
        div:nth-child(6){
            padding-left: 12px !important;
        }
        .support-head,.tech-head,.net-head,.test-head,.protect-head{
            margin-top: 20px;
        }

    }
    .member-name-container{
        float: left;
        // width: 935px;
        height: 580px;
        // background-color: grey;

        .line:nth-child(1){
            margin-top: 0px !important;
        }
        .line{
            height: 80px;
            // width: 900px;
            // background-color: grey;
            margin-top: 20px;
        }
    }
    .item{
        float: left;
        width: 86px;
        height: 80px;
        border-radius: 3px;
        margin-left: 10px;
    }
    .line{
        .item:nth-child(1){
            margin-left: 4px !important;
        }
    }
    .manage-line{
        .item{
            background-color: #f86464;
        }
    }
    
    .support-line {
        .item {
            background-color: #f2a553;
        }
    }

    .tech-line {
        .item {
            background-color: #4796e2;
        }
    }

    .net-line {
        .item {
            background-color: #57c6d2;
        }
    }

    .test-line {
        .item {
            background-color: #926dde;
        }
    }

    .protect-line {
        .item {
            background-color: #f2a553;
        }
    }
    .leader-name{
        padding-left: 24px;
        margin-top: 20px;
        font-size: 16px;
        color: white;
    }
    .leader-pos{
        margin-top: 5px;
        padding-left: 24px;
        font-size: 15px;
        color: white;
        
opacity: 0.6;

    }
    .member-name{
        
        padding-left: 14px;
        margin-top: 12px;

        font-size: 15px;
        color: white;
    }
    .member-pos{
       
        width: 60px;
        margin-top: 6px;
        margin-left: 14px;
        text-align: left;
        font-size: 15px;
        color: white;
        opacity: 0.6;

        // filter:alpha(opacity=50);

    }

</style>
