<style lang="scss"s>
    @import '../assets/scss/global';

    .swiper-container {
        height: 100%;
        width: 1640px;
        margin-left: auto !important;
        margin-right: auto !important;
        position: absolute !important;
        min-height: 910px;
        @extend %position-center;
        .swiper-slide {
            width: 100%;
            height: 100%;
        }
        .pagination {
            margin-right: -30px;
        }
        .swiper-pagination-bullet {
            margin: 17px!important;
            background-color: #ccc;
        }
        .swiper-pagination-bullet-active {
            background-color: #4796e3;
        }
    }

</style>

<template>
    <div class="swiper-container">
        <template v-if="mongoShow">
            <v-project-state-alert @closeProjectState="mongoCtrl"></v-project-state-alert>
        </template>
    
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide">
                <page-home @goFinancePage="goFinancePage" @projectState="mongoCtrl" @goMemberPage="goMemberPage"></page-home>
            </swiper-slide>   
            <swiper-slide class="swiper-slide">
                <page-finance @goHomePage="goHomePage"></page-finance>           
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <page-member @memberToHomePage="goHomePage"></page-member>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>

</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import home from '@comp/home';
    import finance from '@comp/finance';
    import member from '@comp/member';
    import projectStateAlert from '@comp/Project-State-Alert'

    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    // loop               : true,
                    direction          : 'vertical',
                    pagination         : '.swiper-pagination',
                    mousewheelControl  : true,
                    slidesPerView      : 1,
                    paginationClickable: true,
                    autoplay: 30000,
                    observer:true //修改swiper自己或子元素时，自动初始化swiper
                },
                mongoShow: false
            }
        },
        components: {
            swiper,
            swiperSlide,
            'page-home' : home,
            'page-finance'  : finance,
            'page-member': member,
            'v-project-state-alert': projectStateAlert            
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            goHomePage: function(){  
                // swiper 跳转到第一页
                this.swiper.slideTo(0, 500)
            },
            goFinancePage: function(){
                // swiper 跳转到第二页
                this.swiper.slideTo(1, 500)
            },
            mongoCtrl: function(){
                // 控制 项目状态 毛玻璃蒙层显示隐藏
                this.mongoShow = this.mongoShow? false:true
            },
            goMemberPage: function(){
                 this.swiper.slideTo(2, 500)
            }
            
        }
    };
</script>
