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

                    <div class="link_block">
                        <router-link :to="{name:'News'}">最新訊息</router-link>
                        <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                        <router-link :to="{name:'ShoppingProcessPage'}">購物流程</router-link>
                        <router-link :to="{name:'Shop'}">門市地點</router-link>
                        <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                        <router-link :to="{name:'AboutUs'}">關於我們</router-link>
                    </div>

                    <div class="login_cart_block">
                        <router-link :to="{name:'Login'}">
                            <span>登入</span>
                            <i class="fas fa-user-circle"></i>
                        </router-link>

                        <router-link :to="{name:'Cart'}">
                            <span>購物車</span>
                            <!-- <i class="fas fa-shopping-cart"></i> -->
                            <p class="cart_icon">
                                <span v-if="cart.carts.length">{{cart.carts.length}}</span>
                                <span v-else>0</span>
                            </p>
                            <!-- <i class="fas fa-shopping-bag"></i> -->
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
        background: #191970 ;
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

    .logo_block {

        &:hover i,
        &:hover span {
            color: #ff5f54;
        }

        i,
        span {
            font-size: 50px;
            color: #fff;
        }
    }

    .link_block {
        display: flex;
        align-items: center;

        a {
            &:hover {
                color: #ff5f54;
            }

            font-size: 18px;
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
                color: #ff5f54;
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
</style>