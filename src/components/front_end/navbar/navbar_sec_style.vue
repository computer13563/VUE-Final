<template>
    <div>
        <div class="container_nav_sec_style container_nav_background" id="test">
            <nav class="main_nav">
                <section class="main_nav_section">

                    <router-link :to="{name:'Login'}">
                        <i class="fas fa-user-circle user_icon"></i>
                    </router-link>
                    <router-link :to="{name:'Cart'}">
                        <i class="fas fa-shopping-cart cart_icon"></i>
                    </router-link>

                    <form class="header_search">
                        <input type="search" name="" id="" placeholder="美味探索">
                        <button><i class="fas fa-search"></i></button>
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
        name: 'NavbarSecStyle',
        data() {
            return {}
        },
        methods: {
            go_top() {
                window.scroll(0, 0);
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

    .container_nav_sec_style {
        position: fixed;
        z-index: 100;
        width: 100%;
        color: #3e515a;
        background: #fdfdfd;

        a {
            color: currentColor;
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

            button,
            input {
                background-color: rgba(255, 255, 255, .1);
                color: currentColor;
                border: 1px solid currentColor;
                padding: 5px 10px;
            }

            button:focus,
            input:focus,
            input:focus+button {
                outline: none;
                color: #d63259;
            }

            button {
                border-radius: 0 200px 200px 0;
                border-left: none;

                &:focus {
                    border: 1px solid currentColor;
                    border-left: none;
                }
            }

            input {
                border-radius: 200px 0 0 200px;
                border-right: none;

                &:focus {
                    border: 1px solid currentColor;
                    border-right: none;
                }
            }

            input::placeholder {
                color: currentColor;
            }

            input:focus::placeholder {
                color: transparent;
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
                transition: .2s;
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