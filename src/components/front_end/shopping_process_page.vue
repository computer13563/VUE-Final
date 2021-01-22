<template>
    <div>
        <NavbarFifthStyle></NavbarFifthStyle>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col_process">
                    <p>
                        <span>購物流程</span>
                    </p>
                </div>
            </div>

            <div class="row row_step">

                <div class="col-12 col-md-6 col-lg-2 col_step">

                    <span>
                        STEP 1
                    </span>

                    <p class="icon">
                        <i class="fas fa-shopping-cart"></i>
                    </p>

                    <span>
                        加入購物車
                    </span>

                    <p class="arrow">
                        <svg>
                            <polyline points="0,0 20,10 0,20 10,10 0,0" />
                        </svg>
                    </p>

                </div>

                <div class="col-12 col-md-6 col-lg-2 col_step">
                    <span>
                        STEP 2
                    </span>

                    <p class="icon">
                        <i class="far fa-list-alt"></i>
                    </p>

                    <span>
                        訂單結帳
                    </span>

                    <p class="arrow">
                        <svg>
                            <polyline points="0,0 20,10 0,20 10,10 0,0" />
                        </svg>
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-2 col_step">
                    <span>
                        STEP 3
                    </span>

                    <p class="icon">
                        <i class="fas fa-user"></i>
                    </p>

                    <span>
                        登入會員
                    </span>

                    <p class="arrow">
                        <svg>
                            <polyline points="0,0 20,10 0,20 10,10 0,0" />
                        </svg>
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-2 col_step">
                    <span>
                        STEP 4
                    </span>

                    <p class="icon">
                        <i class="fas fa-credit-card"></i>
                    </p>

                    <span>
                        填寫收件人資料
                    </span>

                    <p class="arrow">
                        <svg>
                            <polyline points="0,0 20,10 0,20 10,10 0,0" />
                        </svg>
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-2 col_step">
                    <span>
                        STEP 5
                    </span>

                    <p class="icon">
                        <i class="fas fa-check"></i>
                    </p>

                    <span>
                        訂單完成
                    </span>

                    <p class="arrow">
                        <svg>
                            <polyline points="0,0 20,10 0,20 10,10 0,0" />
                        </svg>
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-2 col_step">
                    <span>
                        STEP 6
                    </span>

                    <p class="icon">
                        <i class="fas fa-truck"></i>
                    </p>

                    <span>
                        商品配送
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col_notice_title">
                    <span>注意事項</span>
                </div>

                <div class="col-12 col_notice">
                    <span>任選促銷活動商品、或全館滿額加購品/ 贈品，商品優惠價將以各單品之優惠折扣價四捨五入後之金額加總計算，同筆訂單所有商品將同時出貨，恕不分開出貨，亦不接受單獨取消或退貨。</span>
                    <br>
                    <span>除了由廠商出貨的商品訂單外，其他個人資料絕不公開，或改作其他商業用途。</span>
                </div>
            </div>

            <div class="row row_return_refund">
                <div class="col-12 col_return_refund_title">
                    <span>退換貨政策</span>
                </div>

                <div class="col-12 col_return_refund">

                    <ol>
                        <li>依照消費者保護法規定，消費者均享有商品到貨七天鑑賞期之權益（非試用期），但本網站唯有新品瑕疵及寄錯商品可享免費退貨服務；退回商品必須是全新狀態且包裝完整，否則將影響您的退貨權益。
                        </li>
                        <br>

                        <li>
                            <span>
                                換貨 :
                            </span>
                            <br>
                            <span>
                                依照消費者保護法規定，消費者均享有商品到貨七天鑑賞期之權益（非試用期）

                                請於「訂單」內留言告知欲做換貨的狀況。

                                提醒您，申請換貨時，請務必將您所訂購之完整商品、配件、贈品及包裝盒置入原外包裝內。
                            </span>
                        </li>
                        <br>

                        <li>
                            <span>
                                退貨 :
                            </span>
                            <br>
                            <span>
                                依照消費者保護法規定，消費者均享有商品到貨七天鑑賞期之權益（非試用期）

                                請於「訂單」內留言告知欲做退貨的狀況。

                                提醒您，申請退貨時，請務必將您所訂購之完整商品、配件、贈品及包裝盒置入原外包裝內，等待我們與您做聯繫退貨事宜。
                            </span>
                        </li>
                    </ol>

                </div>
            </div>

            <div class="row row_footer">
                <div class="col-12 col_footer">
                    <p>
                        <span>客戶服務專線：01-23456789服務時間：週一~五 8:00~19:00，週六~日、例假日 9:00~18:00，365天全年無休</span>
                        <br>
                        <span>公司地址：臺灣 100 台北市中正區北平西路3號</span>
                    </p>
                </div>
            </div>

            <p class="copyright">
                Copyright &copy; 2020 虛擬甜點
            </p>

        </div>
    </div>
