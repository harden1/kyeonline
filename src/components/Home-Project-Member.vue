<style lang="scss" scoped>
    .home-projet-member{
        height: 280px;
        text-align: center;
    }
    .home-member-title{
        font-size: 17px;
        font-weight: 700;
        padding-top: 30px;
        color: white;

    }
    .home-member-chart{
        width: 50px;
        height: 50px;
        margin-top: 70px;
        margin-left: auto;
        margin-right: auto;
        // background-color: #66aae9;
        // background-image: url(../../assets/imgs/member.png); 
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .home-member-present{
        width: 20px;
        height: 50px;
        background-color: #f3f7fa;
    }
    .home-member-count{
        color: white;
        font-size: 20px;
        padding-top: 38px;
    }
    .home-member-text{
        color: white;
        font-size: 16px;
        padding-top: 20px;
    }
</style>

<template>
    <div class="home-projet-member">
        <div class="home-member-title">项目成员</div>
        <div class="home-member-chart" :style="memberImg">
            <!-- <div class="home-member-present"></div> -->
        </div>
        <div class="home-member-count">{{member}}人</div>
        <div class="home-member-text">成员统计</div>
    </div>
</template>

<script>
export default {
    props: ['member'],
    data(){
        return{
            memberImg: {
                backgroundImage: 'url(' + require('../assets/imgs/member.png') + ')',
            } 
        }
    }
}
</script>

