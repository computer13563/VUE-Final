<template>
    <div>
        <loading :active.sync="isLoading"> </loading>

        <div class="container-fluid p-0 mg-0">
            <!-- 用戶看到的產品頁面的最上面圖片 -->
            <div class="row product_page_carousel">
                <img src="../../assets/photos/chocolate-cake.png" alt="" class="">
            </div>

            <!-- 產品分類名稱 -->
            <section class="row product_page_classification">
                <div class="col-12">
                    <p class="product_page_classification_text">
                        <span v-if="!search_text">所有品項</span>
                        <span v-else>{{search_text}}</span>
                        <span v-if="!search_text">All Products</span>
                        <span v-else>{{search_text_eng}}</span>
                    </p>
                </div>

            </section>
            <!-- 選擇商品類別 -->
            <section class="row product_page_category">
                <div class="col-12 product_page_category_item">

                    <input type="checkbox" id="product_page_category_switch">
                    <!-- 箭頭按下去會展開商品種類 -->
                    <label for="product_page_category_switch">
                        <i class="fas fa-angle-double-right"></i>
                        <!-- 上下裝飾線 -->
                        <p class="product_page_category_item_decoration_line line_top"></p>
                        <p class="product_page_category_item_decoration_line line_bottom"></p>
                    </label>
                    <p>
                        <a href="" @click.prevent="get_text('')">所有品項</a>
                        <a href="" v-for="(item,index) in categories" :key="index" @click.prevent="get_text(item)">
                            {{item}}
                        </a>
                    </p>
                </div>
            </section>

            <!-- 用戶看到的商品頁面的商品卡片 -->
            <section class="row product_page_content">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 product_card" v-for="(item,index) in filter_data"
                            :key="item.id">
                            <div class="card_item">

                                <!-- 商品圖片 -->
                                <div class="card_item_img">
                                    <img :src="item.image" alt="">
                                </div>

                                <!-- 商品中間的購物車圖示 -->
                                <div class="card_item_icon" @click.prevent="add_to_cart(item.id,index)">
                                    <i class="fas fa-spinner fa-spin" v-if="cart_loading === item.id"></i>
                                    <i class="fas fa-shopping-cart cart_icon" v-else></i>
                                </div>

                                <!-- 商品的說明文字 -->
                                <div class="card_item_text">
                                    <div>
                                        <h2>{{item.title}}</h2>
                                        <p>
                                            <span v-if="!item.price">
                                                $ {{item.origin_price}}
                                            </span>
                                            <span v-if="item.price">
                                                $ {{item.origin_price}}
                                            </span>
                                            <span v-if="item.price">
                                                $ {{item.price}}
                                            </span>
                                        </p>
                                    </div>

                                    <!-- <h3 v-if="item.description">{{item.description}}</h3> -->
                                    <!-- <h3 v-else>產品說明產品說明產品說明產品說明產品說明</h3> -->
                                    <div class="view_more" @click="go_product_detail(item.id)">
                                        查看更多
                                        <p class="arrow">
                                            <svg>
                                                <polyline points="0,10 30,10 20,5" />
                                            </svg>
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <!-- 成功加入購物車訊息 -->
                            <div class="alert_msg" v-if="alert_status === item.id">
                                <span>{{alert_mag}}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>

    </div>
</template>

