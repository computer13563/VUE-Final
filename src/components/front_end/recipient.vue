<template>
    <div>

        <!-- <form @submit.prevent="check_out_page"> -->
        <!-- 輸入收件人頁面的最外層 -->
        <section class="recipient_container">

            <!-- 輸入收件人頁面的導覽列 -->
            <NavbarSecStyle></NavbarSecStyle>

            <!-- 輸入收件人頁面的輸入表單 -->
            <section class="recipient_row">

                <form class="recipient_form" @submit.prevent="check_out_page">
                    <div class="form-group">
                        <label for="user_email">Email</label>
                        <input type="text" required id="user_email" v-model="order.data.user.email">
                    </div>
                    <div class="form-group">
                        <label for="user_name">收件人姓名</label>
                        <input type="text" required id="user_name" v-model="order.data.user.name">
                    </div>
                    <div class="form-group">
                        <label for="user_tel">收件人電話</label>
                        <input type="text" required id="user_tel" v-model="order.data.user.tel">
                    </div>
                    <div class="form-group">
                        <label for="user_address">收件人地址</label>
                        <input type="text" required id="user_address" v-model="order.data.user.address">
                    </div>
                    <div class="form-group">
                        <label for="remark">備註</label>
                        <textarea name="" id="remark" cols="50" rows="5" v-model="order.data.message"></textarea>
                    </div>
                    <div>
                        <button>確認資料</button>
                    </div>
                </form>

            </section>

            <!-- 輸入收寄人頁面的footer -->
            <section class="recipient_footer">
                <p class="recipient_copyright">Copyright &copy; 2020 虛擬甜點</p>
                <p class="footer_decoration"></p>
            </section>

        </section>

    </div>
</template>

<script>
    import NavbarSecStyle from '@/components/front_end/navbar/navbar_sec_style.vue'
    import {
        check_out_page_api
    } from '@/components/api/cus_api.js'

    export default {
        name: 'Recipient',
        components: {
            NavbarSecStyle,
        },
        data() {
            return {
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
            }
        },
        methods: {
            check_out_page() {
                const vm = this;
                check_out_page_api(vm.order)
                    .then(res => {
                        console.log(res);
                        if (res.data.success) {
                            vm.$router.push(`/checkout/${res.data.orderId}`);
                        }
                    })
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

    // 輸入收件人頁面的最外層
    .recipient_container {
        width: 100%;
        overflow: hidden;

        // 輸入收件人頁面的輸入表單
        @at-root .recipient_row {
            width: 30%;
            margin: 150px auto 0;

            // form表單
            // 輸入收件人資料
            label,
            input {
                display: block;
            }

            label {
                font-size: 17px;
                padding: 15px 0 8px 10px;
                color: #3e515a;
            }

            input,
            textarea {
                width: 100%;
                height: 60px;
                font-size: 20px;
                padding: 5px 0 5px 15px;
                border: #b0bec5 2px solid;
                border-radius: 10px;
                background: #f7f9f9;

                &:focus {
                    outline: none;
                    border-color: #94233e;
                    // border-color: #3e515a;
                }
            }

            textarea {
                padding: 10px 0 5px 15px;
                height: 100px;
            }

            button {
                width: 100%;
                margin-top: 40px;
                font-size: 30px;
                height: 60px;
                align-items: center;
                border: none;
                background: #fff5e6;
                color: #ff9800;

                &:hover {
                    color: #e78b00;
                }

                &:focus {
                    outline: none;
                }

                &:active {
                    color: #d63259;
                }
            }
        }

        // 收件人頁面的footer
        @at-root .recipient_footer {
            width: 100%;

            // FOOTER版權聲明
            .recipient_copyright {
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