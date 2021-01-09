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
                        <label for="user_email">收件人電子郵件信箱</label>
                        <input type="text" required id="user_email" v-model="order.data.user.email">
                        <label for="" v-if="!check_status.email">請輸入正確信箱</label>
                    </div>
                    <div class="form-group">
                        <label for="user_name">收件人姓名</label>
                        <input type="text" required id="user_name" v-model="order.data.user.name">
                        <label for="" v-if="!check_status.name">請輸入正確姓名</label>
                    </div>
                    <div class="form-group">
                        <label for="user_tel">收件人手機號碼</label>
                        <input type="text" required id="user_tel" v-model="order.data.user.tel">
                        <label for="" v-if="!check_status.tel">請輸入正確手機號碼</label>
                    </div>
                    <div class="form-group">

                        <label for="user_address">收件人地址</label>

                        <select name="" id="" v-model="city" class="address_select">
                            <option value="" disabled>請選擇城市</option>
                            <option :value="item.city" v-for="(item,index) in city_filter" :key="index">{{item.city}}
                            </option>
                        </select>

                        <select name="" id="" v-model="town" class="address_select">
                            <option value="" disabled>請選擇行政區</option>
                            <option :value="item.district" v-for="(item,index) in town_filter" :key="index">
                                {{item.district}}</option>
                        </select>

                        <input type="text" required id="user_address" v-model="origin_address">
                        <label for="" v-if="!check_status.address">請輸入正確地址</label>
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
        check_out_page_api,
    } from '@/components/api/cus_api.js'
    import {
        zipcode
    } from '@/components/api/zipcode.js'

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
                            address: '',
                        },
                        message: ''
                    }
                },
                check_status: {
                    name: true,
                    email: true,
                    tel: true,
                    address: true
                },
                zipcode: {},
                city: '',
                town: '',
                origin_address: ''
            }
        },
        methods: {
            check_out_page() {
                const vm = this;
                vm.order.data.user.address = vm.city + vm.town + vm.origin_address;
                check_out_page_api(vm.order)
                    .then(res => {
                        console.log(res);
                        if (res.data.success) {
                            vm.$router.push(`/checkout/${res.data.orderId}`);
                        }
                    })
            },
            check_name(name) {
                const name_format = /^[u4e00-u9fa5]{0,30}$/;
                return name_format.test(name);
            },
            check_email(email) {
                const email_format = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                return email_format.test(email);
            },
            check_tel(tel) {
                const tel_format = /^09\d{8}/;
                return tel_format.test(tel);
            },
            check_address(address) {
                const address_format = /^([u4e00-u9fa5]|[a-zA-Z]){0,30}$/;
                return address_format.test(address);
            },
            // 跨域問題
            // zipcode1(){
            //     code().then(res => {
            //         console.log(res);
            //     })
            // }
        },
        computed: {
            city_filter() {
                const vm = this;
                const city_set = new Set();
                const result = vm.zipcode.filter(item => {
                    if (!city_set.has(item.city)) {
                        return city_set.add(item.city)
                    } else {
                        false;
                    }
                })
                return result;
            },
            town_filter() {
                const vm = this;
                if (vm.city) {
                    return vm.zipcode.filter(item => {
                        return item.city.match(vm.city);
                    })
                }
            }
        },
        watch: {
            'order.data.user.email': function (newval) {
                if (this.check_email(newval)) {
                    this.check_status.email = true;
                } else {
                    this.check_status.email = false;
                }
            },
            'order.data.user.tel': function (newval) {
                if (this.check_tel(newval)) {
                    this.check_status.tel = true;
                } else {
                    this.check_status.tel = false;
                }
            },
            'order.data.user.name': function (newval) {
                if (this.check_name(newval)) {
                    this.check_status.name = true;
                } else {
                    this.check_status.name = false;
                }
            },
            'origin_address': function (newval, oldval) {
                if (this.check_address(newval)) {
                    this.check_status.name = true;
                } else {
                    this.check_status.name = false;
                }
            }
        },
        created() {
            this.zipcode = zipcode.data;
            console.log(this.zipcode);
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

            // 城市行政區下拉式選單
            .address_select {
                border: #b0bec5 2px solid;
                border-radius: 10px;
                padding: 10px;
                margin: 0 20px 10px 0;
                width: 150px;
                height: 50px;

                &:focus {
                    outline: none;
                }
            }

            // 備註
            textarea {
                padding: 10px 0 5px 15px;
                height: 100px;
            }

            // 送出資料按紐
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