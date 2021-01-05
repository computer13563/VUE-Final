<template>
    <div>
        <!-- <div class="bg-primary"> -->
        <!-- <form class="form-signin" @submit.prevent="signin">
            <h1 class="h3 mb-3 font-weight-normal">登入</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="使用者帳號" required autofocus
                v-model="user.username" />
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="使用者密碼" required
                v-model="user.password" />
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-secondary btn-block w-100" type="submit">
                登入
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form> -->

        <section class="login_container">
            <!-- login背景 -->
            <div class="login_bg">
                <!-- 左右兩個區塊 -->
                <div class="main_login_block">
                    <section class="login_section social_media_login">
                        <p class="social_media_login_icon">
                            <i class="fas fa-feather-alt "></i>
                        </p>

                        <p class="social_media_login_text">
                            <span>歡迎回來</span>
                            <span class="social_media_login_text_method">請選擇要登入的方式</span>
                        </p>

                        <button class="login_fb login_fb_rwd">使用 facebook 登入</button>
                        <button class="login_google login_google_rwd">使用 google 登入</button>

                    </section>

                    <section class="login_section self_login">

                        <form class="form-signin" @submit.prevent="signin">

                            <h1 class="self_login_title">會員登入</h1>

                            <label for="inputEmail" class="sr-only">Email address</label>
                            <p class="self_login_input_email">
                                <label for="inputEmail">
                                    <i class="far fa-envelope"></i>
                                </label>
                                <input type="email" id="inputEmail" class="" placeholder="Email帳號" required autofocus
                                    v-model="user.username" />
                            </p>

                            <label for="inputPassword" class="sr-only">Password</label>
                            <p class="self_login_input_password">
                                <label for="inputPassword">
                                    <i class="fas fa-unlock-alt"></i>
                                </label>
                                <input type="password" id="inputPassword" class="" placeholder="密碼" required
                                    v-model="user.password" />
                            </p>

                            <button class="self_login_btn" type="submit">
                                登入
                            </button>

                        </form>

                        <button class="self_login_apply">
                            申請帳號
                        </button>

                        <p class="self_login_forget">
                            <a href="">忘記密碼 ?</a>
                        </p>

                        <button class="login_fb login_fb_pc">使用 facebook 登入</button>
                        <button class="login_google login_google_pc">使用 google 登入</button>

                        <p class="self_login_copyright text-muted">&copy; 2017-2018</p>
                    </section>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import {
        user_login
    } from '../components/api/account_uploadpic_api'
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            signin() {
                // const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
                const vm = this;
                // axios.post(api, vm.user).then((response) => {
                user_login(vm.user).then((response) => {
                    if (response.data.success) {
                        const token = response.data.token;
                        const expired = response.data.expired;
                        console.log(token, expired, response);
                        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
                        vm.$router.push("/admin/products");
                    }
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    // 新的CSS
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    // 最外面整個畫面的背景
    .login_container {
        width: 100%;
        height: 100vh;
        background: #eee;
        z-index: -2;

        // 第二層模糊背景
        @at-root .login_bg {
            max-width: 1440px;
            width: 100%;
            height: 100vh;
            padding: 50px 0 0;
            margin: auto;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
            z-index: -1;

            // 登入頁面的主要輸入區
            @at-root .main_login_block {
                width: 60%;
                height: 80vh;
                margin: auto;
                display: flex;

                // 左右兩個區塊
                @at-root .login_section {
                    width: 100%;

                    // 社群媒體登入
                    @at-root .social_media_login {
                        // 媒體登入的背景
                        background: rgba(255, 255, 255, .5);

                        // 社群媒體登入部分的ICON
                        @at-root .social_media_login_icon {
                            font-size: 50px;
                            text-align: center;
                            padding: 30px 0 0;
                        }

                        // 社群媒體登入的字
                        @at-root .social_media_login_text {

                            // 社群媒體的字的相同樣式
                            span {
                                display: block;
                                text-align: center;
                                padding: 10px 0;
                            }

                            // 歡迎回來的字樣式
                            span:nth-child(1) {
                                font-size: 40px;
                            }

                            // 歡迎回來下面的字
                            span:nth-child(2) {
                                font-size: 25px;
                                margin-bottom: 40px;
                            }
                        }

                        // 社群媒體按鈕樣式
                        @at-root .login_fb,
                        .login_google {
                            display: block;
                            width: 70%;
                            padding: 5px 0;
                            margin: auto;
                            font-size: 20px;
                            border-radius: 50px;
                            outline: none;
                            border: none;
                            color: #fff;
                        }

                        // FB登入
                        @at-root .login_fb {
                            background: #3b5998;

                            // FB按鈕按下去改變文字顏色
                            &:active {
                                color: #ddd;
                            }
                        }

                        // GOOGLE登入
                        @at-root .login_google {
                            background: #ea4335;
                            margin-top: 30px;

                            // GOOGLE按鈕按下改變文字顏色
                            &:active {
                                color: #ddd;
                            }
                        }

                    }

                    // 本身網站的會員登入
                    @at-root .self_login {
                        // 本身會員的背景
                        background: #fafafa;

                        // 會員登入字樣
                        @at-root .self_login_title {
                            text-align: center;
                            padding: 30px 0 30px;
                        }

                        // 信箱密碼輸入框
                        @at-root .self_login_input_email,
                        .self_login_input_password {
                            display: flex;
                            font-size: 20px;
                            width: 80%;
                            padding: 20px 0 0 10px;
                            margin: auto;

                            // 帳號密碼輸入框
                            input {
                                border: none;
                                width: 100%;
                                padding: 5px 10px;
                                border-bottom: 2px solid #000;
                                background: #fafafa;
                            }

                            // 游標在帳密輸入框的時候
                            input:focus {
                                outline: none;
                            }

                            // 設定帳號密碼輸入框的底線
                            label {
                                padding: 5px 10px;
                                border-bottom: 2px solid #000;
                            }
                        }

                        // 登入和申請按鈕按下去的時候不要有外框線
                        @at-root .self_login_btn:focus,
                        .self_login_apply:focus {
                            outline: none;
                        }

                        // 登入按鈕點下去的反應
                        @at-root .self_login_btn:active {
                            color: #ddd;
                        }

                        // 申請按鈕點下去的反應
                        @at-root .self_login_apply:active {
                            background: #ddd;
                        }

                        //本身會員登入按鈕
                        @at-root .self_login_btn {
                            display: block;
                            width: 70%;
                            padding: 5px;
                            margin: 50px auto 0;
                            font-size: 20px;
                            color: #fafafa;
                            background: #47cf73;
                            border: none;
                            border-radius: 50px;
                        }

                        // 申請會員按鈕
                        @at-root .self_login_apply {
                            display: block;
                            width: 70%;
                            padding: 5px;
                            margin: 30px auto 0;
                            font-size: 20px;
                            background: #fafafa;
                            color: #47cf73;
                            border: 1px solid #47cf73;
                            border-radius: 50px;
                        }

                        // 忘記密碼
                        @at-root .self_login_forget {
                            width: 90%;
                            padding: 5px;
                            text-align: right;
                        }

                        // 在PC要隱藏FB GOOLE按紐
                        @at-root .login_fb_pc,
                        .login_google_pc {
                            display: none;
                        }

                        // copyright
                        @at-root .self_login_copyright {
                            text-align: center;
                            margin: 20px 0;
                        }
                    }
                }
            }
        }
    }

    // RWD
    @media screen and (max-width: 991px) {

        // 第二層模糊背景
        @at-root .login_bg {
            padding: 0;
            background: #fafafa;

            // 登入頁面的主要輸入區
            @at-root .main_login_block {
                display: block;
                width: 100%;
                height: 100vh;

                // 社群媒體登入
                @at-root .social_media_login {
                    background: #fafafa;

                    .social_media_login_text_method {
                        display: none;
                    }

                    @at-root .social_media_login_icon {
                        font-size: 30px;
                        text-align: center;
                        padding: 10px 0 0;
                    }

                    // 社群媒體登入的字
                    @at-root .social_media_login_text {

                        // 社群媒體的字的相同樣式
                        span {
                            display: block;
                            text-align: center;
                            padding: 10px 0;
                        }

                        // 歡迎回來的字樣式
                        span:nth-child(1) {
                            font-size: 30px;
                        }

                        // 歡迎回來下面的字
                        span:nth-child(2) {
                            font-size: 25px;
                            margin-bottom: 0px;
                        }
                    }

                    // 社群媒體按鈕樣式
                    @at-root .login_fb,
                    .login_google {
                        display: block;
                        width: 70%;
                        padding: 5px 0;
                        margin: auto;
                        font-size: 20px;
                        border-radius: 50px;
                        outline: none;
                        border: none;
                        color: #fff;
                    }

                    // GOOGLE登入
                    @at-root .login_google {
                        background: #ea4335;
                        margin-top: 10px;

                        // GOOGLE按鈕按下改變文字顏色
                        &:active {
                            color: #ddd;
                        }
                    }
                }

                // 自己網站登入
                @at-root .self_login {

                    // 會員登入字樣
                    @at-root .self_login_title {
                        text-align: center;
                        padding: 10px 0;
                    }

                    //本身會員登入按鈕
                    @at-root .self_login_btn {
                        display: block;
                        width: 70%;
                        padding: 5px;
                        margin: 30px auto 0;
                        font-size: 20px;
                        color: #fafafa;
                        background: #47cf73;
                        border: none;
                        border-radius: 50px;
                    }

                    // 申請會員按鈕
                    @at-root .self_login_apply {
                        display: block;
                        width: 70%;
                        padding: 5px;
                        margin: 10px auto 0;
                        font-size: 20px;
                        background: #fafafa;
                        color: #47cf73;
                        border: 1px solid #47cf73;
                        border-radius: 50px;
                    }
                }

                //  把上面FB GOOGLE隱藏起來
                @at-root .login_google_rwd,
                .login_fb_rwd {
                    display: none;
                }
            }
        }
    }




    // 原本CSS
    // div:first-child {
    //     height: 100vh;
    //     color: #391a3a;
    // }

    // .form-signin {
    //     width: 100%;
    //     max-width: 330px;
    //     padding: 15px;
    //     margin: auto;
    //     border: 1px solid #391a3a;
    // }

    // .form-signin .checkbox {
    //     font-weight: 400;
    // }

    // .form-signin .form-control {
    //     position: relative;
    //     box-sizing: border-box;
    //     height: auto;
    //     padding: 10px;
    //     font-size: 16px;
    // }

    // .form-signin .form-control:focus {
    //     z-index: 2;
    // }

    // .form-signin input[type="email"] {
    //     margin-bottom: -1px;
    //     border-bottom-right-radius: 0;
    //     border-bottom-left-radius: 0;
    // }

    // .form-signin input[type="password"] {
    //     margin-bottom: 10px;
    //     border-top-left-radius: 0;
    //     border-top-right-radius: 0;
    // }
</style>