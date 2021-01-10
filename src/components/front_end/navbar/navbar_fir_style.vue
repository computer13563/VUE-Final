<template>
    <div>
        <div class="container_nav " id="test">
            <nav class="main_nav">
                <section class="main_nav_section">

                    <router-link :to="{name:'Login'}">
                        <i class="fas fa-user-circle user_icon"></i>
                    </router-link>

                    <router-link :to="{name:'Cart'}">
                        <i class="fas fa-shopping-cart cart_icon"></i>
                    </router-link>

                    <form class="header_search">
                        <input type="search" name="" id="" placeholder="美味探索" class="input_btn_border">
                        <button class="input_btn_border"><i class="fas fa-search"></i></button>
                    </form>

                </section>

                <section class="main_nav_section">

                    <router-link to="/" class="logo" @click.native="go_top">
                        <i class="fas fa-feather-alt "></i>
                        <span> Dessert</span>
                    </router-link>

                    <div class="main_nav_section_item">
                        <router-link :to="{name:''}">最新訊息</router-link>
                        <router-link :to="{name:'AllProduct'}">所有商品</router-link>
                        <router-link :to="{name:''}">訂購流程</router-link>
                        <router-link :to="{name:'Shop'}">門市地點</router-link>
                        <router-link :to="{name:'Contact'}">聯絡我們</router-link>
                        <router-link :to="{name:''}">關於我們</router-link>
                    </div>

                </section>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {}
        },
        methods: {
            go_top() {
                window.scroll(0, 0);
            }
        },
        created() {

            // 控制導覽列的畫面捲動
            window.onscroll = function () {
                if (window.location.href === 'http://localhost:8080/#/' || 'http://localhost:8080/#/allproduct') {
                    scrollFunction();
                }
            };

            function scrollFunction() {
                const container_nav = document.querySelector('.container_nav');
                const header_search = document.querySelector('.header_search');
                const header_search_btn = document.querySelector('.header_search button');
                const header_search_input = document.querySelector('.header_search input');
                const main_nav_section_item = document.querySelector('.main_nav_section_item');
                const a = document.querySelectorAll('a');
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    container_nav.setAttribute('style',
                        'border-bottom:1px solid #620062;background:rgba(255, 254, 194)');
                    header_search_input.classList.add('input_border');
                    header_search_btn.classList.add('button_border');
                    header_search.style.color = '#620062';
                    main_nav_section_item.style.color = '#620062';
                    for (let i = 0; i < a.length; i++) {
                        a[i].style.color = '#620062';
                    }
                } else {
                    container_nav.setAttribute('style',
                        'background:linear-gradient(rgba(0, 0, 0, .8), rgba(255, 255, 255, 0))');
                    header_search_input.classList.remove('input_border');
                    header_search_btn.classList.remove('button_border');
                    header_search.style.color = '#fff';
                    main_nav_section_item.style.color = '#fff';
                    for (let i = 0; i < a.length; i++) {
                        a[i].style.color = '#fff';
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    .container_nav {
        background: linear-gradient(rgba(0, 0, 0, .8), rgba(255, 255, 255, 0));
        position: fixed;
        z-index: 10;
        width: 100%;
        color: #fff;
        transition: .3s;

        a {
            color: currentColor;
            transition: .2s;

        }

        .main_nav {
            max-width: 1200px;
            width: 100%;
            padding: 20px 20px 0 20px;
            margin: auto;
        }

        .main_nav_section {
            display: flex;
        }

        .main_nav_section:nth-child(1) {
            align-items: center;
            justify-content: flex-end;
        }

        .main_nav_section:nth-child(2) {
            align-items: baseline;
            margin-top: -20px;
        }

        .header_search {
            display: flex;
            color: currentColor;
            transition: .2s;

            button,
            input {
                background-color: rgba(255, 255, 255, .1);
                padding: 5px 10px;
                color: currentColor;
            }

            button:focus,
            input:focus {
                outline: none;
            }

            button {
                border-radius: 0 200px 200px 0;
            }

            input {
                border-radius: 200px 0 0 200px;
            }

            input::placeholder {
                color: currentColor;
            }

            input:focus::placeholder {
                color: transparent;
            }

            // 還沒捲動時的搜尋外框
            @at-root .input_btn_border {
                border: none;
            }

            // 頁面往下捲動搜尋的input外框
            @at-root .input_border {
                border: 1px solid #620062;
                border-right: none;
            }

            // 頁面往下捲動搜尋的button外框
            @at-root .button_border {
                border: 1px solid #620062;
                border-left: none;
            }
        }

        .main_nav_section_item {
            margin-left: auto;
            color: currentColor;

            a {
                font-size: 16px;
                letter-spacing: 5px;
                margin: 5px 0 0 3em;
                position: relative;
            }

            a:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                bottom: -5px;
                right: 50%;
                left: 50%;
                border-bottom: currentColor 1px solid;
            }

            a:hover:after {
                right: 0;
                left: 0;
            }
        }

        .user_icon,
        .cart_icon {
            font-size: 25px;
            padding-right: 20px;
        }

        .logo {
            font-size: 50px;
        }
    }
</style>