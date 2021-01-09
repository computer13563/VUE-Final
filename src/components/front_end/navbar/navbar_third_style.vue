<template>
    <div>
        <section class="container-fluid nav_container">
            <div class="row nav_row">

                <input type="checkbox" name="" id="nav_control">

                <div class="col navbar_col">

                    <p class="nav_logo">
                        <router-link to="/index" class="logo" @click.native="go_top">
                            <i class="fas fa-feather-alt "></i>
                            <span> Dessert</span>
                        </router-link>
                    </p>

                    <p class="nav_item">
                        <router-link :to="{name:''}">最新訊息</router-link>
                        <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                        <router-link :to="{name:'Shop'}">門市地點</router-link>
                        <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                        <router-link :to="{name:''}">關於我們</router-link>
                        <router-link :to="{name:'Login'}">會員登入</router-link>
                    </p>

                    <p class="cart" @click="go_cart_page">
                        <router-link :to="{name:'Cart'}">
                            <i class="fas fa-shopping-bag"></i>
                        </router-link>
                        <span class="cart_item_num" v-if="cart.carts.length">{{cart.carts.length}}</span>
                    </p>

                    <label for="nav_control" class="nav_btn"></label>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        get_cart_list_api,
        del_cart_info_api,
        get_order_list_api,
    } from '@/components/api/cus_api.js'
    export default {
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
            go_cart_page(){
              this.$router.push('/cart');  
            },
            go_top() {
                window.scroll(0, 0);
            },
        },
        created() {
            this.get_cart_list();
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

    // 開關用checkbox
    #nav_control {
        display: none;

        // 選單打開外框變形
        &:checked~.navbar_col {
            border-radius: 50px 0 0 0;
        }

        // 打開選單
        &:checked~.navbar_col .nav_item {
            top: 55px;
            opacity: 1;
        }
    }

    .nav_row {
        max-width: 1440px;
    }

    .navbar_col {
        display: flex;
        padding: 10px 20px;
        background: #fffaf0;
        position: relative;
        transition: .3s;

        // LOGO樣式設定
        @at-root .nav_logo {
            font-size: 30px;

            i,
            span {
                color: #f0a28f;
            }

        }

        // 導覽列裡面選項
        @at-root .nav_item {
            background: #fffaf0;
            margin: auto;
            transition: .3s ease-in-out;
            z-index: 1;

            // 導覽列的選項樣式設定
            a {
                display: block;
                font-size: 18px;
                letter-spacing: 5px;
                color: #f0a28f;

                a:hover {
                    color: #e48973;
                }
            }
        }

        // 購物車的LOGO樣式設定
        @at-root .cart {
            width: 50px;
            height: 100%;
            font-size: 40px;
            text-align: center;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;

            // 購物車顏色設定
            a {
                color: #f0a28f;
            }

            // 購物車物品數量顯示
            @at-root .cart_item_num {
                display: block;
                width: 25px;
                height: 25px;
                font-size: 20px;
                margin: auto;
                border-radius: 50%;
                color: #fff;
                cursor: pointer;
                position: absolute;
                top: 10px;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }

    }

    // RWD
    @include more-360 {
        .navbar_col {
            border-radius: 50px 0 0 50px;
            margin: 0 0 0 5vw;

            // LOGO樣式設定
            @at-root .nav_logo {}

            // 導覽列裡面選項
            @at-root .nav_item {
                position: absolute;
                top: 55px;
                right: 0;
                left: 0;
                opacity: 0;

                // 導覽列的選項樣式設定
                a {
                    padding: 10px 20px;
                    border-bottom: 1px solid #eedfdb;
                }
            }

            // 購物車的LOGO樣式設定
            @at-root .cart {
                margin: 0 50px 0 auto;
            }

            // 漢堡樣式設定
            @at-root .nav_btn {
                width: 50px;
                height: 55px;
                background: #fffaf0;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                margin: auto;

                // 漢堡的三條線設定
                &::before {
                    content: '';
                    height: 2px;
                    width: 30px;
                    background: #f0a28f;
                    box-shadow: 0 10px 0 #f0a28f, 0 -10px 0 #f0a28f;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
            }


        }
    }

    // RWD
    @include more-992 {

        .navbar_col {
            border-radius: 50px 50px 50px 50px;
            margin: 0 5vw 0 5vw;

            // LOGO樣式設定
            @at-root .nav_logo {}

            // 導覽列裡面選項
            @at-root .nav_item {

                display: flex;
                position: relative;
                top: 0;
                opacity: 1;

                // 導覽列的選項樣式設定
                a {
                    padding: 10px 10px;
                    border-bottom: none;

                    &:hover {
                        color: #e48973;
                    }
                }
            }

            // 購物車的LOGO樣式設定
            @at-root .cart {
                margin: 0 30px 0 0;
            }

            // 漢堡樣式設定
            @at-root .nav_btn {
                display: none;
            }
        }

    }
</style>