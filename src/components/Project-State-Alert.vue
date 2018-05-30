<template>
    <div class="opacity-container">
        <article>
            <div class="box">
                <div class="title">问题详情</div>
                <div class="close" @click="closeMongo">×</div>
                <div class="mongo-clear"></div>

                <div class="list-container">
                    <div class="list-item" v-for="(item, index) in listArr" @click.stop="itemClick(item)" :class="{'list-item-open':item.openState== 'true'}">
                        <div class="name-line">
                            <div class="name">{{item.name}}</div>
                            <div class="time">{{item.time}}</div>  

                            <template v-if="item.openState== 'false'">
                                <div class="transgo" :style="downTransgo"></div> 
                            </template>
                            <template v-else>
                                <div class="transgo" :style="upTransgo"></div>   
                            </template>
                             
                            <div class="mongo-clear"></div>
                        </div>
                        <div class="ques-line">
                            <div class="ques-title">问题描述：</div>
                            <div class="ques-desc">{{item.quesDesc}}</div>
                            <div class="mongo-clear"></div>
                        </div>
                        <div class="help-line">
                            <div class="help-title">求助描述：</div>
                            <div class="help-desc">{{item.helpDesc}}</div>
                            <div class="mongo-clear"></div>
                        </div>

                        <div class="transgo" :style="downTransgo"></div>  
                    </div>
                    <!-- <div class="list-item list-item-open" @click.stop="itemClick($event)">
                        <div class="name-line">
                            <div class="name">杨鹏远</div>
                            <div class="time">2017-08-13</div>  

                            <div class="transgo" :style="downTransgo"></div>  
                            <div class="mongo-clear"></div>
                        </div>
                        <div class="ques-line">
                            <div class="ques-title">问题描述：</div>
                            <div class="ques-desc">卖家后台，平台后台目前缺少人力开发</div>
                            <div class="mongo-clear"></div>
                        </div>
                        <div class="help-line">
                            <div class="help-title">求助描述：</div>
                            <div class="help-desc">周三前紧急招聘或从总部团队调动</div>
                            <div class="mongo-clear"></div>
                        </div>
                        
                    </div> -->
                    
                </div>
            </div>
            
            
        </article>
        <div id="mongo" :style="mongoBac">  </div>
    </div>
</template>

<script>
// import { entiretyData } from './entirety'
import entiretyData from '../../static/entirety.json'

export default {
    mounted(){
        this.listArr = entiretyData.quesDetail
    },
    data(){
        return{
            mongoBac: {
                backgroundImage: 'url(' + require('../assets/imgs/mongoBac.png') + ')',
            },
            mongoShow: false,
            downTransgo: {
                // 下箭头
                backgroundImage: 'url(' + require('../assets/imgs/down.png') + ')',
            },
            upTransgo: {
                // 下箭头
                backgroundImage: 'url(' + require('../assets/imgs/up.png') + ')',
            },
            // ind: 'aa',
            listArr: [0,1] 
        }
    },
    methods: {
        closeMongo: function(){
            this.$emit('closeProjectState')
        },
        itemClick: function(item){

            item.openState = item.openState=='true'? 'false':'true'
        }
    }
}
</script>

<style lang="scss" scoped>
    .opacity-container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: hidden; 
    }
    .box{
        position: relative;
        div{
           color: white;
        }

        .title{
            height: 75px;
            line-height: 75px;
            font-weight: 700;
            float: left;
            width: 585px;           
            padding-left: 300px;
            font-size: 17px;
        }
        .close{
            height: 75px;
            line-height: 75px;
            font-weight: 700;
            float: left;
            width: 75px;
            text-align: center;
            font-size: 25px;
            cursor: pointer;
        }

        .list-container{
            width: 610px;
            height: 320px;
            margin: 0 auto;
            // border: 1px solid white;

            overflow-y: auto; 

            .list-item{
                width: 600px;
                height: 55px;
                margin-top: 5px;
                background-color: rgb(122,127,142);
                border: 1px solid #656975;
                overflow: hidden;
                border-radius: 3px;
            }
            .list-item-open{
                height: 125px !important;
            }
        }

        .list-container::-webkit-scrollbar-button {
                background-color:rgba(177,181,194,0);
        }
        .list-container::-webkit-scrollbar {
            width:5px;
            height:10px;
        }
        .list-container::-webkit-scrollbar-thumb{
            background:rgb(177,181,194);
            border-radius:10px;
        }

    }
    article{
        position: absolute;
        width:660px;
        height:440px;
        top: 50%;
        left: 50%;  
        margin-left: -330px;
        margin-top: -220px;
        background-color: rgba(199,201,210,0.6);
        z-index: 1;
        border-radius: 3px;
    }

    #mongo{
        position: absolute;
        width:100%;
        height:100%;
        top: 0;
        left: 0;
        z-index: -1;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        -moz-filter: blur(25px);
        -ms-filter: blur(25px);
        -o-filter: blur(25px);
        filter: blur(25px); 
    }
    .mongo-clear{
        clear: both;
    }
    .name-line{
        height: 55px;
    }
    .name{
        float: left;
        width: 85px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        // background-color: blue;
    }
    .time{
        float: left;
        width: 120px;
        height: 55px;
        line-height: 55px;
        // background-color: green;
    }
    .transgo{
        float: left;
        width: 15px;
        height: 12px;
        margin-top: 20px;
        margin-left: 370px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        // background-color: red;
    }
    .ques-line{
        margin-top: 5px;
        .ques-title{
            float: left;
            margin-top: 5px;
            padding-left: 20px;
        }
        .ques-desc{
            float: left;
            margin-top: 5px;
            padding-left: 5px;
        }
    }
    .help-line{
        div{
            float: left;
            margin-top: 10px;
        }
         
        .help-title{
            padding-left: 20px;
        }
        .help-desc{
            padding-left: 5px;
        } 
    }
</style> 