<script>
    import {
        get_products_api,
        add_to_cart_api,
    } from '@/components/api/cus_api.js'

    export default {
        name: 'all_product',
        data() {
            return {
                products: {},
                categories: {},
                filter: {},
                isLoading: false,
                cart_loading: 'nothing',
                search_text: '',
                search_text_eng: '',
                alert_mag: '成功加入購物車',
                alert_status: 'nothing'
            }
        },
        methods: {
            get_product_list(page = 1) {
                const vm = this;
                vm.isLoading = true;
                const new_category = new Set();
                get_products_api(page)
                    .then(res => {
                        console.log(res);
                        vm.products = res.data.products;
                        vm.products.forEach(item => {
                            new_category.add(item.category);
                        })
                        vm.categories = [...new_category];
                        console.log(vm.categories);
                        vm.isLoading = false;
                    })
            },
            add_to_cart(id, index, qty = 1) {
                const vm = this;
                const card_item_icon = document.querySelectorAll('.card_item_icon');
                const cart = {
                    data: {
                        product_id: id,
                        qty
                    }
                };
                // 轉圈圈的時候不能消失
                card_item_icon.forEach((item, index_icon) => {
                    if (index_icon == index) {
                        item.classList.add('card_item_icon_loading');
                    }
                })

                // 轉圈圈的出現
                vm.cart_loading = id;
                add_to_cart_api(cart)
                    .then(res => {
                        console.log(res);
                        vm.cart_loading = '';
                        // 轉圈圈消失
                        card_item_icon.forEach((item, index_icon) => {
                            if (index_icon == index) {
                                item.classList.remove('card_item_icon_loading');
                            }
                        })
                        // 顯示成功訊息
                        vm.alert_cancel(id, index);
                    })
            },
            // 過濾的字串
            get_text(text) {
                const vm = this;
                if (text === '蛋糕') {
                    vm.search_text_eng = 'cake';
                } else {
                    vm.search_text_eng = text;
                }
                vm.search_text = text;
            },
            // 成功訊息顯示設定
            alert_cancel(id, index) {
                const vm = this;
                const alert_msg = document.querySelectorAll('.alert_msg');
                vm.alert_status = id;
                alert_msg.forEach((item, index_alert) => {
                    if (index_alert == index) {
                        item.style.opacity = '1';
                    }
                })
                setTimeout(() => {
                    alert_msg.forEach((item, index_alert) => {
                        if (index_alert == index) {
                            item.style.opacity = '0';
                        }
                    })
                    vm.alert_status = '';
                }, 2000);
            },
            go_product_detail(product_id){
                this.$router.push(`/product/${product_id}`);
                window.scroll(0,0);
            }
        },
        computed: {
            filter_data() {
                const vm = this;
                if (vm.search_text) {
                    return vm.products.filter(item => {
                        return item.category.toLowerCase().match(vm.search_text.toLowerCase());
                    })
                } else {
                    return vm.products;
                }
            }
        },
        created() {
            this.get_product_list();
        }
    }
</script>

