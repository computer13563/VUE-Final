<template>
    <div>
        <div class="container-fluid container_nav">
            <div class="row row_nav">
                <div class="col-12 col_nav">

                    <div class="row row_logo_link_block">

                        <div class="col-12 col-md-3 logo_block">
                            <router-link to="/" class="logo" @click.native="go_top">
                                <i class="fas fa-feather-alt "></i>
                                <span> Dessert</span>
                            </router-link>
                        </div>

                        <div class="col-12 col-md-9 link_block">
                            <router-link :to="{name:'News'}">最新訊息</router-link>
                            <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                            <router-link :to="{name:'ShoppingProcessPage'}">購物流程</router-link>
                            <router-link :to="{name:'Shop'}">門市地點</router-link>
                            <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                            <router-link :to="{name:'AboutUs'}">關於我們</router-link>
                        </div>

                    </div>

                    <div class="login_cart_block">
                        <router-link :to="{name:'Login'}">
                            <span>登入</span>
                            <i class="fas fa-user-circle"></i>
                        </router-link>

                        <router-link :to="{name:'Cart'}">
                            <span>購物車</span>
                            <p class="cart_icon">
                                <span v-if="cart.carts.length">{{cart.carts.length}}</span>
                                <span v-else>0</span>
                            </p>
                        </router-link>
                    </div>

                    <div class="grow_line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        get_cart_list_api,
    } from '@/components/api/cus_api.js'
    export default {

        components: {

        },

        data() {
            return {
                cart: {
                    carts: []
                }
            }
        },
        methods: {
            get_cart_list() {
                const vm = this;
                vm.isLoading = true;
                get_cart_list_api().then(res => {
                    if (res.data.success) {
                        vm.cart = res.data.data;
                    } else {
                        console.log(res);
                    }
                    vm.isLoading = false;
                    console.log(vm.cart);
                })
            },
            go_top() {
                window.scroll(0, 0);
            }
        },
        watch: {

        },
        created() {
            this.get_cart_list();
            
            window.onscroll = function () {
                // 取得col_nav寬度
                const col_nav_width = document.querySelector('.col_nav').offsetWidth;

                const grow_line = document.querySelector('.grow_line');
                // 取得卷軸距離頁面最上方距離
                const scroll_top = (document.documentElement.scrollTop) || (document.body.scrollTop);
                // 取得卷軸高度
                const window_height = window.innerHeight;
                // 取的網頁高度
                const page_height = document.body.offsetHeight;
                // 視窗範圍與頁面的比值
                const window_page_ratio = window_height / page_height;
                // 取得卷軸距離網頁上方距離與網頁高度的比值
                const scroll_top_ratio = (page_height - window_height) / page_height;
                // 取得卷軸高度與距離網頁上方的比值
                const client_window_ratio = window_page_ratio / scroll_top_ratio;
                // 卷軸往下捲動  上方距離增加多少卷軸就要增加多少的比值
                const scroll_window_ratio = (scroll_top + (scroll_top * client_window_ratio)) / page_height;
                // 把捲動的比例換算成px
                const scroll_window_px = page_height * scroll_window_ratio;

                // col_nav的寬度百分比等於網頁高度百分比
                const grow_percent = ((col_nav_width * scroll_window_px) / page_height);
                // 設定變長的線段等於捲動百分比
                grow_line.style.width = grow_percent + 'px';
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    .container_nav {
        background: #111;
        position: fixed;
    }

    .row_nav {
        max-width: 1400px;
        margin: auto;
        padding: 30px 0px;
        width: 80%;
    }

    .col_nav {
        display: flex;
        justify-content: space-between;
        padding: 0 0 30px 0;
        border-bottom: 1px solid #aaa;
        // 給成長的線定位
        position: relative;

        @at-root .row_logo_link_block {
            width: 80%;
        }
    }

    .logo_block {
        display: flex;
        line-height: 0;

        &:hover i,
        &:hover span {
            color: #ff5f54;
        }

        i,
        span {
            font-size: 30px;
            color: #fff;
        }

    }

    .link_block {
        display: flex;
        align-items: flex-end;

        a {
            &:hover {
                animation: shine .2s forwards;
            }

            font-size: 15px;
            font-weight: 100;
            letter-spacing: 5px;
            margin: 0 8px 0 8px;
            color: #fff;
        }
    }

    .login_cart_block {
        display: flex;
        align-items: center;

        a {
            margin: 0 8px;

            &:hover i,
            &:hover span {
                animation: shine .2s forwards;
            }
        }

        span,
        i {
            vertical-align: middle;
            letter-spacing: 5px;
            color: #fff;
        }

        span {
            font-size: 15px;
        }

        i {
            font-size: 30px;
            margin: 0 0 0 5px;
        }

        .cart_icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #fff;
            text-align: center;
            margin: 0 0 0 5px;
            position: relative;
            vertical-align: middle;

            span {
                display: block;
                width: 30px;
                height: 30px;
                font-size: 18px;
                color: #32243e;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 2px;
                margin: auto;
            }
        }

    }

    // 隨著網頁捲動長長的線
    .grow_line {
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: 0;
        margin: auto;
        z-index: 10;
    }
    // 碰觸到連結閃一下
    @keyframes shine{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>