<template>
    <div>
        <loading :active.sync="isLoading"> </loading>
        <table class="table">
            <thead>
                <tr>
                    <td>購買時間</td>
                    <td>Email</td>
                    <td>購買款項</td>
                    <td>應付金額</td>
                    <td>是否付款</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in order" :key="item.id">
                    <td>{{item.create_at}}</td>
                    <td>{{item.user.email}}</td>
                    <td>
                        <li v-for="(product,key) in item.products" :key="key">
                            {{product.product.title}} : {{product.qty}} / {{product.product.unit}}
                        </li>
                    </td>
                    <td>{{item.total}}</td>
                    <td>
                        <span v-if="!item.is_paid">尚未付款</span>
                        <span v-else class="text-success">付款完成</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {
        get_order_list_api
    } from '@/components/api/dashboard_orderlist_api.js'

    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        name: 'Order',
        data() {
            return {
                order: {},
                isLoading:false
            }
        },
        methods: {
            get_order_list() {
                this.isLoading = true;
                get_order_list_api()
                    .then(res => {
                        console.log(res);
                        const vm = this;
                        vm.order = res.data.orders;
                        vm.isLoading = false;
                    })
            }
        },
        computed:{
            // ...mapGetters(['isLoading']),
        },
        created() {
            this.get_order_list();
        }
    }
</script>