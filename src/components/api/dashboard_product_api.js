// 讓AXIOS跨域請求
const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
);
axios.defaults.headers.common.Authorization = `${token}`;
axios.defaults.headers.put['Content-Type'] = 'multipart/form-data';
//後臺管理 商品
const api_path = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin`;
//新增
const createproduct = axios.create({
    baseURL: api_path
});
//取得單一個頁面
const getsinglepageproducts = axios.create({
    baseURL: api_path
});
//取得全部商品
const getallproducts = axios.create({
    baseURL: api_path
});
// 編輯商品
const updateproduct = axios.create({
    baseURL: api_path
});
// 刪除商品
const delproducts = axios.create({
    baseURL: api_path
});
//上傳圖片
const uploadpic = axios.create({
    baseURL: api_path,
});
// 新增
export const create_product = data => createproduct.post(`/product`,data);
// 取得單一頁面
export const getsingle_page_products = (page) => getsinglepageproducts.get(`/products?page=${page}`);
// 取得全部商品
export const get_all_products = () => getallproducts.get(`/products/all`);
// 編輯商品
export const update_product = (product_id,data) => updateproduct.put(`/product/${product_id}`,data);
// 刪除商品
export const del_products = product_id => delproducts.delete(`/product/${product_id}`);
//上傳圖片
export const upload_pic = data => uploadpic.post('/upload',data);