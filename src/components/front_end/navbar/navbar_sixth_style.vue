<template>
    <div>
        <div class="container-fluid container_nav">
            <div class="row row_nav">
                <div class="col-12 col_nav">

                    <div class="logo_block">
                        <router-link to="/" class="logo" @click.native="go_top">
                            <i class="fas fa-feather-alt "></i>
                            <span> Dessert</span>
                        </router-link>
                    </div>

                    <input type="checkbox" name="" id="hamburger">
                    <label for="hamburger" class="btn_hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <section class="link_section">
                        <div class="row link_block">
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'News'}">最新訊息</router-link>
                            </p>
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                            </p>
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'ShoppingProcessPage'}">購物流程</router-link>
                            </p>
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'Shop'}">門市地點</router-link>
                            </p>
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                            </p>
                            <p class="col-12 col-md-2">
                                <router-link :to="{name:'AboutUs'}">關於我們</router-link>
                            </p>
                        </div>
                    </section>

                    <div class="login_cart_block">
                        <router-link :to="{name:'Login'}">
                            <span class="animation_text">登入</span>
                            <span class='text_login'>登入</span>
                            <i class="fas fa-user-circle user_icon"></i>
                        </router-link>

                        <router-link :to="{name:'Cart'}">
                            <span class="animation_text">購物車</span>
                            <span class="text_cart">購物車</span>
                            <p class="cart_icon">
                                <span v-if="cart.carts.length">{{cart.carts.length}}</span>
                                <span v-else>0</span>
                            </p>
                        </router-link>
                    </div>

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

        components: {},

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
        created() {
            this.get_cart_list();
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
        position: fixed;
        background: #fff;
        transition: .1s ease-in-out;
        z-index: 1;
    }

    .row_nav {
        max-width: 1400px;
        margin: auto;
        padding: 20px 50px;
    }

    .col_nav {
        display: flex;
        justify-content: space-between;
    }

    // LOGO跟DESSERT的字
    .logo_block {
        a {
            font-size: 50px;
            color: #333;
        }
    }

    // 漢堡的checkbox
    #hamburger {
        display: none;

        // checkbox點到打開導覽列選項
        &:checked~.link_section {
            animation: show_link_section .4s ease-in;
        }

        // checkbox點到漢堡三條線變化
        &:checked+.btn_hamburger {
            span:nth-child(1) {
                width: 10px;
            }

            span:nth-child(2) {
                width: 50px;
            }

            span:nth-child(3) {
                width: 90px;
            }
        }
    }

    // 漢堡的label  三條線
    .btn_hamburger {
        width: 100px;
        height: 50px;
        align-self: center;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        // 漢堡三條線共同樣式
        span {
            display: block;
            height: 1px;
            background: #000;
            margin: auto;
            transition: .3s;
        }

        // 漢堡第一條線
        span:nth-child(1) {
            width: 90px;
        }

        // 漢堡第二條線
        span:nth-child(2) {
            width: 50px;
        }

        // 漢堡第三條線
        span:nth-child(3) {
            width: 10px;
        }
    }

    // 三條線按下去跑出的導覽列的外層  控制導覽列顯示與否
    .link_section {
        width: 80%;
        position: absolute;
        bottom: -70px;
        right: 0;
        left: 0;
        margin: auto;
        transition: .2s ease-in-out;
        animation: hide_link_section .4s ease-out forwards;
    }

    // 導覽列的選項
    .link_block {
        display: flex;
        align-items: center;

        // 導覽列超連結的外層
        p {
            text-align: center;
            background: #fff;
        }

        // 導覽列超連結
        a {
            display: inline-block;
            padding: 20px;
            font-size: 20px;
            letter-spacing: 5px;
            color: #333;
            transition: .3s;

            &:hover {
                color: #fff;
                background: #333;
            }
        }
    }

    // 會員  購物車
    .login_cart_block {
        display: flex;
        align-items: center;
        position: relative;

        // 往上飄的字  登入 購物車
        .animation_text {
            position: absolute;
            transform: translate(0, -12px);
            opacity: 0;
        }

        // 顯示在畫面上的字  登入 購物車
        .text_login,
        .text_cart {
            display: inline-block;
        }

        // 登入  購物車的超連結
        a {
            margin: 0 8px;

            &:hover .animation_text {
                animation: soul_out .3s forwards ease-in-out;
            }

            &:hover .text_login,
            &:hover .text_cart {
                animation: appear .3s forwards ease-in-out;
            }

        }

        // 登入 購物車的共同樣式
        span,
        i {
            vertical-align: middle;
            letter-spacing: 5px;
            color: #333;
        }

        // 兩個登入 兩個購物車的字  
        span {
            font-size: 15px;
        }

        // 登入的ICON
        .user_icon {
            font-size: 30px;
            margin: 0 0 0 5px;
        }

        // 購物車旁邊的黑色圓圈
        .cart_icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #333;
            text-align: center;
            margin: 0 0 0 5px;
            position: relative;
            vertical-align: middle;

            span {
                display: block;
                width: 30px;
                height: 30px;
                font-size: 18px;
                color: #fff;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 2px;
                margin: auto;
            }
        }
    }

    // 導覽列超連結區塊淡出效果
    @keyframes show_link_section {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    // 導覽列超連結區塊淡入效果
    @keyframes hide_link_section {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            visibility: hidden;

        }
    }

    // 往上飄的字的動畫

    @keyframes soul_out {
        0% {
            opacity: .9;
            transform: translate(0, 4px);
        }

        100% {
            opacity: 0;
            transform: translate(0, -12px);
        }
    }

    // 下面的字從下往上飄的動畫
    @keyframes appear {
        0% {
            opacity: 0;
            transform: translate(0, 12px);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0px);
        }
    }
</style>