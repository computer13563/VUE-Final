<template>
    <div>
        <NavbarSeventhStyle></NavbarSeventhStyle>
        <section class="container-fluid container_about">

            <div class="row row_img_title">
                <div class="col-12 col_title">
                    <p class="title_bg">
                        <span>
                            關於我們
                        </span>
                    </p>
                </div>

                <div class="row row_content_title">
                    <div class="col-12 col_content_title">
                        <span>
                            傳統與創新
                        </span>
                    </div>
                </div>

                <div class="row row_content_detail">
                    <div class="col-12 col_content_detail">
                        <p>
                            經濟法人應用眼裡符合這是，網路不停，收益新年，社會主義例如金幣組成，我來中有工廠東西交給我在教材觀念公主，永遠周圍我說屬性發表高興步驟你要考察，註明處理器對象可惜都是裡面緩緩說了，特性遵守不錯天下資產常見監管老人二人未經，收藏政策是從，所有人章節，減肥建。
                        </p>
                        <br>
                        <p>
                            經濟法人應用眼裡符合這是，網路不停，收益新年，社會主義例如金幣組成，我來中有工廠東西交給我在教材觀念公主，永遠周圍我說屬性發表高興步驟你要考察，註明處理器對象可惜都是裡面緩緩說了，特性遵守不錯天下資產常見監管老人二人未經，收藏政策是從，所有人章節，減肥建。
                        </p>
                    </div>
                </div>

                <div class="row row_link">
                    <div class="col-12 col_link">
                        <div class="link_btn link_contact" @click="to_contact">
                            <p class="arrow">
                                <svg>
                                    <polyline points="15,15 0,20 40,20 " />
                                </svg>
                            </p>
                            <p>
                                聯絡我們
                            </p>
                        </div>

                        <div class="link_btn link_location" @click="to_shop">
                            <p>
                                商店地點
                            </p>
                            <p class="arrow">
                                <svg>
                                    <polyline points="0,20 40,20 25,15" />
                                </svg>
                            </p>
                        </div>

                    </div>
                </div>

                <div class="row row_top">
                    <p class="top" @click="go_top">
                        <svg>
                            <polyline points="15,30 30,15 45,30 " />
                            <polyline points="15,40 30,25 45,40 " />
                        </svg>
                    </p>
                </div>

                <div class="row row_footer">
                    <section class="footer_section">

                        <router-link to="/" class="logo" @click.native="go_top">
                            <i class="fas fa-feather-alt "></i>
                            <span> Dessert</span>
                        </router-link>

                        <div class='tel_time_add'>
                            <p>
                                <span>客戶服務專線</span>
                                <span>01-23456789</span>
                            </p>

                            <p>
                                <span>公司地址</span>
                                <span>臺灣 100 台北市中正區北平西路3號</span>
                            </p>

                            <p>
                                <span>服務時間</span>
                                <ul>
                                    <li>週一~五 8:00~19:00</li>
                                    <li>週六~日、例假日 9:00~18:00</li>
                                    <li>365天全年無休</li>
                                </ul>
                                <!-- <span>，週六~日、例假日 9:00~18:00，365天全年無休</span> -->
                            </p>
                        </div>
                    </section>

                    <p class="copyright">
                        Copyright &copy; 2020 虛擬甜點
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import NavbarSeventhStyle from '@/components/front_end/navbar/navbar_seventh_style.vue'

    export default {
        components: {
            NavbarSeventhStyle
        },
        data() {
            return {}
        },

        methods: {
            to_contact() {
                this.$router.push('/contact');
                window.scroll(0, 0);
            },
            to_shop() {
                this.$router.push('/shop');
                window.scroll(0, 0);
            },
            go_top(){
                window.scroll(0,0);
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

    .container_about {
        .row_img_title {
            width: 100%;
            max-width: 1400px;

            @at-root .col_title {
                width: 100%;
                height: calc(100vh);
                align-items: center;

                @at-root .title_bg {
                    height: 100%;
                    background: url('../../../assets/photos/about_us.jpg') center top -100px/100% 100% no-repeat;
                    display: flex;
                }

                span {
                    display: block;
                    width: 80%;
                    margin: auto;
                    color: #fff;
                    font-size: 40px;
                    letter-spacing: 10px;
                }
            }
        }

        .row_content_title {
            width: 100%;
            max-width: 1400px;
            margin-bottom: 100px;

            @at-root .col_content_title {
                width: 80%;
                margin: auto;
            }

            span {
                display: block;
                text-align: center;
                font-size: 50px;
                letter-spacing: 15px;
            }
        }

        .row_content_detail {
            width: 100%;
            max-width: 1400px;
            margin-bottom: 100px;

            @at-root .col_content_detail {}

            p {
                width: 60%;
                margin: auto;
                font-size: 20px;
                letter-spacing: 10px;
                font-weight: 300;
            }
        }

        .row_link {
            width: 100%;
            max-width: 1400px;
            margin: 0 0 30px 0;

            @at-root .col_link {
                width: 60%;
                padding: 20px 0;
                border-top: 1px #000 solid;
                border-bottom: 1px #000 solid;
                margin: auto;
                display: flex;
                justify-content: space-between;

                @at-root .link_btn {
                    background: #eee;
                    padding: 10px 20px;
                    font-size: 25px;
                    letter-spacing: 3px;
                    font-weight: 300;
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;
                    transition: .3s;

                    &:hover {
                        background: #000;
                        color: #fff;
                    }

                    &:hover .arrow {
                        border: none;
                    }

                    &:hover polyline {
                        stroke: #fff;
                    }

                    // 箭頭
                    @at-root .arrow {
                        width: 40px;
                        height: 40px;
                        border: 1px solid #000;
                        border-radius: 50%;


                        // SVG畫箭頭
                        svg {
                            height: 40px;
                            width: 40px;

                            polyline {
                                fill: none;
                                stroke: black;
                                stroke-width: 1
                            }
                        }
                    }
                }

                @at-root .link_contact {
                    &:hover svg {
                        position: absolute;
                        transform: translateX(-10px);
                    }

                    // 箭頭
                    .arrow {
                        position: relative;
                        margin: 0 30px 0 0;

                        // SVG畫箭頭
                        svg {
                            position: absolute;
                            top: 0;
                            left: 10px;
                        }
                    }
                }

                @at-root .link_location {
                    &:hover svg {
                        transform: translateX(10px);
                    }

                    // 箭頭
                    .arrow {
                        position: relative;
                        margin: 0 0 0 30px;

                        // SVG畫箭頭
                        svg {
                            position: absolute;
                            top: 0;
                            right: 10px;
                        }
                    }
                }


            }
        }

        .row_top {
            .top {
                cursor: pointer;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin:0 auto 20px;
                transition: .3s;

                //向上箭頭 
                svg {
                    height: 60px;
                    width: 60px;

                    polyline {
                        transition: .3s;
                        fill: none;
                        stroke: black;
                        stroke-width: 1
                    }
                }

                &:hover {
                    background: #000;

                    polyline:nth-child(2) {
                        stroke: #fff;
                        transform: translate(0, -8px);
                    }
                }
            }
        }

        .row_footer {
            border-top: 1px solid #000;

            @at-root .footer_section {
                display: flex;
                justify-content: space-evenly;
                margin: 20px 0;
            }

            a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                color:#000;

                i {
                    font-size: 50px;
                }

                span {
                    font-size: 25px;
                }
            }

            @at-root .tel_time_add {
                p {
                    display: flex;
                    letter-spacing: 5px;
                    font-weight: 300;
                    font-size: 16px;
                }

                span {
                    margin:0 0 10px 10px;
                }

                span:nth-child(1) {
                    width: 130px;
                }
                span:nth-child(2){
                    border-left:1px solid #000;
                    padding-left: 10px;
                }

                ul {
                    padding-left: 10px;
                    border-left:1px solid #000;
                    margin:0 0 0 10px;
                }
            }

            @at-root .copyright {
                background: #222;
                color: #fff;
                text-align: center;
                padding: 5px 0;
            }
        }
    }
</style>