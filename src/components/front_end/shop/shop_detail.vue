<template>
    <div>
        <div class="container-fluid container_detail">
            <div class="row row_detail">
                <div class="col-12 col_detail">

                    <router-link :to="{name:'Shop'}" class="back">店鋪列表</router-link>

                    <section v-for="item in filter_shop" :key="item.id" class="detail_section">

                        <figure>
                            <img :src="item.img" alt="">
                        </figure>

                        <div class="detail_info">

                            <p class="detail_info_item detail_info_name"> {{item.name}} </p>

                            <a :href="item.link" class="detail_info_item detail_info_btn"><i
                                    class="fas fa-map-marker-alt"></i>
                                google map </a>

                            <p class="detail_info_item detail_info_address">
                                <span> 地址 </span>
                                <span> {{item.address}} </span>
                            </p>

                            <p class="detail_info_item detail_info_tel">
                                <span> 電話 </span>
                                <span> {{item.tel}} </span>
                            </p>

                            <p class="detail_info_item detail_info_time">
                                <span> 營業時間 </span>
                                <span> {{item.time}} </span>
                            </p>

                        </div>

                        <div>
                            <iframe :src='item.iframe' width="100%" height="500" frameborder="0" style="border:0;"
                                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>

                    </section>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'ShopDetail',
        data() {
            return {
                data: [{
                        id: 'taipei',
                        img: require('../../../assets/photos/shop_img.jpg'),
                        name: 'DESSERT 台北店',
                        address: '台北市信義區信義路五段7號',
                        tel: '0912-345-678',
                        time: '周一 ~ 周五 10:00 ~ 20:00',
                        link: 'https://goo.gl/maps/kLjxinPc82DGPPV47',
                        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1610098239292!5m2!1szh-TW!2stw"
                    },
                    {
                        id: 'Kaohsiung',
                        img: require('../../../assets/photos/shop_img.jpg'),
                        name: 'DESSERT 高雄店',
                        address: '高雄市苓雅區自強三路3號',
                        tel: '0912-345-678',
                        time: '周一 ~ 周五 10:00 ~ 20:00',
                        link: 'https://goo.gl/maps/qHkVRw9eG4XxdeNR8',
                        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1326027466553!2d120.29812631459623!3d22.611522937240085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037ed8088abd%3A0xa7d97b773958ebf9!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A6Ieq5by35LiJ6LevM-iZnw!5e0!3m2!1szh-TW!2stw!4v1610098768696!5m2!1szh-TW!2stw"
                    },
                ],
                shop_id:''
            }
        },
        methods:{},
        computed:{
            filter_shop(){
                const vm = this;
                return vm.data.filter(item => {
                    return item.id.match(vm.shop_id);
                })
            }
        },
        watch:{
        },
        created(){
            this.shop_id = this.$route.params.shop_id;
            console.log(this.shop_id);
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/_media.scss';

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    @include more-360 {}

    @include more-992 {
        .container_detail {
            padding: 100px;
        }

        .row_detail {
            max-width: 1440px;
            overflow: hidden;
        }

        .col_detail {
            .back {
                display: block;
                font-size: 20px;
                padding: 0 0 0 30px;
                margin: 0 0 20px 0;
                color: #fff;
                position: relative;

                &::before {
                    content: '';
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    border-radius: 50px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }

                &::after {
                    content: '';
                    width: 20px;
                    height: 20px;
                    clip-path: polygon(60% 25%, 60% 75%, 25% 50%);
                    background: #e5cda0;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }
            }

            @at-root .detail_section {
                figure {
                    width: 100%;
                    height: 600px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                @at-root .detail_info {
                    padding: 40px 60px;
                    background: #fffaf0;

                    span {
                        display: inline-block;
                        font-size: 18px;
                        letter-spacing: 5px;
                        color: #665433;
                    }

                    span:nth-child(1) {
                        text-align: center;
                        border-radius: 50px;
                        padding: 2px 20px;
                        margin: 0 20px 10px 0;
                        width: 150px;
                        background: #e5cda040;
                    }

                    span:nth-child(2) {}

                    @at-root .detail_info_item {}

                    @at-root .detail_info_name {
                        font-size: 50px;
                        letter-spacing: 5px;
                        color: #665433;
                        margin: 0 0 20px 0;
                    }

                    @at-root .detail_info_btn {
                        display: inline-block;
                        background: #f0a28f;
                        color: #fff;
                        margin: 0 0 20px 0;
                        padding: 5px 10px;
                        border-radius: 5px;
                        transition: .2s;

                        &:hover {
                            background: #e48973;
                        }

                    }

                    @at-root .detail_info_address {}

                    @at-root .detail_info_tel {}

                    @at-root .detail_info_time {}
                }
            }
        }
    }
</style>