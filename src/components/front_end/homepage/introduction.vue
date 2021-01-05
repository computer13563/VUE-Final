<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="introduction">
                            <div class="introduction_img">
                                <p>甜點，戒不掉的癮</p>
                                <p>甜點，作為法國最出色的浪漫</p>
                                <p>有人，覺得膩口</p>
                                <p>有人，就愛這份濃郁</p>
                            </div>
                            <div class="introduction_text">
                                <p>甜點，戒不掉的癮</p>
                                <p>甜點，作為法國最出色的浪漫</p>
                                <p>有人，覺得膩口</p>
                                <p>有人，就愛這份濃郁</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .section {
        background: #fffec2;
        // #c5ae7d  dbc390 fffea6

        .container {
            margin: 105px auto;
        }
        .introduction {
            margin: -50px 0;
            position: relative;
            .introduction_img {
                background: url('../../../assets/photos/chocolate-cake.png') right center/auto 100%;
                height: 400px;
                clip-path: polygon(60% 0, 100% 0%, 100% 100%, 40% 100%);
                border-radius: 0 30px 30px 0;
            }

            .introduction_text {
                color: #620062;
                font-size:30px;
                letter-spacing: 5px;
                position: absolute;
                top: 25%;
                bottom: 0;
                right: 0;
                left: 10%;
            }
        }
    }
</style>