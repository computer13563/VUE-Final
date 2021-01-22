<template>
    <div>

        <div class="container-fluid">

            <div class="row">
                <div class="col">
                    <NavbarThird></NavbarThird>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <div class="conatiner-fluid container_footer">
            <div class="row row_footer">

                <div class="col-12 col_footer_logo">
                    <div class="logo">
                        <router-link to="/" class="logo" @click.native="go_top">
                            <i class="fas fa-feather-alt "></i>
                            <span> Dessert</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="row row_footer_info">

                <p class="col-12 col-md-6 col_footer_info">
                    <span>01-23456789</span>
                    <span>台北市中正區北平西路3號</span>
                    <span> 週一~五 8:00~19:00 </span>
                    <span> 週六~日、例假日 9:00~18:00 </span>
                </p>
                <div class="col-12 col-md-6 col_footer_link">

                    <!-- 中間分隔線 -->
                    <div class="box_shadow"></div>

                    <div class="link">
                        <p>
                            <router-link :to="{name:'News'}">最新訊息</router-link>
                            <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                            <router-link :to="{name:'Shop'}">門市地點</router-link>
                        </p>
                        <p>
                            <router-link :to="{name:'ShoppingProcessPage'}">購物流程</router-link>
                            <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                            <router-link :to="{name:'AboutUs'}">關於我們</router-link>
                        </p>
                    </div>
                </div>

            </div>

            <div class="row row_copyright">
                <div class="col-12 copyright">
                    Copyright &copy; 2020 虛擬甜點
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import NavbarThird from '@/components/front_end/navbar/navbar_third_style.vue'

    export default {
        components: {
            NavbarThird,
        },
        data() {
            return {}
        },
        methods: {
            go_top() {
                window.scroll(0, 0);
            },
        },
        created() {}
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    .container-fluid {
        background: #e5cda0;
        overflow: hidden;

        .col:nth-child(1) {
            margin: 10px 0 0 0;
        }
    }

    .container_footer {
        background: linear-gradient(#a79370, #a79370, #a79370, #a79370);
        overflow: hidden;

        @at-root .row_footer {

            @at-root .col_footer_logo {
                text-align: center;
                margin: 40px 0 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                a:hover i,
                a:hover span {
                    color: #564321;
                }

                i {
                    font-size: 50px;
                    color: #fff;
                    text-shadow: 0px 0px 5px #fff;

                }

                span {
                    display: block;
                    font-size: 20px;
                    letter-spacing: 3px;
                    color: #fff;
                    text-shadow: 0px 0px 10px #fff, -0px -0px 10px #fff;
                }
            }


        }

        // 地址 電話 其他頁面連結
        @at-root .row_footer_info {

            // 地址 電話的區塊
            @at-root .col_footer_info {
                margin: 20px auto;

                // 地址電話的span設定
                span {
                    display: block;
                    text-align: center;
                    font-size: 20px;
                    letter-spacing: 5px;
                    font-weight: 300;
                    color: #fff;
                    text-shadow: 0px 0px 10px #fff, -0px -0px 10px #fff;
                    padding: 5px 0;
                }

                span:hover {
                    font-weight: 500;
                    color: #564321;
                    text-shadow: 0px 0px 10px #fff, -0px -0px 10px #fff;
                }
            }

            // 連結到其他頁面的區塊
            @at-root .col_footer_link {
                margin: 20px 0;
                position: relative;

                // 中間分隔線
                @at-root .box_shadow {
                    position: absolute;
                    left: 0;
                    height: 100%;
                    width: 1px;
                    background: #ffffffcc;
                    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff;
                }

                // 連結的樣式
                @at-root .link {
                    margin: auto;

                    // 把六個連結分成三個三個
                    p {
                        text-align: center;
                        margin: 0 0 30px 0;
                        display: flex;
                        justify-content: space-evenly;
                    }

                    // 連結的樣式
                    a {
                        text-align: center;
                        font-size: 20px;
                        letter-spacing: 5px;
                        font-weight: 300;
                        color: #fff;
                        text-shadow: 0px 0px 10px #fff, -0px -0px 10px #fff;
                    }

                    a:hover {
                        font-weight: 500;
                        color: #564321;
                        text-shadow: 0px 0px 10px #fff, -0px -0px 10px #fff;
                    }
                }
            }
        }

        @at-root .row_copyright {
            margin: auto;

            @at-root .copyright {
                background: #352b18;
                color: #fff;
                text-align: center;
                padding: 5px 0;
            }
        }

    }
</style>