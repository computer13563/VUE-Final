const api_path = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}`;
// 取得商品列表
const getproducts = axios.create({
    baseURL: api_path    
});
// 單一商品細節
const productdetail = axios.create({
    baseURL: api_path    
});
// 加入購物車
const addtocart = axios.create({
    baseURL: api_path    
});
// 刪除某一筆購物車資料
const delcartinfo = axios.create({
    baseURL: api_path    
});
// 取得購物車列表
const getcartlist = axios.create({
    baseURL: api_path    
});
// 套用優惠券
const usecoupon = axios.create({
    baseURL: api_path    
});
// 結帳頁面
const checkoutpage = axios.create({
    baseURL: api_path    
});
// 取得訂單列表
const getorderlist = axios.create({
    baseURL: api_path    
});
// 取得某一筆訂單
const getsingleorder = axios.create({
    baseURL: api_path    
});
// 結帳付款
const checkout = axios.create({
    baseURL: api_path    
});

export const get_products_api = page=>getproducts.get(`/products?page=${page}`);
export const product_detail_api = id=>productdetail.get(`/product/${id}`);
export const add_to_cart_api = data=>addtocart.post(`/cart`,data);
export const del_cart_info_api = id=>delcartinfo.delete(`/cart/${id}`);
export const get_cart_list_api = ()=>getcartlist.get(`/cart`);
export const use_coupon_api = data=>usecoupon.post(`/coupon`,data);
export const check_out_page_api = data=>checkoutpage.post(`/order`,data);
export const get_order_list_api = page=>getorderlist.get(`/orders?page=${page}`);
export const get_single_order_api = order_id=>getsingleorder.get(`/order/${order_id}`);
export const check_out_api = order_id=>checkout.post(`/pay/${order_id}`);