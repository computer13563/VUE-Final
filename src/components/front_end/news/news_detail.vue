<template>
    <div>
        <section class="container-fluid news_container">
            <div class="row" v-for="item in filter_news" :key="item.id">
                <div class="col-12 news_title">
                    <div>
                        <p class="date">{{item.date}}</p>
                        <p class="title">{{item.title}}</p>
                    </div>
                </div>

                <div class="col-12 news_content">
                    <p>
                        {{item.content}}
                    </p>
                    <br>
                    <p>
                        {{item.content}}
                    </p>
                    <br>
                    <p>
                        {{item.content}}
                    </p>
                </div>
            </div>

            <div class="row back_btn_row">
                <div class="back_btn_col" @click="back_list">
                    <p class="back_btn">返回消息列表</p>
                    <p class="arrow">
                        <svg>
                            <polyline points="10,10 0,20 40,20 " />
                        </svg>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                news: [{
                        id: '2021130',
                        date: '2021.1.30',
                        title: '今天的開店時間',
                        content: '面積供求真是法律來到情感中有說了可見引用權力充分，一身給予臺灣民眾下了事項雙手，連接執行環境跟我有限責任，彷彿垃圾下來最好聲音接着讓你健康你沒有明顯，城市並非氣氛垃圾考試準確有關部門對方點擊數開心情節夢幻，缺乏自身國人各個常見，高中觀念目的，女生只是，屏。',
                    },
                    {
                        id: '20201230',
                        date: '2020.12.30',
                        title: '重金禮聘法國主廚',
                        content: '面積供求真是法律來到情感中有說了可見引用權力充分，一身給予臺灣民眾下了事項雙手，連接執行環境跟我有限責任，彷彿垃圾下來最好聲音接着讓你健康你沒有明顯，城市並非氣氛垃圾考試準確有關部門對方點擊數開心情節夢幻，缺乏自身國人各個常見，高中觀念目的，女生只是，屏。'
                    },
                    {
                        id: '20201220',
                        date: '2020.12.20',
                        title: '開幕第一天',
                        content: '面積供求真是法律來到情感中有說了可見引用權力充分，一身給予臺灣民眾下了事項雙手，連接執行環境跟我有限責任，彷彿垃圾下來最好聲音接着讓你健康你沒有明顯，城市並非氣氛垃圾考試準確有關部門對方點擊數開心情節夢幻，缺乏自身國人各個常見，高中觀念目的，女生只是，屏。'
                    },
                ],
                news_id: ''
            }
        },
        methods: {
            back_list() {
                this.$router.push('/news');
                window.scroll(0, 0);
            }
        },
        computed: {
            filter_news() {
                const vm = this;
                return vm.news.filter(item => {
                    return item.id.match(vm.news_id);
                })
            }
        },
        created() {
            this.news_id = this.$route.params.news_id;
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

    .row {
        width: 100%;

        // 灰色背景設定
        @at-root .news_title {
            width: 100%;
            height: 30vh;
            background: #e4e4e4;

            // 把日期標題往內放
            div {
                width: 60%;
                margin: auto;
                max-width: 1200px;
            }

            @at-root .date {
                color: #565656;
                font-weight: 100;
                letter-spacing: 3px;
                padding: 30px 0 0 0px;
            }

            @at-root .title {
                font-size: 30px;
                letter-spacing: 5px;
                padding: 0px 0 0 40px;
                margin: 20px 0 0 0;
                border-left: 2px solid #000;
            }
        }

        // 消息內容
        @at-root .news_content {
            width: 60%;
            margin: 100px auto;
            font-size: 20px;
            letter-spacing: 4px;
            line-height: 40px;
            color:#565656;
        }
    }

    .back_btn_col {
        width: 60%;
        padding: 30px 0;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        margin: 0 auto 100px;
        position: relative;

        @at-root .back_btn {
            display: inline-block;
            padding: 20px 20px 20px 90px;
            background: #eee;
            font-size: 20px;
            font-weight: 300;
            letter-spacing: 5px;
            transition: .3s;
            cursor: pointer;

            &:hover {
                background: #000;
                color: #fff;
            }

            &:hover~.arrow {
                border: none;

                polyline {
                    stroke: #fff;
                }
            }
        }

        // 箭頭
        @at-root .arrow {
            width: 40px;
            height: 40px;
            border: 1px solid #000;
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 20px;
            margin: auto;

            // SVG畫箭頭
            svg {
                height: 40px;
                width: 40px;
                position: absolute;
                right: -15px;
                top: 0;

                polyline {
                    fill: none;
                    stroke: black;
                    stroke-width: 1
                }
            }
        }
    }
</style>