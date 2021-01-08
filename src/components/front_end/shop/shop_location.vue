<template>
    <div>
        <div class="container-fluid shop_container">
            <div class="row shop_title">
                <p>SHOP</p>
                <p>商店地點</p>
            </div>

            <router-link :to="{name:'Shop'}" class="row shop_detail" v-for="item in shop_local" :key="item.id">
                <div class="col-12 col-md-5 shop_img">
                    <img :src="item.img" alt="">
                </div>
                <div class="col-12 col-md-7 shop_address">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.address}}</p>
                    </div>
                    <div class="shop_btn">
                        <a :href="item.link"><i class="fas fa-map-marker-alt"></i>google map</a>
                        <button @click.prevent="more_link">更多...</button>
                    </div>
                </div>
            </router-link>

            <div class="row future">
                <p>即將開幕</p>
            </div>

            <div class="row future_item">
                <p v-for="item in future" :key="item.id">
                    <span>{{item.date}}</span>
                    <span>{{item.name}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Shop_location',
        data() {
            return {
                shop_local: [{
                        id: '1',
                        img: require('../../../assets/photos/shop_img.jpg'),
                        name: 'DESSERT 台北店',
                        address: '台北市信義區信義路五段7號',
                        link: 'https://goo.gl/maps/kLjxinPc82DGPPV47'
                    },
                    {
                        id: '2',
                        img: require('../../../assets/photos/shop_img.jpg'),
                        name: 'DESSERT 高雄店',
                        address: '高雄市苓雅區自強三路3號',
                        link: 'https://goo.gl/maps/qHkVRw9eG4XxdeNR8'
                    }
                ],
                future: [{
                        id: '1',
                        date: '即將於2月1日盛大開幕',
                        name: 'DESSERT 台中店',
                    },
                    {
                        id: '2',
                        date: '即將於3月1日盛大開幕',
                        name: 'DESSERT 台北二店',
                    }
                ]
            }
        },
        methods: {
            more_link() {
                this.$router.push('/shop');
            }
        },
        created() {
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

    .shop_container {
        padding: 0 100px;

        @at-root .shop_title {
            margin: 40px 0;

            p {
                color: #fff;
            }

            p:nth-child(1) {
                font-size: 100px;
                line-height: 110px;
                letter-spacing: 20px;
            }

            p:nth-child(2) {
                font-size: 30px;
                letter-spacing: 10px;
            }
        }

        @at-root .shop_detail {
            overflow: hidden;
            margin: 0 0 40px 0;

            &:hover button {
                color: #8e774b;
            }

            &:hover img {
                transform: scale(1.1);
            }

            @at-root .shop_img {
                position: relative;

                &::before {
                    content: '';
                    border-bottom: 250px solid #fff;
                    border-left: 60px solid transparent;
                    position: absolute;
                    right: 0;
                    z-index: 1;
                }

                @at-root img {
                    width: 100%;
                    height: 250px;
                    transition: .2s;
                }
            }

            @at-root .shop_address {
                height: 250px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 30px;
                background: #fff;
                position: relative;

                p {
                    color: #665433;
                }

                p:nth-child(1) {
                    font-size: 45px;
                }

                p:nth-child(2) {
                    font-size: 15px;
                }

                .shop_btn {
                    display: flex;
                    justify-content: flex-end;
                }

                button {
                    width: 150px;
                    height: 50px;
                    outline: none;
                    border: none;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: 5px;
                    color: #c5a66b;
                    background: #fff;
                    box-shadow: 6px 6px 8px #efdcb8;
                    transition: .2s;

                    &:active {
                        outline: none;
                        border: none;
                    }
                }

                a {
                    display: block;
                    padding: 5px 10px;
                    color: #fff;
                    background: #f0a28f;
                    border-radius: 5px;
                    position: absolute;
                    left: 30px;
                    bottom: 30px;
                    transition: .2s;
                }

                a:hover {
                    background: #e48973;
                }

                i {
                    margin-right: 5px;
                }
            }
        }

        @at-root .future {
            p {
                color: #fff;
                font-size: 50px;
                letter-spacing: 10px;
                margin-bottom: 20px;
            }
        }

        @at-root .future_item {
            margin-bottom: 30px;

            p {
                background: #fff;
                padding: 20px;
                margin-bottom: 10px;

                span {
                    display: block;
                    letter-spacing: 5px;
                }

                span:nth-child(1) {
                    font-size: 20px;
                    margin-bottom: 15px;
                }

                span:nth-child(2) {
                    font-size: 30px;
                }
            }
        }
    }

    @include less-768 {
        .shop_container {
            padding: 10px;
        }

        .shop_title {
            padding-left: 20px;
            margin-bottom: 30px;
        }

        .shop_img::before {
            content: '';
            border-left: 100vw solid transparent;
            border-bottom: 40px solid #fff;
            position: absolute;
            bottom: 0;
            z-index: 1;
        }

        .shop_address {
            p:nth-child(1) {
                font-size: calc(40px - 2vw);
            }
        }
    }
</style>