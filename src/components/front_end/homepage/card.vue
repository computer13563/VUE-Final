<template>
    <div>
        <section class="card_section">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <figure class="card">
                        <img src="../../../assets/photos/chocolate-glossy.png" alt="">
                        <div class="card_item_product_name">【Mont Blanc】</div>
                        <figcaption>
                            <h2>
                                【蒙布朗】
                            </h2>
                            <p>
                                撒上糖粉與一年四季覆蓋上白雪的白朗峰相似，故其作為這道經典甜點名字的由來。
                            </p>
                        </figcaption>
                        <div class="card_item_link">
                            <button @click.prevent="more">更多</button>
                        </div>
                    </figure>
                    <figure class="card">
                        <img src="../../../assets/photos/macaron2.jpg" alt="">
                        <div class="card_item_product_name">【Macaron】</div>
                        <figcaption>
                            <h2>
                                【馬卡龍】
                            </h2>
                            <p>
                                廣為人知的法式甜點之一，最初只是一種杏仁蛋白餅，後來才發展出中間加上果醬的形式。
                            </p>
                        </figcaption>
                        <div class="card_item_link">
                            <button @click.prevent="more">更多</button>
                        </div>
                    </figure>
                    <figure class="card">
                        <img src="../../../assets/photos/Souffle.jpg" alt="">
                        <div class="card_item_product_name">【Soufflé】</div>
                        <figcaption>
                            <h2>
                                【舒芙蕾】
                            </h2>
                            <p>
                                法國經典甜點之一，入口即化以及賞味期限短的特性，剛出爐是最佳的賞味時刻。
                            </p>
                        </figcaption>
                        <div class="card_item_link">
                            <button @click.prevent="more">更多</button>
                        </div>
                    </figure>
                    <figure class="card">
                        <img src="../../../assets/photos/chocolate-matte.png" alt="">
                        <div class="card_item_product_name">【Crème brûlée】</div>
                        <figcaption>
                            <h2>
                                【焦糖烤布蕾】
                            </h2>
                            <p>
                                一種簡約的法式甜點，以香草、鮮奶油、蛋黃與糖混合而成，但是需要細心與耐心去創造濃郁滑順的口感。
                            </p>
                        </figcaption>
                        <div class="card_item_link">
                            <button @click.prevent="more">更多</button>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        more(){
            this.$router.push('/index/allproduct');
            window.scroll(0,0);
        }
    }
}
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        list-style: none;
    }

    .container-fluid {
        max-width: 1200px;
        margin: 105px auto 205px;
    }

    .row {
        margin: auto;
    }

    .card {
        position: relative;
        width: 23%;
        overflow: hidden;
        background: #fffec2;
        margin: 0 auto;

        &:nth-child(2) {
            position: relative;
            top: 40px;
        }

        &:nth-child(3) {
            position: relative;
            top: 80px;
        }

        &:nth-child(4) {
            position: relative;
            top: 120px;
        }

        img {
            width: auto;
            height: 200px;
            vertical-align: top;
        }

        .card_item_product_name {
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px 25px 0;
            text-align: right;
            color: #620062;
            background-color: #fffec2;
        }

        .card_item_product_name::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            border-style: solid;
            border-width: 0px 300px 40px 0px;
            border-color: transparent #fffec2 transparent transparent;
        }

        figcaption {
            width: 100%;
            height: 100%;
            padding: 0 25px 25px;
            position: relative;
            text-align: left;
            color: #620062;

        }

        figcaption::before {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 0;
            border-style: solid;
            border-width: 40px 0px 0px 300px;
            border-color: transparent transparent transparent #fffec2;
        }

        h2 {
            margin: 0 0 10px;
        }

        p {
            margin: 0 0 10px;
        }

        .card_item_link {
            padding: 0 25px 25px;

        }

        button {
            background: #fffec2;
            margin: 10px 0;
            padding: 5px;
            border: #620062 solid 1px;
            width: 50%;
            text-align: center;
            color: #620062;
            font-size: 16px;
            letter-spacing: 5px;
        }


    }
</style>