<template>
    <div>
        <loading :active.sync="isLoading"> </loading>

        <NavbarFourthStyle></NavbarFourthStyle>
        <div class="container-fluid container_pro_detail">

            <!-- 商品詳細的圖片 -->
            <div class="row row_pro_detail_img">
                <div class="col-12 col-md-6 col_pro_img">

                    <!-- 商品大圖 -->
                    <figure>
                        <p class="bg_img"> </p>
                    </figure>

                    <!-- 此商品的切換圖片 -->
                    <div class="selected_img_block">

                        <!-- 第一張圖片 -->
                        <figure>
                            <p class="fir_selected_img" @click="change_img(first_selected_bg.img,first_selected_bg.id)">
                            </p>
                        </figure>

                        <!-- 其他圖片 -->
                        <figure v-for='(item) in pro_img' :key="item.id">
                            <p class="selected_img" @click="change_img(item.img,item.id)"> </p>
                        </figure>

                    </div>

                </div>

                <!-- 商品名稱價格 -->
                <div class="col-12 col-md-6 col_pro_description">

                    <!-- 商品名稱 -->
                    <p class="title">{{product.title}}</p>

                    <!-- 商品說明 -->
                    <p class="description">{{product.description}}</p>

                    <!-- 商品價格 -->
                    <p class="price">
                        <!-- 折價後價格 -->
                        <span v-if="product.price">
                            {{price_format(product.price)}}
                        </span>

                        <!-- 原始價格 -->
                        <span class="origin_price" v-if="product.price">
                            (原價{{price_format(product.origin_price)}})
                        </span>

                        <!-- 如果沒折價會顯示 -->
                        <span v-else>
                            {{price_format(product.origin_price)}}
                        </span>
                    </p>

                    <!-- 放入購物車 -->
                    <p class="btn_cart">
                        <span>
                            加入購物車
                            <i class="fas fa-shopping-cart cart_icon"></i>

                        </span>
                    </p>
                </div>
            </div>

            <!-- 商品敘述 -->
            <div class="container-fluid container_product_intro">
                <div class="row row_product_intro">
                    <div class="col-12 col_product_intro">

                        <p class="product_indro">
                            <span>商品介紹</span>
                        </p>

                        <!-- 商品介紹的外層 -->
                        <div class="product_intro_block">

                            <!-- 商品介紹的圖 -->
                            <p class="product_intro_block_bg"> </p>

                            <!-- 商品介紹的字 -->
                            <p class="product_intro_block_text">
                                <span>
                                    {{product.content}}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 商品原料的說明 -->
            <div class="container-fluid container_material_butter">
                <div class="row row_material_butter">
                    <!-- 奶油說明 -->
                    <div class="col-12 col_material_butter">
                        <p class="material_source">
                            <span>原料來源</span>
                        </p>

                        <!-- 奶油的外容器 -->
                        <div class="butter">

                            <!-- 奶油的橫圖 -->
                            <p class="butter_lg_bg"></p>

                            <!-- 奶油的說明文字 -->
                            <div class="butter_text">
                                <span class="butter_text_title">
                                    法國百年品牌嚴選奶油
                                </span>

                                <p class="butter_text_content">
                                    <span>
                                        嚴選自法國的高級奶油，
                                    </span>
                                    <span>
                                        嚴選自法國的高級奶油，
                                    </span>
                                    <span>
                                        嚴選自法國的高級奶油，
                                    </span>
                                    <span>
                                        嚴選自法國的高級奶油。
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- 商品原料的說明 -->
            <div class="container-fluid container_material_milk">
                <div class="row row_material_milk">
                    <!-- 牛奶說明 -->
                    <div class="col-12 col_material_milk">
                        <p class="material_source">
                            <span>原料來源</span>
                        </p>
                        <!-- 牛奶的外容器 -->
                        <div class="milk">
                            <!-- 牛奶的橫圖 -->
                            <p class="milk_lg_bg"> </p>
                            <!-- 牛奶說明文字 -->
                            <div class="milk_text">
                                <span class="milk_text_title">
                                    北海道百年品牌嚴選牛奶
                                </span>

                                <p class="milk_text_content">
                                    <span>
                                        嚴選自北海道的嚴選牛奶，
                                    </span>
                                    <span>
                                        嚴選自北海道的嚴選牛奶，
                                    </span>
                                    <span>
                                        嚴選自北海道的嚴選牛奶，
                                    </span>
                                    <span>
                                        嚴選自北海道的嚴選牛奶。
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 商品規格 -->
            <div class="container-fluid container_spec">
                <div class="row row_spec">
                    <div class="col-12">
                        <p class="spec_text">
                            <span>商品規格</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 col_spec">
                        <p class="spec_item size">
                            <span class="spec_item_detail">商品大小</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-8 col_spec">
                        <p class="spec_item size_detail">
                            <span class="spec_item_detail">W30 X D30 X H30 (cm)</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 col_spec">
                        <p class="spec_item weight">
                            <span class="spec_item_detail">商品重量</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-8 col_spec">
                        <p class="spec_item weight_detail">
                            <span class="spec_item_detail">約 500 公克</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 col_spec">
                        <p class="spec_item note">
                            <span class="spec_item_detail">注意事項</span>
                        </p>
                    </div>
                    <div class="col-12 col-md-8 col_spec">
                        <p class="spec_item note_detail">
                            <ul class="spec_item_detail">
                                <li>本商品需冷藏低於20度之環境</li>
                                <li>本商品未加防腐劑，請盡快食用完畢</li>
                                <li>商品成分含有奶、蛋，無法食用上述食材請於訂單內備註</li>
                                <li>運送過程如有碰撞，請於收到後撥打客服專線</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarFourthStyle from '@/components/front_end/navbar/navbar_fourth_style.vue'

    import {
        product_detail_api,
    } from '@/components/api/cus_api.js'

    export default {

        components: {
            NavbarFourthStyle
        },
        data() {
            return {
                pro_img: [{
                        id: '1',
                        img: require('../../../assets/photos/chocolate-cake-new.jpg')
                    },
                    {
                        id: '2',
                        img: require('../../../assets/photos/chocolate-cupcake-new.jpg')
                    },
                    {
                        id: '3',
                        img: require('../../../assets/photos/chocolate-matte-new.jpg')
                    },
                    {
                        id: '4',
                        img: require('../../../assets/photos/chocolate-glossy-new.jpg')
                    },
                ],
                product: {},
                first_selected_bg: {
                    id: '',
                    img: '',
                },
                product_id: '',
                isLoading: false
            }
        },
        methods: {

            // 按下下方小圖切換
            change_img(src, id) {
                const vm = this;
                // 商品大圖
                const bg_img = document.querySelector('.bg_img');
                // 切換的第一張圖片   跟商品大圖一樣
                const fir_selected_img = document.querySelector('.fir_selected_img');
                // 切換的其他圖片
                const selected_img = document.querySelectorAll('.selected_img');

                // 按哪張圖就把那張圖放到大圖
                bg_img.style.backgroundImage = 'url(' + src + ')';

                // 判斷是不是第一張圖   是的話不透明而且把其他圖變半透明
                if (id === vm.first_selected_bg.id) {
                    // 第一張圖
                    fir_selected_img.style.opacity = 1;
                    // 其他圖
                    selected_img.forEach(item => {
                        item.style.opacity = .5;
                    })
                } else {
                    // 第一張圖
                    fir_selected_img.style.opacity = .5;
                    // 點其他圖哪張點到變不透明  其他變透明
                    selected_img.forEach(item => {
                        if (item.style.backgroundImage === bg_img.style.backgroundImage) {
                            item.style.opacity = 1;
                        } else {
                            item.style.opacity = .5;
                        }
                    })
                }
            },

            // 呼叫商品詳細的API
            product_detail() {
                const vm = this;
                const id = vm.product_id;
                vm.isLoading = true;
                product_detail_api(id).then(res => {
                    vm.product = res.data.product;
                    console.log(res.data);
                    // 把接收到的資料裡面的圖片放到大圖
                    const bg_img = document.querySelector('.bg_img');
                    vm.first_selected_bg.img = res.data.product.image;
                    vm.first_selected_bg.id = res.data.product.id;
                    bg_img.style.backgroundImage = `url('${vm.first_selected_bg.img}')`;

                    // 切換圖片的第一張圖  跟大圖一樣
                    const fir_selected_img = document.querySelector('.fir_selected_img');
                    fir_selected_img.style.backgroundImage = `url('${vm.first_selected_bg.img}')`;

                    // 切換圖片的第二張開始
                    const selected_img = document.querySelectorAll('.selected_img');
                    vm.pro_img.forEach((item, index) => {
                        selected_img.forEach((select_item, select_index) => {
                            if (index === select_index) {
                                select_item.style.backgroundImage = `url('${(item.img)}')`;
                            }
                        })
                    })
                    vm.isLoading = false;
                })
            },

            // 價錢格式轉換
            price_format(price) {
                const init_format = new Intl.NumberFormat('zh-Hant', {
                    style: 'currency',
                    currency: 'TWD',
                    minimumFractionDigits: '0'
                });
                return init_format.format(price);
            }
        },
        computed: {},
        watch: {},
        created() {
            this.product_id = this.$route.params.product_id;
            this.product_detail();
        }
    }