<style scoped lang="scss">
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }

    // 產品頁面的最上面輪播
    .product_page_carousel {
        height: calc(100vh - 80px);
        overflow: hidden;

        img {
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
        }
    }

    // 產品頁面的主要內容
    .card_item {
        width: calc(100% - 90px);
        background: #fffec2;
        margin: 0 auto 80px;

        // 商品卡片的標題
        h2 {
            font-size: 1.5em;
        }

        // 商品卡片的說明
        h3 {
            font-size: 1.3em;
        }

        // 商品頁面的輪播圖下方產品種類文字
        @at-root .product_page_classification {
            padding: 100px 0 0;
            background: #fffec2;
            position: relative;

            // 放文字的兩個 span
            span {
                display: block;
                color: #620062;
                text-align: center;
                font-weight: bold;
                padding: 10px 0;

                &:nth-child(1) {
                    font-size: 4em;
                    letter-spacing: 10px;
                }

                &:nth-child(2) {
                    font-size: 2.5em;
                    letter-spacing: 3px;
                }
            }
        }

        // 產品種類按鈕
        @at-root .product_page_category {
            overflow: hidden;
            padding: 100px 0;
            background: #fffec2;
            z-index: -1;

            // 把選擇商品種類的按鈕橫排
            .product_page_category_item {
                display: flex;
            }

            // 把checkbox隱藏起來
            #product_page_category_switch {
                display: none;
            }

            // checkbox 按下去按鈕才會顯示
            #product_page_category_switch:checked~p a {
                display: block;
            }

            // 當 checkbox 點到的時候把 label 偽元素展開
            #product_page_category_switch:checked+label::after,
            #product_page_category_switch:checked+label p {
                width: 100vw;
            }

            // 當 checkbox 點到的時候 箭頭反轉
            #product_page_category_switch:checked+label .fas {
                transform: scaleX(-1);
            }

            // 設定展開偽元素的按鈕
            label {
                min-width: 70px;
                height: 100px;
                font-size: 50px;
                text-align: center;
                line-height: 100px;
                position: relative;
                background: #620062;
                color: #fffec2;
            }

            // 展開 label 的偽元素
            label::after {
                content: '';
                height: 100px;
                width: 0vw;
                border-left: 3px solid #fffec2;
                background: #620062;
                position: absolute;
                left: 70px;
                transform-origin: left;
                transition: .5s cubic-bezier(0.49, 0.11, 0.56, 0.95);
                // 蓋住父元素背景
                z-index: 1;
                // 取消事件 不然點到就縮回去
                pointer-events: none;
            }

            // 種類按鈕的上下兩條藍色裝飾線
            .product_page_category_item_decoration_line {
                width: 0vw;
                height: 3px;
                background: linear-gradient(90deg, #045388, #2BA5CD);
                transform-origin: left;
                transition: .5s cubic-bezier(0.49, 0.11, 0.56, 0.95);
            }

            // 上裝飾線
            .line_top {
                position: absolute;
                top: -5px;
                left: 0;
            }

            // 下裝飾線
            .line_bottom {
                position: absolute;
                bottom: -5px;
                left: 0;
            }

            // 包住商品種類按鈕的 p
            p {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                align-items: center;
            }

            // 商品種類的按鈕
            a {
                display: none;

                width: 200px;
                height: 70px;

                font-size: 20px;
                font-weight: bold;
                letter-spacing: 8px;
                text-align: center;
                line-height: 70px;

                color: #fffec2 !important;
                border: 2px solid #fffec2;
                border-radius: 10px;

                // 蓋住label偽元素背景
                z-index: 2;
            }

            a:active {
                border: 2px solid #d8d7a2;
                color: #d8d7a2 !important;
            }
        }

        // 產品的卡片
        @at-root .product_page_content {
            background: #fffec2;
            position: relative;
            padding: 0 100px;

            // 跟頁尾的間格線
            &::after {
                content: '';
                width: 100%;
                height: 1px;
                position: absolute;
                left: 0;
                bottom: 0;
                background: linear-gradient(90deg, #045388, #2BA5CD);
            }

            a {
                display: block;
            }

            // 下面三個是卡片斜排
            @at-root .product_card:nth-child(3n+1) {
                transform: translateY(0);
            }

            @at-root .product_card:nth-child(3n+2) {
                transform: translateY(40px);
            }

            @at-root .product_card:nth-child(3n+3) {
                transform: translateY(80px);
            }
        }

        // 商品卡片的圖片
        @at-root .card_item_img {

            margin: 0 auto;
            border-radius: 20px;
            width: 100%;
            height: 200px;
            overflow: hidden;
            position: relative;

            @at-root & img {
                display: block;
                width: 100%;
                height: 100%;
                transform: scale(1, 1);
                transition: .3s;

                &:hover {
                    border-radius: 20px;
                    transform: scale(1.2, 1.2);
                }
            }
        }

        // 滑鼠摸到才顯示 加入購物車的 ICON
        @at-root &:hover .card_item_icon {
            opacity: 1;
        }

        // 轉圈圈的時候會維持顯示
        .card_item_icon_loading {
            opacity: 1;
            transition: .3s;
        }

        // 加入購物車的 ICON
        @at-root .card_item_icon {
            opacity: 0;
            background: #fffec2;
            color: #620062;
            font-size: 1.5em;
            width: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 50%;
            margin: -25px auto 0;
            text-align: center;
            position: absolute;
            right: 0;
            left: 0;

            &:hover::before {
                content: '';
                // 用important蓋過bootstrap
                box-sizing: content-box !important;
                width: 100%;
                height: 100%;
                position: absolute;
                border-top: 3px solid #620062;
                border-bottom: 3px solid #620062;
                border-left: 3px solid #620062;
                border-right: 3px solid #620062;
                top: -3px;
                left: -3px;
                border-radius: 50%;
                transform: rotate(-45deg);
            }

            &:active {
                background: #620062;
                color: #fffec2;
            }
        }

        // 商品的說明文字
        @at-root .card_item_text {
            color: #620062;
            padding: 30px 0 0;
            border: 2px solid transparent;
            border-radius: 20px;

            & div:nth-child(1) {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #620062;
                display: flex;
                justify-content: space-between;
                text-align: center;
            }

            span {
                font-size: 1.5em;
                font-weight: bold;
            }

            span:nth-child(1) {
                text-decoration: line-through;

                color: #9c00009a;
                margin: 0 10px 0 0;
            }
        }

        // 查看更多
        @at-root .view_more {
            cursor: pointer;
            display: inline-flex;
            padding: 5px 10px;
            font-size: 20px;
            letter-spacing: 4px;
            border: 1px solid #620062;
            transition: .1s;

            &:hover .arrow{
                left:15px;
            }

            // 箭頭
            @at-root .arrow {
                width: 40px;
                height: 20px;
                position: relative;
                top: 0;
                bottom: 0;
                left: 10px;
                margin: auto;
                transition: .3s;

                // SVG畫箭頭
                svg {
                    height: 40px;
                    width: 40px;
                    position: absolute;

                    polyline {
                        fill: none;
                        stroke: #620062;
                        stroke-width: 1
                    }
                }
            }
        }
    }

    // 成功加入跳出訊息
    .alert_msg {
        width: 160px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        text-align: center;
        background: #baf8ca;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 100;
        transition: .3s;

        span {
            color: #0b9c43;
            font-size: 15px;
            letter-spacing: 5px;
        }
    }
</style>