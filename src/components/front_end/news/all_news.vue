<template>
    <div>
        <section class="container-fluid">
            <div class="row row_layer">
                <div class="col-12 col_layer">

                    <span class="layer_text">
                        全部消息
                    </span>

                    <!-- 有字的圖層 -->
                    <p class="layer_with_text">
                    </p>

                    <!-- 當背景的圖層 -->
                    <p class="layer_no_text">

                    </p>
                </div>
            </div>
            <div class="row row_news_list">

                <div class="col-12 col_news_list" v-for="(item) in news" :key="item.id">
                    <!-- <a href="" class="news_link"> -->
                    <router-link class="news_link" :to="{name: 'NewsDetail' ,params: { news_id: item.id } }">

                        <p class="news_date">{{item.date}}</p>

                        <div class="news_detail">
                            <p class="news_title">{{item.title}}</p>
                            <p class="arrow">
                                <svg>
                                    <polyline points="0,30 60,30 40,20" />
                                </svg>
                            </p>
                        </div>
                    </router-link>
                    <!-- </a> -->
                </div>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'AllNews',
        data() {
            return {
                news: [{
                        id: '2021130',
                        date: '2021.1.30',
                        title: '今天的開店時間'
                    },
                    {
                        id: '20201230',
                        date: '2020.12.30',
                        title: '重金禮聘法國主廚'
                    },
                    {
                        id: '20201220',
                        date: '2020.12.20',
                        title: '開幕第一天'
                    },
                ]
            }
        },

    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    // back #f2f5f7; color:#313131;  hov date a8a8a8  bac 333  color #eceeef;
    .container-fluid {
        width: 100vw;
        overflow: hidden;
    }

    .row {
        width: 100%;
        max-width: 1200px;
        margin: 0px auto 100px;
    }

    // 有標題的圖層
    .row_layer {

        .col_layer {
            position: relative;
        }

        .layer_text {
            text-align: center;
            line-height: 150px;
            font-size: 40px;
            letter-spacing: 10px;
            color: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }

        p {
            width: 80%;
            height: 150px;
        }

        .layer_with_text {
            background: #565656;
        }

        .layer_no_text {
            background: #f2f5f7;
            position: absolute;
            right: 0;
            top: 50px;
            z-index: -1;
        }
    }

    // 新聞列表
    .row_news_list {
        border-top: 1px solid #e4e4e4;

        @at-root .col_news_list {
            padding: 20px 10px;
            background: #fff;
            border-bottom: 1px solid #e4e4e4;
            transition: .3s;

            &:hover {
                background: #333;
            }

            &:hover .news_date {
                border-right: 1px solid #fff;
            }

            &:hover .news_title {
                color: #fff;
            }

            &:hover .arrow {
                border: 1px solid #333;
            }

            &:hover polyline {
                stroke: #fff;
            }

            // 用連結包住整個日期跟標題
            @at-root .news_link {
                display: flex;

                // 消息日期
                @at-root .news_date {
                    width: 120px;
                    height: 100px;
                    padding: 20px;
                    border-right: 1px solid #000;
                    font-size: 16px;
                    color: #a8a8a8;
                    line-height: 60px;
                    transition: .5s;
                }

                // 消息標題跟箭頭的父容器
                @at-root .news_detail {
                    width: calc(100% - 120px);
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    // 消息標題
                    @at-root .news_title {
                        font-size: 20px;
                        letter-spacing: 5px;
                        color: #313131;
                        transition: .3s;
                    }

                    // 箭頭
                    @at-root .arrow {
                        width: 60px;
                        height: 60px;
                        border: 1px solid #000;
                        border-radius: 50%;
                        position: relative;

                        // SVG畫箭頭
                        svg {
                            height: 60px;
                            width: 60px;
                            position: absolute;
                            left: -15px;

                            polyline {
                                fill: none;
                                stroke: black;
                                stroke-width: 1
                            }
                        }
                    }
                }
            }
        }

    }
</style>