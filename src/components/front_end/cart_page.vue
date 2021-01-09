<template>
    <div>
        <loading :active.sync="isLoading"> </loading>
        
        <!-- 設定最外層大小 -->
        <div class="cart_container">
            <NavbarSecStyle></NavbarSecStyle>
            <!-- 購物車本身大小 -->
            <section class="cart_row">
                <p class="cart_title">
                    <span>
                        購物車
                    </span>
                </p>
            </section>

            <!-- 商品項目列表 -->
            <section class="cart_row">

                <!-- 購物車的商品內容 -->
                <section class="cart_col main">
                    <!-- 購物車的商品列表 -->
                    <ul class="cart_item_list">

                        <!-- 購物車裡面沒東西要顯示的東西 -->
                        <div class="cart_col nothing" v-if="cart.carts !== undefined && cart.carts.length < 1">
                            <span>目前購物車沒東西</span>
                            <button>放點東西進購物車</button>
                        </div>

                        <!-- 商品內容 -->
                        <li class="cart_item" v-for="item in cart.carts" :key="item.id">
                            <section class="cart_item_img_block">
                                <!-- 商品圖片 -->
                                <figure class="cart_item_img">
                                    <img :src="item.product.image" alt="">
                                </figure>
                                <!-- 商品名稱 -->
                                <p class="cart_item_title">
                                    {{item.product.title}}
                                </p>
                            </section>

                            <!-- 商品選購數量 刪除 這個商品的價格 -->
                            <section class="cart_item_price_block">

                                <!-- 選擇商品數量 -->
                                <div class="select_num">

                                    <!-- 數量選擇 -->
                                    <input type="checkbox" name="" :id="item.id">
                                    <label :for="item.id" class="select_num_label">{{item.qty}}</label>

                                    <!-- 數量選擇的下拉選單 -->
                                    <div class="num">
                                        <button class="" v-for="num in 15" :key="num" :value="num"
                                            @click.prevent="add_to_cart(item.product_id ,num),del_cart(item.id)">
                                            {{num}}
                                        </button>
                                    </div>

                                </div>

                                <!-- 刪除 -->
                                <p class="cart_item_del">
                                    <i class="far fa-trash-alt"></i>
                                    <button type="button" @click.prevent="del_cart(item.id)">刪除</button>
                                </p>

                                <p class="cart_item_price">
                                    {{item.total}} 元
                                </p>
                            </section>
                        </li>
                    </ul>
                </section>

                <!-- 右邊顯示最終價格的地方 -->
                <section class="cart_col side">
                    <p>
                        <span>總價</span>
                        <span class="text1">{{cart.total}}</span>
                    </p>
                    <p>
                        <span>折價後總價</span>
                        <span class="text1">{{cart.final_total}}</span>
                    </p>
                    <input type="text" v-model="coupon_code" placeholder="輸入優惠碼">
                    <button @click.prevent="use_coupon" class="use_coupon"
                        v-if="cart.carts !== undefined && cart.carts.length > 0">使用優惠券</button>
                    <button class="check_out" @click.prevent="to_recipient_page"
                        v-if="cart.carts !== undefined && cart.carts.length > 0">
                        去結帳
                    </button>
                </section>

            </section>

            <!-- 商品頁面FOOTER -->
            <section class="cart_footer">
                <p class="cart_copyright">Copyright &copy; 2020 虛擬甜點</p>
                <p class="footer_decoration"></p>
            </section>
        </div>

    </div>
</template>

