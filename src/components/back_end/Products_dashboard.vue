<template>
    <div>
        <!-- loading -->
        <loading :active.sync="isLoading"> </loading>
        <!-- loading -->
        <div class="text-right mt-3 mb-5">
            <button class="btn btn-outline-winered" @click.prevent="openmodal(true)">新增商品</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <td width="120">類別</td>
                    <td class="">品名</td>
                    <td width="120">原始價格</td>
                    <td width="120">折價後價格</td>
                    <td width="120">是否啟用</td>
                    <td width="70" class="">編輯</td>
                    <td width="70" class="">刪除</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.origin_price}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <span v-if="item.is_enabled">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-secondary btn-sm"
                            @click.prevent="openmodal(false,item)">編輯</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click.prevent="del_product(item.id)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- pagination -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled':!pagination.has_pre}">
                    <a class="page-link" href="#" aria-label="Previous"
                        @click.prevent="getsingle_page_product(pagination.current_page-1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page"
                    :class="{'active':page === pagination.current_page}">
                    <a class="page-link" href="#" @click.prevent="getsingle_page_product(page)">{{page}}</a>
                </li>
                <li class="page-item" :class="{'disabled':!pagination.has_next}">
                    <a class="page-link" href="#" aria-label="Next"
                        @click.prevent="getsingle_page_product(pagination.current_page+1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                                        v-model="tempproduct.image">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片
                                        <i class="fas fa-spinner fa-spin" v-if="file_uploading"></i>
                                    </label>
                                    <input type="file" id="customFile" class="form-control" ref="files"
                                        @change="uploadpic">
                                </div>
                                <img class="img-fluid" alt="" :src="tempproduct.image">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                                        v-model="tempproduct.title">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                                            v-model="tempproduct.category">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" placeholder="請輸入單位"
                                            v-model="tempproduct.unit">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                            v-model="tempproduct.origin_price">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                                            v-model="tempproduct.price">
                                    </div>
                                </div>
                                <hr>

                                <div class="form-group">
                                    <label for="description">產品描述</label>
                                    <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                                        v-model="tempproduct.description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                        v-model="tempproduct.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled"
                                            v-model="tempproduct.is_enabled" :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary"
                            @click.prevent="create_or_edit_product(pagination.current_page)">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ tempproduct.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

    // mapaction只能用不帶入參數的
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        name: 'Products_dashboard',
        data() {
            return {
                // VUEX裡面
                // products: {},
                tempproduct: {},
                isNew: true,
                // VUEX裡面
                // pagination: {},
                // isLoading放去VUEX裡面
                // isLoading:false,
                // 這裡要放一個變數給新建立的MODAL物件  不然開會是一個物件  關會是一個物件 兩個沒關係 會關不掉
                modal: '',
                file_uploading: false
            };
        },
        methods: {
            getsingle_page_product(page = 1) {
                // const vm = this;
                // // vm.$store.state.isLoading = true;
                // vm.$store.dispatch('loading_animation', true);
                // getsingle_page_products(page)
                //     .then(response => {
                //         if (response.data.success) {
                //             vm.products = response.data.products;
                //             vm.pagination = response.data.pagination;
                //             // vm.$store.state.isLoading = false;
                //             vm.$store.dispatch('loading_animation', false);
                //         } else {
                //             console.log(response);
                //         }
                //     });
                this.$store.dispatch('products_module/getsingle_page_product', page);
            },
            openmodal(isNew, item) {
                const vm = this;
                if (isNew) {
                    vm.tempproduct = {};
                    vm.isNew = true;
                } else {
                    vm.tempproduct = Object.assign({}, item);
                    vm.isNew = false;
                }
                this.modal = new Modal(document.getElementById('productModal'));
                this.modal.show();
                // this.$store.dispatch('modal/openmodal',{isNew, item});
                // this.modal.show();
            },
            create_or_edit_product(current_page) {
                const vm = this;
                if (vm.isNew) {
                    create_product({
                            data: vm.tempproduct
                        })
                        .then(response => {
                            console.log(response);
                            if (response.data.success) {
                                vm.modal.hide();
                                vm.getsingle_page_product();
                            } else {
                                console.log('create fail.');
                                vm.modal.hide();
                            }
                        });
                } else {
                    update_product(vm.tempproduct.id, {
                            data: vm.tempproduct
                        })
                        .then(response => {
                            if (response.data.success) {
                                vm.modal.hide();
                                vm.getsingle_page_product(current_page);
                            } else {
                                console.log('update fail.');
                                vm.modal.hide();
                            }
                        });
                }
            },
            del_product(product_id) {
                del_products(product_id).then(response => {
                    this.getsingle_page_product();
                });

            },
            uploadpic() {
                console.log(this);
                const vm = this;
                const picpath = vm.$refs.files.files[0];
                const formdata = new FormData();
                formdata.append('file-to-upload', picpath);
                vm.file_uploading = true;
                upload_pic(formdata).then(response => {
                    if (response.data.success) {
                        vm.$set(vm.tempproduct, 'imageUrl', response.data.imageUrl);
                        vm.file_uploading = false;
                    }
                });
            }
        },
        computed: {
            // isLoading() {
            //     return this.$store.state.isLoading;
            // },
            // products(){
            //     return this.$store.state.products;
            // },
            // pagination(){
            //     return this.$store.state.pagination;
            // }

            //因為把模組內的東西全部變區域變數   所以要加上模組名稱
            ...mapGetters(['isLoading']),
            ...mapGetters('products_module', ['products', 'pagination']),
            //modal.show待解決
            // ...mapGetters('modal',['tempproduct','isNew','modal']),
        },
        created() {
            this.getsingle_page_product();
        }
    }
</script>

<style lang="scss">
</style>