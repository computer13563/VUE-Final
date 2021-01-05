const api_path = `${process.env.VUE_APP_APIPATH}`;
// 登入
const userlogin = axios.create({
    baseURL: `${api_path}/admin`
});
// 登出
const userlogout = axios.create({
    baseURL: `${api_path}`
});
// 確認登入狀態
const userstatus = axios.create({
    baseURL: `${api_path}`
});
//後台管理 上傳圖片
const uploadpic = axios.create({
    baseURL: `${api_path}/admin`    
});

//登入 登出 確認狀態
//login要傳帳密過去
export const user_login = data => userlogin.post('/signin', data);
//logout不用傳帳密過去
export const user_logout = () => userlogout.post('/logout');
//確認狀態不用傳帳密
export const user_status = () => userstatus.post('/api/user/check');
//上傳圖片
export const upload_pic = data => uploadpic.post('/upload',data);