<script>
    import {
        get_cart_list_api,
        del_cart_info_api,
        use_coupon_api,
        check_out_page_api,
        get_order_list_api,
        add_to_cart_api,
        get_products_api,
    } from '@/components/api/cus_api.js'

    import NavbarSecStyle from '@/components/front_end/navbar/navbar_sec_style.vue'

    export default {
        name: 'Cart',
        components: {
            NavbarSecStyle,
        },
        data() {
            return {
                cart: {},
                cart_id: [],
                coupon_code: '',
                order: {
                    data: {
                        user: {
                            name: '',
                            email: '',
                            tel: '',
                            address: ''
                        },
                        message: ''
                    }
                },
                products: {},
                filter_product: [],
                isLoading:false
            }
        },
        methods: {
            get_cart_list() {
                const vm = this;
                vm.isLoading = true;
                get_cart_list_api().then(res => {
                    console.log(res);
                    if (res.data.success) {
                        vm.cart = res.data.data;
                    } else {
                        console.log(res);
                    }
                    vm.isLoading = false;
                    console.log(vm.cart);
                })
            },
            del_cart(id) {
                del_cart_info_api(id).then(res => {
                    console.log(res);
                    this.get_cart_list();
                })
            },
            use_coupon() {
                const vm = this;
                const coupon = {
                    data: {
                        code: vm.coupon_code
                    }
                };
                use_coupon_api(coupon)
                    .then(res => {
                        console.log(res);
                        vm.get_cart_list();
                    })
            },
            check_out_page() {
                const vm = this;
                check_out_page_api(vm.order)
                    .then(res => {
                        console.log(res);
                        if (res.data.success) {
                            vm.$router.push(`/checkout/${res.data.orderId}`);
                        }
                    })
            },
            get_order_list(page = 1) {
                const vm = this;
                get_order_list_api(page)
                    .then(res => {
                        console.log(res);
                    })
            },
            add_to_cart(id, qty) {
                const vm = this;
                const cart = {
                    data: {
                        product_id: id,
                        qty
                    }
                };

                add_to_cart_api(cart)
                    .then(res => {
                        console.log(res);
                        if (res.data.success) {

                        }
                    })
            },
            get_product_list(page = 1) {
                const vm = this;
                const new_category = new Set();
                get_products_api(page)
                    .then(res => {
                        vm.products = res.data.products;
                        vm.products.forEach(item => {
                            new_category.add(item.category);
                        })
                        console.log(vm.products);
                    })
            },
            to_recipient_page() {
                this.$router.push('/recipient');
            }
        },
        created() {
            this.get_cart_list();
            this.get_order_list();
            this.get_product_list();
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        // 3e515a   fff5e6   ff9800  94233e #d63259 ffeeb3
    }

    // 購物車頁面的最外層容器
    .cart_container {
        width: 100%;
        background: #fdfdfd;

        // 購物車頁面最上面標題
        @at-root .cart_title {
            width: 100%;
            height: 200px;
            line-height: 200px;
            font-size: 70px;
            text-align: center;
            color: #3e515a;
            margin: 110px 0 0 0;
        }

        // 設定購物車本身容器
        @at-root .cart_row {
            display: flex;
            max-width: 1200px;
            width: 80%;
            margin: auto;

            // 購物車顯示商品的區域
            @at-root .main {
                width: calc(100% - 250px);
                color: #3e515a;
                padding: 0 50px 0 0;

                // 商品列表 ul
                @at-root .cart_item_list {
                    width: 100%;
                    border-top: 1px solid #3e515a;

                    // 購物車沒東西要顯示的資訊
                    @at-root .nothing {

                        // 字和和按紐共同設定
                        span,
                        button {
                            display: block;
                            margin: 40px 0;
                        }

                        // 字的樣式
                        span {
                            font-size: 50px;
                            text-align: center;
                        }

                        // 按鈕樣式
                        button {
                            border: none;
                            width: 300px;
                            height: 80px;
                            font-size: 30px;
                            color: #fff;
                            background: #94233e;
                            margin: auto;
                        }

                        // 按鈕摸到的樣式
                        button:hover {
                            background: #d63259;
                        }
                    }

                    // 商品項目 li
                    @at-root .cart_item {
                        display: flex;
                        border-bottom: 1px solid #3e515a;
                        padding: 40px 0;

                        // 圖片 商品名稱區塊
                        @at-root .cart_item_img_block {
                            display: flex;
                            width: 60%;

                            // 商品圖片
                            @at-root .cart_item_img {
                                width: 150px;
                                height: 100px;
                                margin: 0 40px 0 0;
                                overflow: hidden;

                                img {
                                    width: 100%;
                                }
                            }

                            // 商品名稱
                            @at-root .cart_item_title {
                                font-size: 25px;
                            }
                        }

                        // 商品價格區塊
                        @at-root .cart_item_price_block {
                            display: flex;
                            width: 40%;
                            justify-content: space-between;
                            align-items: center;


                            // 選擇商品數量
                            @at-root .select_num {
                                position: relative;

                                // 控制下拉式選單開關的checkbox
                                input {
                                    display: none;

                                    // 按下去的時候要開選單
                                    &:checked~.num {
                                        display: block;
                                    }

                                    // 按下的時候箭頭反轉
                                    &:checked~.select_num_label::after {
                                        transform: rotate(180deg);
                                    }
                                }

                                // 控制下拉式選單開合的label
                                @at-root .select_num_label {
                                    border: #000 solid 1px;
                                    padding-left: 20px;
                                    font-size: 20px;
                                    width: 100px;
                                    height: 40px;
                                    line-height: 40px;

                                    // 選擇數量的箭頭
                                    &::after {
                                        content: '';
                                        position: absolute;
                                        border-top: 10px solid #94233e;
                                        border-left: 8px solid transparent;
                                        border-right: 8px solid transparent;
                                        top: 15px;
                                        right: 10px;
                                    }
                                }

                                // 商品數量的下拉式選單
                                @at-root .num {
                                    display: none;
                                    position: absolute;
                                    height: 150px;
                                    width: 100px;
                                    overflow: hidden scroll;
                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
                                    z-index: 1;

                                    button {
                                        display: block;
                                        width: 100%;
                                        height: 30px;
                                        border: none;
                                        background: #fff;
                                        z-index: 2;
                                    }

                                    button:hover {
                                        background: rgb(241, 241, 241);
                                        z-index: 2;
                                    }
                                }
                            }

                            // 刪除按紐
                            @at-root .cart_item_del {
                                color: #aaa;

                                // 刪除的ICON和字被摸到改變顏色
                                &:hover,
                                button:hover {
                                    color: #d63259;
                                }

                                button {
                                    border: none;
                                    padding: 0 5px;
                                    color: #aaa;
                                    background: #fff;
                                }
                            }

                            // 顯示價格
                            @at-root .cart_item_price {
                                font-size: 25px;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }

            // 購物車顯示總價格的區域
            @at-root .side {
                width: 250px;
                height: 300px;
                padding: 20px;
                background: #f8f8f4;
                position: sticky;
                top: 0;

                // 把價錢移到右邊
                p {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #999;
                    color: #999;
                    padding: 0 0 20px;
                    margin: 0 0 20px 0;
                }

                // 輸入優惠券
                input {
                    border: none;
                    width: 100%;
                    height: 40px;

                    &:focus {
                        outline: none;
                    }

                    &:focus::placeholder {
                        color: transparent;
                    }
                }

                // 優惠券跟結帳去按紐共同部分
                button {
                    height: 40px;
                    color: #fff;
                    margin: 0 0 20px 0;
                    background: #94233e;

                    &:hover {
                        background: #d63259;
                    }
                }

                // 優惠券按紐
                @at-root .use_coupon {
                    width: 100%;
                    border: none;
                }

                // 去結帳按紐
                @at-root .check_out {
                    width: 100%;
                    border: none;
                }
            }
        }

        // 購物車頁面FOOTER
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