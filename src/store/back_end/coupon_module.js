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
        isNew: false
    },
    // 操作變數
    mutations: {
        COUPON(state,payload){
            state.coupon = payload;
        },
        ISNEW(state,payload){
            state.isNew = payload;
        },
        TEMP_COUPON(state,{isNew, item}){
            if (isNew) {
                state.temp_coupon = {};
                state.isNew = true;
            } else {
                state.temp_coupon = Object.assign({}, item);
                state.isNew = false;
            }
        },
        // 監看v-model
        TEMP_COUPON_TITLE(state,payload){
            state.temp_coupon.title = payload;
        },
        TEMP_COUPON_IS_ENABLED(state,payload){
            state.temp_coupon.is_enabled = payload;
        },
        TEMP_COUPON_PERCENT(state,payload){
            state.temp_coupon.percent = payload;
        },
        TEMP_COUPON_DUE_DATE(state,payload){
            state.temp_coupon.due_date = payload;
        },
        TEMP_COUPON_CODE(state,payload){
            state.temp_coupon.code = payload;
        },
    },
    // 方法
    actions: {
        get_coupon(context,page=1) {
            context.commit('LOADING', true, { root : true } );
            get_coupon_list(page).then(res => {
                context.commit('COUPON',res.data.coupons);
                context.commit('LOADING', false, { root : true } );
            })
        },
        openmodal(context,{isNew, item}) {
            let modal = document.querySelector('#modal');
            context.commit('TEMP_COUPON',{isNew, item});
            modal.style.display = "block";
        },
        submit({state,dispatch}) {
            let modal = document.querySelector('#modal');
            if (state.isNew) {
                create_coupon({
                    data: state.temp_coupon
                }).then(response => {
                    dispatch('get_coupon');
                    modal.style.display = "none";
                });
            } else {
                const coupon = {
                    data: state.temp_coupon                        
                }
                update_coupon(state.temp_coupon.id, coupon)
                .then(response => {
                    if(response.data.success){
                        dispatch('get_coupon');
                        modal.style.display = "none";
                    }else{
                        modal.style.display = "none";
                    }
                });
            }
        },
        del_coupon({dispatch},id) {
            delete_coupon(id)
                .then(res => {
                    dispatch('get_coupon');
                })
        },
    },
    // 就computed
    getters: {
        coupon: state => state.coupon,
        temp_coupon: state => state.temp_coupon,
        isNew: state => state.isNew,
    },
}