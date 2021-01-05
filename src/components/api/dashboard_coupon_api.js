const api_path = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin`;
//後台管理 優惠券
// 新增
const createcoupon = axios.create({
    baseURL: api_path    
});
// 取得優惠券
const getcouponlist = axios.create({
    baseURL: api_path  
});
// 修改
const updatecoupon = axios.create({
    baseURL: api_path    
});
// 刪除
const deletecoupon = axios.create({
    baseURL: api_path    
});
export const create_coupon = data => createcoupon.post(`/coupon`,data);
export const get_coupon_list = page => getcouponlist.get(`/coupons?page=${page}`);
export const update_coupon = (id,data) => updatecoupon.put(`/coupon/${id}`,data);
export const delete_coupon = id => deletecoupon.delete(`/coupon/${id}`);