</script>

<style lang="scss" scoped>
    // 8591B7 藍紫  BEBAAF 銀白  35353D 魅影黑   #32243e變化後深紫色   583f6d項目的邊框  3d2b4b背景  #ff5f54;字的顏色
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    .container_pro_detail {
        padding: 50px 0 0 0;
        background: #3b2b4b;
        overflow: hidden;
    }

    .row {
        width: 80%;
        max-width: 1400px;
    }

    // 商品圖片跟此項商品說明
    .row_pro_detail_img {
        padding: 50px 0;
        margin: auto;
        overflow: hidden;

        figure {
            overflow: hidden;
        }

        @at-root .col_pro_img {

            // 大圖
            @at-root .bg_img {
                width: 100%;
                height: 300px;
                margin: 0 20px 0 0;
                background: center center/100% no-repeat;
            }

            // 被選的小圖
            @at-root .selected_img_block {
                display: flex;
                background: #eee;

                // 第一個被選的小圖
                .fir_selected_img {
                    width: 150px;
                    height: 100px;
                    background: center center/cover no-repeat;
                }

                // 其他小圖
                .selected_img {
                    width: 150px;
                    height: 100px;
                    background: center center/cover no-repeat;
                    opacity: .5;
                }
            }
        }

        // 商品圖片的右邊說明
        @at-root .col_pro_description {
            padding: 0px 0 20px 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            // 商品標題價格說明共同樣式
            p {
                color: #fff;
                font-weight: 100;
            }

            // 商品標題
            .title {
                font-size: 40px;
                letter-spacing: 10px;

            }

            // 商品價格
            .price {

                // 商品價格的字
                span {
                    font-size: 25px;
                    letter-spacing: 3px;
                }

                .origin_price {
                    font-size: 15px;
                }
            }

            // 商品說明
            .description {
                font-size: 18px;
                letter-spacing: 10px;
                line-height: 35px;
                max-width: 500px;
            }

            // 加入購物車按紐
            .btn_cart {
                cursor: pointer;

                span {
                    border: 1px solid #fff;
                    padding: 10px 20px;
                    font-size: 20px;
                    letter-spacing: 5px;
                }

                &:hover span {
                    color: #ff5f54;
                    border: 1px solid #ff5f54;
                }

            }
        }
    }

    // 原料來源的字  商品介紹的字  商品規格的字
    .material_source,
    .product_indro,
    .spec_text {
        text-align: center;

        span {
            display: inline-block;
            padding: 10px 0 0 0;
            color: #fff;
            text-indent: 5px;
            font-size: 15px;
            letter-spacing: 5px;
            border-top: 1px solid #ff5f54;
        }
    }

    // 商品介紹
    .container_product_intro {
        border-top: 1px solid #583f6d;

        .row_product_intro {
            width: 100%;
            margin: auto;
            overflow: hidden;

            @at-root .col_product_intro {

                // 商品介紹外層
                @at-root .product_intro_block {
                    width: 80vw;
                    padding: 100px 0 50px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    // 商品介紹圖片
                    @at-root .product_intro_block_bg {
                        height: 80vh;
                        max-height: 420px;
                        background: url('../../../assets/photos/chef.jpg') center center/100% no-repeat;
                    }

                    // 商品介紹文字
                    @at-root .product_intro_block_text {
                        width: 60%;
                        margin: 50px auto 0;
                        text-indent: 52px;
                        text-align: justify;

                        span {
                            color: #fff;
                            font-size: 20px;
                            letter-spacing: 5px;
                            line-height: 30px;
                            font-weight: 100;
                        }
                    }
                }
            }
        }
    }

    // 商品原料說明   奶油
    .container_material_butter {
        border-top: 1px solid #583f6d;

        .row_material_butter {
            width: 100%;
            margin: auto;
            overflow: hidden;

            // 奶油
            @at-root .col_material_butter {

                // 奶油的容器
                @at-root .butter {
                    width: 80vw;
                    height: 720px;
                    padding: 100px 0 50px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    // 奶油大圖
                    @at-root .butter_lg_bg {
                        height: 80vh;
                        max-height: 420px;
                        background: url('../../../assets/photos/butter_big_img_new.jpg') center center/100% no-repeat;
                    }

                    // 奶油說明文字
                    @at-root .butter_text {
                        padding: 30px 0 0px 0;
                        width: 100%;

                        .butter_text_title {
                            display: block;
                            padding: 0 0 30px 0;
                            font-size: 30px;
                            font-weight: 100;
                            letter-spacing: 10px;
                            color: #fff;
                            text-align: center;
                        }

                        span:not(.butter_text_title) {
                            display: block;
                            font-size: 20px;
                            font-weight: 100;
                            letter-spacing: 5px;
                            color: #fff;
                            text-align: center;
                            padding: 5px;
                        }
                    }
                }
            }

        }
    }

    // 商品原料說明   牛奶
    .container_material_milk {
        border-top: 1px solid #583f6d;

        .row_material_milk {
            width: 100%;
            margin: auto;
            overflow: hidden;

            // 牛奶
            @at-root .col_material_milk {

                // 牛奶的容器
                @at-root .milk {
                    width: 80vw;
                    height: 720px;
                    padding: 100px 0 50px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    // 牛奶大圖
                    @at-root .milk_lg_bg {
                        height: 80vh;
                        max-height: 420px;
                        background: url('../../../assets/photos/milk_cow_new.jpg') center center/100% no-repeat;
                    }

                    // 牛奶說明文字
                    @at-root .milk_text {
                        padding: 30px 0 0px 0;
                        width: 100%;

                        .milk_text_title {
                            display: block;
                            padding: 0 0 30px 0;
                            font-size: 30px;
                            font-weight: 100;
                            letter-spacing: 10px;
                            color: #fff;
                            text-align: center;
                        }

                        span:not(.milk_text_title) {
                            display: block;
                            font-size: 20px;
                            font-weight: 100;
                            letter-spacing: 5px;
                            color: #fff;
                            text-align: center;
                            padding: 5px;
                        }
                    }
                }
            }
        }
    }

    // 商品規格
    .container_spec {
        border-top: 1px solid #583f6d;

        .row_spec {
            width: 50%;
            margin: auto;
            overflow: hidden;

            @at-root .col_spec {
                @at-root .spec_text {
                    margin: 0px 0 50px 0;
                }

                @at-root .spec_item {
                    padding: 20px;
                    margin: 5px;
                    background: #8591B7;


                    @at-root .spec_item_detail {
                        color: #fff;
                        font-size: 15px;
                        font-weight: 100;
                        letter-spacing: 5px;
                    }
                }

                li {
                    margin: 0 0 10px 20px;
                    line-height: 30px;
                }
            }

        }
    }
</style>