</template>

<script>
    import NavbarFifthStyle from '@/components/front_end/navbar/navbar_fifth_style.vue'

    export default {

        components: {
            NavbarFifthStyle
        },

        data() {
            return {}
        },

    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        // list-style: none;
    }

    .container-fluid {
        overflow: hidden;
        color: #565656;
    }

    // 每個區塊的共同樣式
    .row {
        width: 80%;
        max-width: 1400px;
        margin: auto;
        padding: 30px 0;
        // border-bottom: 1px solid #ff4500;
    }

    // 購物流程的字樣式
    .col_process {
        p {
            color: #191970;
            font-size: 50px;
            text-align: center;
        }
    }

    // 六個ICON的row
    .row_step {

        // 六個ICON的col
        @at-root .col_step {
            text-align: center;
            position: relative;
            margin: 0px auto 25px;

            //    STEP的字 
            span:nth-child(1) {
                font-size: 25px;
                letter-spacing: 3px;
            }

            // 六個ICON
            .icon {
                width: 100px;
                height: 100px;
                background: #191970;
                color: #fff;
                border-radius: 50%;
                text-align: center;
                margin: 15px auto;
                position: relative;

                // 白圈
                &::after {
                    content: '';
                    width: 95px;
                    height: 95px;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }

                i {
                    font-size: 40px;
                    line-height: 100px;
                }
            }

            // 流程說明文字
            span:nth-child(3) {
                font-size: 20px;
                letter-spacing: 5px;
            }

            // 箭頭
            @at-root .arrow {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                margin: auto;

                // SVG畫箭頭
                svg {
                    height: 20px;
                    width: 20px;

                    polyline {
                        fill: #ff4500;
                        stroke: #ff4500;
                        stroke-width: 1
                    }
                }
            }
        }
    }

    // 注意事項的標題
    .col_notice_title {
        color: #191970;
        font-size: 40px;
        text-align: center;
        margin: 0 0 20px 0;

        // 注意事項的內容
        @at-root .col_notice {
            width: 80%;
            margin: auto;

            span {
                display: block;
            }
        }
    }

    // 退換貨的 row 容器
    .row_return_refund {
        border-bottom: none;

        // 退換貨的標題
        .col_return_refund_title {
            color: #191970;
            font-size: 40px;
            text-align: center;
            margin: 0 0 20px 0;

            // 退換貨的內容容器
            @at-root .col_return_refund {
                width: 80%;
                margin: auto;
            }
        }
    }

    // 電話地址營業時間的頁尾
    .row_footer {
        width: 100vw;
        background: #fefefe;
        border-top: 1px solid #ff4500;

        @at-root .col_footer {
            text-align: center;

            span {
                display: block;
            }
        }
    }

    // 版權
    .copyright {
        width: 100%;
        color: #fff;
        background: #191970;
        text-align: center;
    }

    // #b38112
</style>