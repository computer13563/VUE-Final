<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <figure>
                        <img src="../../assets/photos/404page.jpg" alt="">
                        <p>
                            <span>
                                網頁施工中.....
                                <br>
                                將於三秒後回到首頁
                            </span>
                        </p>
                    </figure>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
            const vm = this;
            setTimeout(() => {
                vm.$router.push('/');
            }, 3000);
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .row {
        max-width: 3840px;
        width: 100vw;
        overflow: hidden;
        margin: auto;
    }

    .col {
        width: 100%;
        height: 100vh;
    }

    figure {
        position: relative;
        width: 100%;
        height: 100vh;

        img {
            width: 100%;
            height: 100%;
        }
    }

    p {
        width: 300px;
        height: 100px;
        font-size: 25px;
        position: absolute;
        bottom: 3vh;
        left: 0;
        right: 0;
        margin: auto;
    }

    span {
        display: inline-block;
        background: rgba(255, 255, 255, .3);
        border-radius: 10px;
        padding: 5px 20px;
        text-align: center;
    }
</style>