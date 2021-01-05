//後台管理 訂單
const api_path = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin`;
// 取得訂單列表
const getorderlist = axios.create({
    baseURL: api_path    
});
// 修改訂單
const updateorderlist = axios.create({
    baseURL: api_path    
});
// 取得訂單列表
export const get_order_list_api = (page=1) => getorderlist.get(`/orders?page=${page}`);
// 修改訂單
export const update_order_list_api = id => updateorderlist.put(`/order/${id}`);