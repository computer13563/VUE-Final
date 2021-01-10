<template>
    <div>
        <loading :active.sync="isLoading"> </loading>

        <section class="check_out_container">
            <NavbarSecStyle></NavbarSecStyle>
            <section class="row check_out_row">

                <!-- 配送資料 -->
                <div class="col-12 col-md-7">
                    <div class="check_out_personal_info">
                        <p>
                            <span class="check_out_personal_info_title">配送資料</span>
                        </p>
                        <p>
                            <span>Email</span>
                            <span>{{ order.user.email }}</span>
                        </p>
                        <p>
                            <span>收件人姓名</span>
                            <span>{{ order.user.name }}</span>
                        </p>
                        <p>
                            <span>收件人電話</span>
                            <span>{{ order.user.tel }}</span>
                        </p>
                        <p>
                            <span>收件人地址</span>
                            <span>{{ order.user.address }}</span>
                        </p>
                        <p>
                            <span>付款狀態</span>
                            <span v-if="!order.is_paid">尚未付款</span>
                            <span v-else class="text-success">付款完成</span>
                        </p>
                    </div>
                </div>

                <!-- 購買的商品 -->
                <div class="col-12 col-md-5">
                    <section class="check_out_product_title">
                        <span>購買商品</span>
                    </section>
                    <ul class="check_out_product_ul">
                        <li v-for="item in order.products" :key="item.id" class="check_out_product_li">
                            <figure class="check_out_product_img">
                                <img :src="item.product.image" alt="">
                            </figure>
                            <div class='check_out_product_text'>
                                <p>
                                    <span>{{ item.product.title }}</span>
                                </p>
                                <p>
                                    <span>{{ item.qty }}{{ item.product.unit }}</span>
                                    <span>{{ item.final_total }}元</span>
                                </p>
                            </div>
                        </li>
                    </ul>

                    <section class="check_out_product_total">
                        <p>總計</p>
                        <p>{{ order.total }}元</p>
                    </section>
                </div>
            </section>

            <section class="row">

                <!-- 確定結帳 -->
                <div class="col-12">
                    <button class="check_out_product_btn" @click.prevent="check_out" v-if="!order.is_paid">確認付款去</button>
                    <button class="check_out_product_btn" @click.prevent="back_product_page" v-else>繼續購物</button>
                </div>

            </section>
        </section>

        <!-- 結帳頁面FOOTER -->
        <section class="cart_footer">
            <p class="cart_copyright">Copyright &copy; 2020 虛擬甜點</p>
            <p class="footer_decoration"></p>
        </section>
    </div>
</template>

<script>
    import {
        get_single_order_api,
        check_out_api
    } from '@/components/api/cus_api.js'
    import NavbarSecStyle from '@/components/front_end/navbar/navbar_sec_style.vue'

    export default {
        name: 'Checkout',
        components: {
            NavbarSecStyle,
        },
        data() {
            return {
                order_id: '',
                order: {
                    user: {}
                },
                isLoading:false
            }
        },
        methods: {
            get_single_order() {
                const vm = this;
                vm.isLoading = true;
                const order_id = vm.order_id;
                get_single_order_api(order_id)
                    .then(res => {
                        console.log(res);
                        vm.order = res.data.order;
                        vm.isLoading = false;
                    })
            },
            check_out() {
                const vm = this;
                const order_id = vm.order_id;
                check_out_api(order_id)
                    .then(res => {
                        console.log(res);
                        if (res.data.success) {
                            vm.get_single_order();
                        }
                    })
            },
            back_product_page(){
                this.$router.push({name:'AllProduct'});
            }
        },
        created() {
            this.order_id = this.$route.params.order_id;
            this.get_single_order();
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

    // 結帳頁面最外層容器
    .check_out_container {
        width: 100%;
        overflow: hidden;

        // 結帳頁面的資訊欄位
        @at-root .check_out_row {
            max-width: 1000px;
            width: 100%;
            margin: 150px auto 0;

            // 個人資料
            @at-root .check_out_personal_info {
                width: 100%;
                padding: 0 50px;

                p {
                    border-bottom: 1px solid #eee;
                    padding: 20px 30px;

                    &:nth-child(1) {
                        padding: 10px 30px;
                    }
                }

                span {
                    display: block;
                }

                span:nth-child(1) {
                    font-size: 17px;
                    letter-spacing: 4px;

                }

                span:nth-child(2) {
                    font-size: 20px;
                    letter-spacing: 3px;
                    margin-top: 10px;
                }

                span.check_out_personal_info_title {
                    font-size: 20px;
                }
            }

            // 購買商品字樣
            @at-root .check_out_product_title {
                padding: 10px 30px;
                font-size: 20px;
                letter-spacing: 4px;
                color: #3e515a;
            }

            // 結帳頁面的商品
            @at-root .check_out_product_ul {
                width: 100%;
                border-top: 1px solid #ccc;

                @at-root .check_out_product_li {
                    display: flex;
                    border-bottom: 1px solid #ccc;
                    padding: 20px 30px;
                    font-size: 18px;

                    // 結帳頁面的商品圖片
                    @at-root .check_out_product_img {
                        width: 120px;
                        height: 80px;
                        overflow: hidden;
                        margin-right: 20px;

                        img {
                            width: 100%;
                        }
                    }

                    // 結帳頁面的商品名稱數量
                    @at-root .check_out_product_text {
                        width: calc(100% - 120px);
                        color: #3e515a;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        // 商品標題
                        p:nth-child(1) {
                            letter-spacing: 4px;
                            text-align: left;
                        }

                        // 數量跟價錢
                        p:nth-child(2) {
                            text-align: right;
                            letter-spacing: 2px;

                            span:nth-child(1) {
                                margin-right: 10px;
                            }
                        }

                    }

                    // 價錢總計
                    @at-root .check_out_product_total {
                        padding: 20px;
                        display: flex;
                        justify-content: flex-end;
                        font-size: 25px;
                        letter-spacing: 4px;
                        color: #3e515a;

                        // 設定總計跟數字的間格
                        p:nth-child(1) {
                            margin-right: 20px;
                        }
                    }
                }
            }

        }

        // 結帳按紐
        @at-root .check_out_product_btn {
            display: block;
            margin: 20px auto;
            outline: none;
            border: none;
            border-radius: 5px;
            width: 300px;
            height: 80px;
            background: #d63259;
            color: #fefefe;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, .9);
            font-size: 30px;
            letter-spacing: 3px;

            &:hover {
                outline: none;
                background: #94233e;
            }

            &:active {
                transform: translate(1px, 1px);
                box-shadow: none;
            }
        }

        // 結帳頁面FOOTER
        @at-root .cart_footer {
            width: 100%;

            // FOOTER版權聲明
            .cart_copyright {
                text-align: center;
                color: #ccc;
                background: #fdfdfd;
                border-top: 1px solid #ccc;
                margin: 50px 0 0 0;
                padding: 10px 0;
            }

            // footer最底下裝飾線
            .footer_decoration {
                height: 3px;
                background: #94233e;
            }
        }
    }
</style>