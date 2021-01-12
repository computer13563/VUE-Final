<template>
    <div>
        <loading :active.sync="isLoading"> </loading>
        <div class="text-right mt-3 mb-5">
            <button class="btn btn-outline-winered" id="coupon_btn" @click.prevent="openmodal(true)">新增優惠券</button>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <td width="120">標題</td>
                        <td width="120">折扣</td>
                        <td width="120">到期日</td>
                        <td width="120">code</td>
                        <td width="120">是否啟用</td>
                        <td width="120">編輯</td>
                        <td width="120">刪除</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in coupon" :key="item.id">
                        <td>{{item.title}}</td>
                        <td>{{item.percent}}</td>
                        <td>{{due_date_in_coupon(item.due_date)}}</td>
                        <!-- <td>{{item.due_date}}</td> -->
                        <td>{{item.code}}</td>
                        <td>{{item.is_enabled}}</td>
                        <td>
                            <button class="btn btn-outline-cus-primary btn-sm"
                                @click.prevent="openmodal(false,item)">編輯</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-winered btn-sm"
                                @click.prevent="del_coupon(item.id)">刪除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- modal -->
        <div class="modal" id="modal">
            <div class="modal-content" id="modal-content">

                <label for="coupon_title">優惠券標題</label>
                <input type="text" id="coupon_title" v-model="title">

                <label for="coupon_is_enabled">是否啟用</label>
                <input type="text" id="coupon_is_enabled" v-model="is_enabled">

                <label for="coupon_percent">優惠券折扣</label>
                <input type="text" id="coupon_percent" v-model="percent">

                <label for="coupon_due_date">優惠券到期日</label>
                <input type="text" id="coupon_due_date" v-model="due_date" placeholder="格式為yyyymmdd">
                <label class="date_format" for="coupon_due_date" v-if="!check_date">時間格式錯誤</label>

                <label for="coupon_code">CODE</label>
                <input type="text" id="coupon_code" v-model="code">

                <p>
                    <button class="btn btn-outline-success" id="submit_btn" @click.prevent="submit">
                        <i class="fas fa-spinner fa-spin" v-if="submit_loading"></i>
                        確定</button>
                    <button class="btn btn-outline-winered" id="close" @click.prevent="closemodal">取消</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        create_coupon,
        get_coupon_list,
        update_coupon,
        delete_coupon
    } from '@/components/api/dashboard_coupon_api'

    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        name: 'Coupon_dashboard',
        data() {
            return {
                // 全部放到VUEX
                // coupon:{},
                // temp_coupon: {},
                // isNew: false
            }
        },
        methods: {
            openmodal(isNew, item) {
                // const vm = this;
                // let btn = document.querySelector('#coupon_btn');
                // let modal = document.querySelector('#modal');
                // if (isNew) {
                //     vm.temp_coupon = {};
                //     vm.isNew = true
                // } else {
                //     vm.temp_coupon = Object.assign({}, item);
                //     vm.isNew = false;
                // }
                // modal.style.display = "block";
                this.$store.dispatch('coupon_module/openmodal', {
                    isNew,
                    item
                });
            },
            closemodal() {
                let close = document.querySelector('#close');
                let modal = document.querySelector('#modal');
                modal.style.display = "none";
            },
            submit() {
                // let submit_btn = document.querySelector('#submit_btn');
                // let modal = document.querySelector('#modal');
                // const vm = this;
                // if (vm.isNew) {
                //     create_coupon({
                //         data: vm.temp_coupon
                //     }).then(response => {
                //         vm.get_coupon();
                //         modal.style.display = "none";
                //     });
                // } else {
                //     const coupon = {
                //         data: vm.temp_coupon
                //     }
                //     update_coupon(vm.temp_coupon.id, coupon)
                //         .then(response => {
                //             if (response.data.success) {
                //                 vm.get_coupon();
                //                 modal.style.display = "none";
                //             } else {
                //                 modal.style.display = "none";
                //             }
                //         });
                // }
                this.$store.dispatch('coupon_module/submit');
            },
            del_coupon(id) {
                // delete_coupon(id)
                //     .then(res => {
                //         console.log(res.data);
                //         vm.get_coupon();
                //     })
                this.$store.dispatch('coupon_module/del_coupon', id);
            },
            get_coupon(page = 1) {
                // get_coupon_list(page).then(res => {
                //     const vm = this;
                //     vm.coupon = res.data.coupons;
                //     console.log(vm.coupon);
                // })
                this.$store.dispatch('coupon_module/get_coupon', {
                    page
                });
            },
            // 把顯示在畫面時間戳記改成一般時間格式
            due_date_in_coupon: function (due_date) {
                return new Date(parseInt(due_date)).toLocaleDateString();
            },
        },
        computed: {
            title: {
                get() {
                    return this.$store.state.coupon_module.temp_coupon.title;
                },
                set(value) {
                    this.$store.commit('coupon_module/TEMP_COUPON_TITLE', value);
                }
            },
            is_enabled: {
                get() {
                    return this.$store.state.coupon_module.temp_coupon.is_enabled;
                },
                set(value) {
                    this.$store.commit('coupon_module/TEMP_COUPON_IS_ENABLED', value);
                }
            },
            percent: {
                get() {
                    return this.$store.state.coupon_module.temp_coupon.percent;
                },
                set(value) {
                    this.$store.commit('coupon_module/TEMP_COUPON_PERCENT', value);
                }
            },
            due_date: {
                get() {
                    return this.$store.state.coupon_module.trans_due_date;
                },
                set(value) {
                    this.$store.commit('coupon_module/TEMP_COUPON_DUE_DATE', value);
                }
            },
            code: {
                get() {
                    return this.$store.state.coupon_module.temp_coupon.code;
                },
                set(value) {
                    this.$store.commit('coupon_module/TEMP_COUPON_CODE', value);
                }
            },

            ...mapGetters('coupon_module', ['coupon', 'temp_coupon', 'isNew', 'check_date', 'submit_loading',
                'trans_due_date'
            ]),
            ...mapGetters(['isLoading']),
        },
        created() {
            this.get_coupon();
        }
    }
</script>

<style scoped lang="scss">
    .modal {
        display: none;
        position: absolute;
        z-index: 1000;
        top: 0px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .3);

        @at-root .modal-content {
            width: 50%;
            margin: 40px auto;
            font-size: 20px;
            letter-spacing: 3px;
            padding: 0 20px;

            label {
                padding: 10px 10px;
            }

            .date_format {
                color: red;
            }

            input {
                padding: 5px 10px;
            }

            p {
                display: flex;
                justify-content: flex-end;
                margin-top: 30px;
            }

            button {
                text-align: center;
                width: 100px;
            }

            button:nth-child(1) {
                margin-right: 30px;
            }

            button:nth-child(2) {}
        }

    }
</style>