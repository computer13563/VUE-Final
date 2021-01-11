import {
    create_coupon,
    get_coupon_list,
    update_coupon,
    delete_coupon
} from '@/components/api/dashboard_coupon_api'

export default {
    // 嚴謹模式
    strict: true,
    //全部區域變數
    namespaced: true,
    //儲存變數
    state: {
        coupon: {},
        temp_coupon: {},
        isNew: false,
        submit_loading: false,
        trans_due_date: new Date(),
        check_date: true,
    },
    // 操作變數
    mutations: {
        COUPON(state, payload) {
            state.coupon = payload;
        },
        ISNEW(state, payload) {
            state.isNew = payload;
        },
        TEMP_COUPON(state, {
            isNew,
            item
        }) {
            if (isNew) {
                state.temp_coupon = {};
                state.isNew = true;
                state.trans_due_date = '';
            } else {
                state.temp_coupon = Object.assign({}, item);
                state.isNew = false;
                const localdate = new Date(parseInt(state.temp_coupon.due_date)).toLocaleDateString();
                state.trans_due_date = localdate;
            }
        },
        // 監看v-model
        TEMP_COUPON_TITLE(state, payload) {
            state.temp_coupon.title = payload;
        },
        TEMP_COUPON_IS_ENABLED(state, payload) {
            state.temp_coupon.is_enabled = payload;
        },
        TEMP_COUPON_PERCENT(state, payload) {
            state.temp_coupon.percent = payload;
        },
        // 正規判斷時間格式錯誤放在這會出現奇怪的BUG    目前無解
        TEMP_COUPON_DUE_DATE(state, payload) {
            // const format = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
            // const result = format.test(state.temp_coupon.due_date);
            // const result = format.test(payload);
            // state.temp_coupon.due_date = payload;
            // if (result) {
            //     state.check_date = true;
            //     console.log(state.temp_coupon.due_date);
            // } else {
            //     state.check_date = false;
            //     console.log(state.temp_coupon.due_date);
            // }

            state.trans_due_date = payload;
            const format = /^([1-9]\d{3})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
            const result = format.test(payload);
            if (result) {
                let timestamp = state.trans_due_date.replace(format, (arg, year, month, day) => {
                    let date = new Date(year, month - 1, day);
                    return date.getTime();
                })
                state.temp_coupon.due_date = timestamp;
            }
        },
        TEMP_COUPON_CODE(state, payload) {
            state.temp_coupon.code = payload;
        },
        SUBMIT_LOADING(state, payload) {
            state.submit_loading = payload;
        },
        CHECK_DATE(state, payload) {
            state.check_date = payload;
        }
    },
    // 方法
    actions: {
        get_coupon(context, page = 1) {
            context.commit('LOADING', true, {
                root: true
            });
            get_coupon_list(page).then(res => {
                console.log(res);
                context.commit('COUPON', res.data.coupons);
                context.commit('LOADING', false, {
                    root: true
                });
            })
        },
        openmodal(context, {
            isNew,
            item
        }) {
            let modal = document.querySelector('#modal');
            context.commit('TEMP_COUPON', {
                isNew,
                item
            });
            modal.style.display = "block";
        },
        submit({
            state,
            commit,
            dispatch
        }) {
            let modal = document.querySelector('#modal');
            // const format = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
            const format = /^[1-9]\d{12}$/;
            const result = format.test(state.temp_coupon.due_date);
            if (result) {
                commit('CHECK_DATE', true);
                commit('SUBMIT_LOADING', true);

                if (state.isNew) {
                    create_coupon({
                        data: state.temp_coupon
                    }).then(response => {
                        commit('SUBMIT_LOADING', false);
                        modal.style.display = "none";
                        dispatch('get_coupon');
                    });
                } else {
                    const coupon = {
                        data: state.temp_coupon
                    }

                    commit('SUBMIT_LOADING', true);
                    update_coupon(state.temp_coupon.id, coupon)
                        .then(response => {
                            if (response.data.success) {
                                commit('SUBMIT_LOADING', false);
                                modal.style.display = "none";
                                dispatch('get_coupon');
                            } else {
                                modal.style.display = "none";
                            }
                        });

                }
            } else {
                commit('CHECK_DATE', false);
            }
        },
        del_coupon({
            dispatch
        }, id) {
            delete_coupon(id)
                .then(res => {
                    dispatch('get_coupon');
                })
        },
        due_date_in_coupon(context, due_date) {
            return new Date(parseInt(due_date)).toLocaleDateString();
        }
    },
    // 就computed
    getters: {
        coupon: state => state.coupon,
        temp_coupon: state => state.temp_coupon,
        isNew: state => state.isNew,
        check_date: state => state.check_date,
        submit_loading: state => state.submit_loading,
        trans_due_date: state => state.trans_due_date
    },
}