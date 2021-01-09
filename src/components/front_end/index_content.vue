<template>
    <div>
        <div class="container-fluid">
            <Carousel></Carousel>
            <Introduction></Introduction>
            <Card></Card>
            <!-- card -->
            <div class="row mb-5 w-100 justify-content-evenly">
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="cus_card w-100 position-relative" @click.prevent="go_product_page">
                        <!-- <img src="https://picsum.photos/400/300?random=15" alt="" class="w-100 cus_img"> -->
                        <img src="../../assets/photos/chocolate-cupcake.png" alt="" class="w-100 cus_img">
                        <div class="cus_card_slogan fw-bold d-flex flex-column justify-content-center position-absolute top-0 bottom-0 left-0 right-0">
                            <h2 class="fs-3">暢銷系列</h2>
                            <h2 class="fs-3">Bestseller</h2>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="cus_card w-100 position-relative" @click.prevent="go_product_page">
                        <!-- <img src="https://picsum.photos/400/300?random=20" alt="" class="w-100 cus_img"> -->
                        <img src="../../assets/photos/chocolate-glossy.png" alt="" class="w-100 cus_img">
                        <div class="cus_card_slogan fw-bold d-flex flex-column justify-content-center position-absolute top-0 bottom-0 left-0 right-0">
                            <h2 class="fs-3">嚴選系列</h2>
                            <h2 class="fs-3">Collections</h2>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="cus_card w-100 position-relative" @click.prevent="go_product_page">
                        <!-- <img src="https://picsum.photos/400/300?random=25" alt="" class="w-100 cus_img"> -->
                        <img src="../../assets/photos/macaron.png" alt="" class="w-100 cus_img">
                        <div class="cus_card_slogan fw-bold d-flex flex-column justify-content-center position-absolute top-0 bottom-0 left-0 right-0 m-auto">
                            <h2 class="fs-3">新品系列</h2>
                            <h2 class="fs-3">New Arrival</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from './homepage/carousel'
import Introduction from './homepage/introduction'
import Card from './homepage/card'
export default{
    components:{
        Carousel,
        Introduction,
        Card
    },
    methods:{
        go_product_page(){
            this.$router.push('/index/allproduct');
            window.scroll(0,0);
        }
    }
}
</script>

<style scoped lang="scss">
    * {
        padding: 0;
        margin: 0;
    }

    // 自定義直向卡片樣式
    .cus_card {
        cursor: pointer;
        .cus_card_slogan {
            color: #fff;
            letter-spacing: .8rem;
            text-align: center;            
        }
        .cus_img{        
            vertical-align: middle;
            transition: filter .7s .1s;
            width: auto;
            height: 225px;
        }
        &:hover .cus_img{
            filter:brightness(.7);
        }
        //自定義直向卡片字型樣式
        h2 {
            height: 60px;
            padding: 20px;
            background-color: #ffffff88 transparent;
            transition: background-color .7s .1s, color .7s .1s;
            color:#ffffff;
        }
        //父層被摸到要顯示字體背景
        &:hover h2{
            background-color: #ffffff88;    
            color:#391a3a;        
        }
        //跑出兩個h2中間的線
        h2:nth-child(1):after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            margin: 10px 0;
            background-color: #391a3a;//變長顏色變淡?????
            transition: width .7s .1s;
        }
        &:hover h2::after {
            width: 100%;
        }
    }
</style>