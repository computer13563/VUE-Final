import {
    Modal
} from 'bootstrap';
export default {
    // 嚴謹模式
    strict: true,

    //在模組的時候   state會是區域變數   mutations  actions  getters是區域變數
    namespaced: true, //加上這個全部的東西都會變區域變數
    // 變數儲存的地方
    state: {
        tempproduct: {},
        isNew: false,
        modal: '',
    },
    //操作變數的方法   
    // state是一定要有的內建變數指的就是上面的state裡面的變數  
    // payload是外部傳進去的 可以沒有
    // 這邊只做同步的行為   非同步交給action做
    // payload傳多個參數要用物件{payload1,payload2......}
    mutations: {
        TEMPPRODUCT(state, payload) {
            state.tempproduct = payload;
        },
        ISNEW(state, payload) {
            state.isNew = payload;
        },
        MODAL(state, payload) {
            state.modal = payload;
            // state.modal.show();
        },
    },
    //methods
    // context是內建一定要有的變數 要用這個變數去操作方法做甚麼事
    // payload是外部傳入的變數 可以沒有
    // payload傳多個參數要用物件{payload1,payload2......}
    actions: {
        openmodal(context, isNew, item) {
            if (!isNew) {
                context.commit('TEMPPRODUCT', {});
                context.commit('ISNEW', true);
            } else {
                context.commit('TEMPPRODUCT', Object.assign({}, item));
                context.commit('ISNEW', false);
            }
            let test =  new Modal(document.getElementById('productModal'));
            context.commit('MODAL',test);
            context.state.modal.show;
        },
    },
    // getter跟computed差不多
    getters: {
        tempproduct: state => state.tempproduct,
        isNew: state => state.isNew,
        modal: state => state.modal,
    }
}