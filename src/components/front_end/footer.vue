<template>
    <div>
        <div class="container-fluid">
            <!-- row-cols-*有待理解 3顯示2 5顯示4 ????? -->
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                <div class="footer_item">
                    <h4>最新消息</h4>
                    <nav>
                        <a href=""><i class="fas fa-chevron-right"></i> 最新消息</a>
                    </nav>
                </div>
                <div class="footer_item">
                    <h4>所有商品</h4>
                    <nav>
                        <router-link :to="{name:'Allproduct'}" @click.native="go_top">
                            <i class="fas fa-chevron-right"></i>
                            所有商品
                        </router-link>
                        <router-link :to="{name:'Allproduct'}" @click.native="go_top">
                            <i class="fas fa-chevron-right"></i>
                            焦糖烤布蕾
                        </router-link>
                        <router-link :to="{name:'Allproduct'}" @click.native="go_top">
                            <i class="fas fa-chevron-right"></i>
                            舒芙蕾
                        </router-link>
                        <router-link :to="{name:'Allproduct'}" @click.native="go_top">
                            <i class="fas fa-chevron-right"></i>
                            蒙布朗
                        </router-link>
                        <router-link :to="{name:'Allproduct'}" @click.native="go_top">
                            <i class="fas fa-chevron-right"></i>
                            馬卡龍
                        </router-link>
                    </nav>
                </div>
                <div class="footer_item">
                    <h4>關於我們</h4>
                    <nav>
                        <router-link :to="{name:''}" @click.native="go_top"><i class="fas fa-chevron-right"></i> 品牌故事</router-link>
                        <router-link :to="{name:'Contact' }"  @click.native="go_top"><i class="fas fa-chevron-right"></i> 聯絡我們</router-link>
                        <router-link :to="{name:''}" @click.native="go_top"><i class="fas fa-chevron-right"></i> 門市地點</router-link>
                    </nav>
                </div>
                <div class="footer_item">
                    <h4>更多幫助</h4>
                    <nav>
                        <a href=""><i class="fas fa-chevron-right"></i> 訂購流程</a>
                    </nav>
                </div>
                <div class="footer_item">
                    <h4>關注我們</h4>
                    <nav>
                        <div v-for="(item,index) in social_media" :key="index">
                            <a :href="item.link"><i :class="item.icon"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="copyright">
                Copyright &copy; 2020 虛擬甜點
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                social_media: [{
                        link: 'https://www.instagram.com/',
                        icon: 'fab fa-instagram'
                    },
                    {
                        link: 'https://www.twitch.tv/',
                        icon: 'fab fa-twitch',

                    },
                    {
                        icon: 'fab fa-twitter',
                        link: 'https://twitter.com/?lang=zh-tw',
                    },
                    {
                        icon: 'fab fa-vimeo-v',
                        link: 'https://vimeo.com/',
                    },
                    {
                        icon: 'fab fa-facebook',
                        link: 'https://www.facebook.com/',
                    },
                    {
                        icon: 'fab fa-youtube-square',
                        link: 'https://www.youtube.com/?gl=TW&hl=zh-TW',
                    },
                    {
                        icon: 'fab fa-line',
                        link: 'https://line.me/zh-hant/',
                    }
                ]
            }
        },
        methods: {
            go_top() {
                window.scroll(0, 0);
            }
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

    .container-fluid {
        padding: 50px 0 0;
        background: #fff;
        position: relative;

        .row {
            width: 100%;

            &::before {
                content: '';
                width: 100%;
                height: 1px;
                position: absolute;
                left: 0;
                top: 0;
                background: #620062;
            }
        }

        .copyright {
            background: #222;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            margin: 50px 0 0;
        }
    }

    .footer_item {
        flex-grow: 1;
        margin: 0 20px;
        padding: 0 30px;

        h4 {
            font-size: 24px;
            color: #620062;
            letter-spacing: .2em;
            border-bottom: 1px solid #620062;
            padding-bottom: .5em;
            margin-bottom: .5em;
        }

        nav {
            a {
                display: block;
                letter-spacing: .3em;
                padding: 5px 0;
                // 被element style寫死黑色 只能去找到哪個JS檔案寫死或important
                color: #620062 !important;
            }

            i {
                font-size: .3em;
                opacity: .5;
            }
        }
    }

    .footer_item:nth-last-child(1) {
        nav {
            display: flex;
            flex-wrap: wrap;
        }

        a {
            width: 3em;
            height: 3em;
        }

        i {
            font-size: 2em;
            opacity: 1;
        }
    }

    @media screen and (max-width: 991px) {
        .container-fluid {
            padding: 20px 0 0 0;
            position: relative;
            overflow: hidden;

            .row {
                &::before {
                    content: '';
                    width: 100%;
                    height: 1px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: linear-gradient(90deg, #045388, #2BA5CD);
                }
            }

            .footer_item {
                padding: 0;
                margin: 10px 10px;

                h4 {
                    font-size: 24px;
                    color: #620062;
                    letter-spacing: .2em;
                    border-bottom: 1px solid #620062;
                    padding-bottom: .5em;
                    margin-bottom: .5em;
                }

                nav {
                    a {
                        display: block;
                        letter-spacing: .3em;
                        padding: 5px 0;
                        // 被element style寫死黑色 只能去找到哪個JS檔案寫死或important
                        color: #620062 !important;
                    }

                    i {
                        font-size: .3em;
                        opacity: .5;
                    }
                }
            }
        }
    }
</style>