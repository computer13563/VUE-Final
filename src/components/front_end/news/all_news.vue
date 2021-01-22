<template>
    <div class="clearfix">
        <!-- <NavbarSixthStyle></NavbarSixthStyle> -->

        <section class="container-fluid container_layer">

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
                </div>

            </div>

            <div class="row row_footer">
                <div class="col-12 col-md-6 col_footer_logo">
                    <section>
                        <router-link to="/" class="logo" @click.native="go_top">
                            <i class="fas fa-feather-alt "></i>
                            <span> Dessert</span>
                        </router-link>

                        <p class="footer_info">
                            <span>01-23456789</span>
                            <span>臺灣 100 台北市中正區北平西路3號</span>
                            <span> 週一~五 8:00~19:00 </span>
                            <span> 週六~日、例假日 9:00~18:00 </span>
                        </p>
                    </section>
                </div>

                <div class="col-12 col-md-6 col_footer_link">
                    <p class="footer_svg_block">

                        <svg class='footer_svg'>
                        </svg>
                    </p>

                    <div class="footer_item">
                        <h4>最新消息</h4>
                        <nav class="footer_item_nav">
                            <p class="footer_item_link">
                                <router-link :to="{name:'News'}" @click.native="go_top">最新消息</router-link>
                            </p>
                        </nav>
                    </div>

                    <div class="footer_item">
                        <h4>所有商品</h4>
                        <nav class="footer_item_nav">
                            <p class="footer_item_link">
                                <router-link :to="{name:'AllProduct'}" @click.native="go_top">
                                    所有商品
                                </router-link>
                                <router-link :to="{name:'AllProduct'}" @click.native="go_top">
                                    焦糖烤布蕾
                                </router-link>
                                <router-link :to="{name:'AllProduct'}" @click.native="go_top">
                                    舒芙蕾
                                </router-link>
                                <router-link :to="{name:'AllProduct'}" @click.native="go_top">
                                    蒙布朗
                                </router-link>
                                <router-link :to="{name:'AllProduct'}" @click.native="go_top">
                                    馬卡龍
                                </router-link>
                            </p>
                        </nav>
                    </div>

                    <div class="footer_item">
                        <h4>關於我們</h4>
                        <nav class="footer_item_nav">
                            <p class="footer_item_link">
                                <router-link :to="{name:'AboutUs'}" @click.native="go_top"> 品牌故事</router-link>
                                <router-link :to="{name:'Contact' }" @click.native="go_top"> 聯絡我們</router-link>
                                <router-link :to="{name:'Shop'}" @click.native="go_top"> 門市地點</router-link>
                            </p>
                        </nav>
                    </div>

                    <div class="footer_item">
                        <h4>更多幫助</h4>
                        <nav class="footer_item_nav">
                            <p class="footer_item_link">
                                <router-link :to="{name:'ShoppingProcessPage'}" @click.native="go_top"> 購物流程
                                </router-link>
                            </p>
                        </nav>
                    </div>

                    <div class="footer_item">
                        <h4>關注我們</h4>
                        <nav class="footer_item_nav">
                            <p class="footer_item_social ">
                                <a :href="item.link" class="" v-for="(item,index) in social_media" :key="index"><i
                                        :class="item.icon" class="footer_item_social_icon"></i></a>
                            </p>
                        </nav>
                    </div>


                </div>

            </div>

        </section>

        <div class="container-fluid container_copyright">

            <div class="row row_copyright">
                <div class="col-12 copyright">
                    Copyright &copy; 2020 虛擬甜點
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import NavbarSixthStyle from '@/components/front_end/navbar/navbar_sixth_style.vue'

    export default {
        name: 'AllNews',
        components: {
            NavbarSixthStyle
        },
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
                ],
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
            },
        },
        created() {
            
            this.$nextTick(()=>{
                const col_footer_link_h4 = document.querySelectorAll('.col_footer_link h4');

                col_footer_link_h4.forEach((item, index, arr) => {
                    item.addEventListener('mouseover', (e) => {
                        return choose(e.target.innerText, item, arr);
                    })
                })

            });

            function create_svg(tag, attr) {
                let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (let k in attr)
                    el.setAttribute(k, attr[k]);
                return el;
            }

            function choose(innerText, hover_item, h4_arr) {
                const footer_svg = document.querySelector('.footer_svg');
                const footer_item_nav = document.querySelectorAll('.footer_item_nav');
                const footer_item = document.querySelectorAll('.footer_item');
                const footer_item_height = footer_item[0].offsetHeight;
                const num = [1, 3, 5, 7, 9];

                while (footer_svg.firstChild) {
                    footer_svg.removeChild(footer_svg.firstChild);
                }
                footer_item_nav.forEach(item => {
                    item.setAttribute('style', 'display:none;');
                })
                h4_arr.forEach(item => {
                    item.setAttribute('style', 'color:#000;');
                })

                switch (innerText) {
                    case "最新消息":

                        const svgobj1 = [{
                                points: `0,${footer_item_height*num[0]/2} 100,${footer_item_height*num[0]/2} 
                        100,${footer_item_height*num[0]/2} 150,${footer_item_height*num[0]/2}
                        150,${footer_item_height*num[0]/2} 250,${footer_item_height*num[0]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: `
                        100,${footer_item_height*num[0]/2} 150,${footer_item_height*num[1]/2}
                        150,${footer_item_height*num[1]/2} 250,${footer_item_height*num[1]/2}`,
                                fill: "none",
                                stroke: "#999",
                            }
                        ];

                        let polyline1 = get_polyline('polyline', svgobj1);

                        footer_svg.setAttribute('style', 'display:block;');
                        footer_item_nav[0].setAttribute('style', 'display:block;');
                        hover_item.setAttribute('style', 'color:#999');

                        return polyline1.forEach(item => {
                            return footer_svg.appendChild(item);
                        })
                        break;

                    case "所有商品":
                        const svgobj2 = [{
                                points: `0,${footer_item_height*num[1]/2} 100,${footer_item_height*num[1]/2}

                        100,${footer_item_height*num[1]/2} 150,${footer_item_height*num[0]/2}
                        150,${footer_item_height*num[0]/2} 250,${footer_item_height*num[0]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: `100,${footer_item_height*num[1]/2} 150,${footer_item_height*num[1]/2}
                        150,${footer_item_height*num[1]/2} 250,${footer_item_height*num[1]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: `   100,${footer_item_height*num[1]/2} 150,${footer_item_height*num[2]/2}
                        150,${footer_item_height*num[2]/2} 250,${footer_item_height*num[2]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: ` 100,${footer_item_height*num[1]/2} 150,${footer_item_height*num[3]/2}
                        150,${footer_item_height*num[3]/2} 250,${footer_item_height*num[3]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: ` 100,${footer_item_height*num[1]/2} 150,${footer_item_height*num[4]/2}
                        150,${footer_item_height*num[4]/2} 250,${footer_item_height*num[4]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                        ];

                        let polyline2 = get_polyline('polyline', svgobj2);

                        footer_svg.setAttribute('style', 'display:block;');
                        footer_item_nav[1].setAttribute('style', 'display:block;');
                        hover_item.setAttribute('style', 'color:#999');

                        polyline2.forEach(item => {
                            return footer_svg.appendChild(item);
                        });
                        break;

                    case "關於我們":
                        const svgobj3 = [{
                                points: `0,${footer_item_height*num[2]/2} 100,${footer_item_height*num[2]/2}

                        100,${footer_item_height*num[2]/2} 150,${footer_item_height*num[0]/2}
                        150,${footer_item_height*num[0]/2} 250,${footer_item_height*num[0]/2} `,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: `100,${footer_item_height*num[2]/2} 150,${footer_item_height*num[1]/2}
                        150,${footer_item_height*num[1]/2} 250,${footer_item_height*num[1]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                            {
                                points: `100,${footer_item_height*num[2]/2} 150,${footer_item_height*num[2]/2}
                        150,${footer_item_height*num[2]/2} 250,${footer_item_height*num[2]/2}`,
                                fill: "none",
                                stroke: "#999",
                            },
                        ];

                        let polyline3 = get_polyline('polyline', svgobj3);

                        footer_svg.setAttribute('style', 'display:block;');
                        footer_item_nav[2].setAttribute('style', 'display:block;');
                        hover_item.setAttribute('style', 'color:#999');

                        polyline3.forEach(item => {
                            return footer_svg.appendChild(item);
                        });
                        break;

                    case "更多幫助":
                        const svgobj4 = [{
                            points: `0,${footer_item_height*num[3]/2} 100,${footer_item_height*num[3]/2} 
                        100,${footer_item_height*num[3]/2} 150,${footer_item_height*num[0]/2}
                        150,${footer_item_height*num[0]/2} 250,${footer_item_height*num[0]/2}`,
                            fill: "none",
                            stroke: "#999",
                        }, ];

                        let polyline4 = get_polyline('polyline', svgobj4);

                        footer_svg.setAttribute('style', 'display:block;');
                        footer_item_nav[3].setAttribute('style', 'display:block;');
                        hover_item.setAttribute('style', 'color:#999');

                        polyline4.forEach(item => {
                            return footer_svg.appendChild(item);
                        });

                        break;

                    case "關注我們":
                        const svgobj5 = [{
                            points: `0,${footer_item_height*num[4]/2} 100,${footer_item_height*num[4]/2} 
                        100,${footer_item_height*num[4]/2} 150,${footer_item_height*num[2]/2}
                        150,${footer_item_height*num[2]/2} 250,${footer_item_height*num[2]/2}`,
                            fill: "none",
                            stroke: "#999",
                        }, ];

                        let polyline5 = get_polyline('polyline', svgobj5);

                        footer_svg.setAttribute('style', 'display:block;');
                        footer_item_nav[4].setAttribute('style', 'display:block;');
                        hover_item.setAttribute('style', 'color:#999');

                        polyline5.forEach(item => {
                            return footer_svg.appendChild(item);
                        });

                        break;

                    default:
                        break;
                }
            }

            function get_polyline(tag, attr) {
                const svgarr = [];
                console.dir(attr);
                attr.forEach(item => {
                    svgarr.push(create_svg(tag, item));
                })
                return svgarr
            }
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

    .clearfix {
        overflow: auto;
    }

    // back #f2f5f7; color:#313131;  hov date a8a8a8  bac 333  color #eceeef;
    .container_layer {
        width: 100vw;
        margin: 200px 0 0 0;
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

    // 頁尾
    .row_footer {
        border-top: 1px solid #000;
        padding: 20px;
        margin: 0 auto;

        @at-root .col_footer {
            @at-root .col_footer_logo {
                margin: 0 0 20px 0;

                a {
                    color: #000;
                    font-size: 50px;
                }

                @at-root .footer_info {
                    margin: 20px 0 0 0;

                    span {
                        display: block;
                        padding: 0 0 10px 0;
                        font-size: 15px;
                        letter-spacing: 5px;
                        font-weight: 300;
                    }
                }

                @at-root .logo {

                    i {
                        display: inline-block;
                    }

                    span {
                        display: inline;
                        font-size: 40px;
                    }
                }
            }

            @at-root .col_footer_link {
                position: relative;

                @at-root .footer_svg_block {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                }

                @at-root .footer_svg {
                    width: 50%;
                    height: 100%;
                    stroke-width: 1;
                    position: absolute;
                    left: 120px;
                }

                @at-root .footer_item {

                    h4 {
                        display: inline-block;
                        padding: 10px 0;
                        font-size: 20px;
                        letter-spacing: 5px;
                        font-weight: 300;

                        &:hover {
                            // color:#999;
                        }
                    }

                    a {
                        height: 100%;
                        padding: 7px 0;
                        font-size: 20px;
                        letter-spacing: 5px;
                        font-weight: 300;
                        color: #000;

                        &:hover {
                            color: #999;
                        }
                    }

                    @at-root .footer_item_nav {
                        display: none;

                        @at-root .footer_item_link {
                            display: flex;
                            flex-direction: column;

                            position: absolute;
                            right: 50px;
                            top: 0;
                        }

                        @at-root .footer_item_social {
                            width: 35%;
                            padding: 25px 0 0 0;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            position: absolute;
                            top: 0;
                            right: 0;

                            @at-root .footer_item_social_icon {
                                font-size: 40px;
                                padding: 0 10px;
                            }
                        }
                    }


                }
            }

        }
    }

    .container_copyright {
        background: #222;

        @at-root .row_copyright {
            margin: auto;

            @at-root .copyright {
                color: #fff;
                text-align: center;
                padding: 5px 0;
            }
        }
    }
</style>