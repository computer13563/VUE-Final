import {
    create_product,
    getsingle_page_products,
    get_all_products,
    update_product,
    del_products,
    upload_pic
} from '@/components/api/dashboard_product_api';
//不載入找不到modal
import {
    Modal
} from 'bootstrap';

export default {
    // 嚴謹模式
    strict: true,

    //在模組的時候   state會是區域變數   mutations  actions  getters是區域變數
    namespaced: true,   //加上這個全部的東西都會變區域變數
    // 變數儲存的地方
    state: {
        products: {},
        pagination: {}
    },
    //操作變數的方法   
    // state是一定要有的內建變數指的就是上面的state裡面的變數  
    // payload是外部傳進去的 可以沒有
    // 這邊只做同步的行為   非同步交給action做
    // payload傳多個參數要用物件{payload1,payload2......}
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        }
    },
    //methods
    // context是內建一定要有的變數 要用這個變數去操作方法做甚麼事
    // payload是外部傳入的變數 可以沒有
    // payload傳多個參數要用物件{payload1,payload2......}
    actions: {
        getsingle_page_product(context, page) {
            context.commit('LOADING', true, { root : true } );
            getsingle_page_products(page)
                .then(response => {
                    if (response.data.success) {
                        context.commit('PRODUCTS', response.data.products);
                        context.commit('PAGINATION', response.data.pagination);
                        context.commit('LOADING', false, { root : true } );
                    } else {
                        console.log(response);
                        context.commit('LOADING', false, { root : true } );
                    }
                });
        },
    },
    // getter跟computed差不多
    getters: {
        products: state => state.products,
        pagination: state => state.pagination,
    }
}