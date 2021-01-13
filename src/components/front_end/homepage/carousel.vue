<template>
    <div>
        <!-- <div>
            <button @click.prevent="box" id="button1">press</button>
        </div>
        <div class="pressdiv">
            <ul>
                <li><img src="../../assets/photos/chocolate-cake.jpg" alt=""></li>
                <li><img src="../../assets/photos/chocolate-matte.jpg" alt=""></li>
                <li><img src="../../assets/photos/chocolate-cupcake.jpg" alt=""></li>
            </ul>
        </div> -->

        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><img src="@/assets/photos/chocolate-cake-new.jpg" alt=""></div>
                <div class="swiper-slide"><img src="@/assets/photos/chocolate-cupcake-new.jpg" alt=""></div>
                <div class="swiper-slide"><img src="@/assets/photos/chocolate-matte-new.jpg" alt=""></div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        <!-- <div class="box">
            <div class="img-g">
                <img src="../../assets/photos/chocolate-cake.jpg" alt="">
                <img src="../../assets/photos/chocolate-matte.jpg" alt="">
                <img src="../../assets/photos/chocolate-cupcake.jpg" alt="">
                <img src="../../assets/photos/chocolate-glossy.jpg" alt="">
                <img src="../../assets/photos/chocolate-cake.jpg" alt="">
            </div>
            <div class="btn-g">
                <span data-index="1"></span>
                <span data-index="2"></span>
                <span data-index="3"></span>
                <span data-index="4"></span>
            </div>
        </div> -->
    </div>
</template>


<script>
    import Swiper from 'swiper/bundle';

    export default {
        name: 'Carousel',
        data() {
            return {}
        },
        methods: {
            rollpic() {
                window.onload = function () {
                    let roll = document.querySelector('.roll');
                    let oul = roll.getElementsByTagName('ul')[0];
                    let oli = document.getElementsByTagName('li');
                    oul.innerHTML = oul.innerHTML + oul.innerHTML;
                    oul.style.width = oli[0].offsetWidth * oli.length + 'px';
                    console.log(oli[0].offsetWidth);
                    console.log(oul.style.width);
                    setInterval(function () {
                        if (oul.offsetLeft < -oul.offsetWidth / 2) {
                            oul.style.left = 0;
                            console.log(123);
                        }
                        oul.style.left = oul.offsetLeft - 2 + 'px';
                    }, 500)
                }
            },
            pressdiv1() {
                let pressdiv = document.querySelector('.pressdiv');
                let ul = document.querySelector('.pressdiv ul');
                let li = document.getElementsByTagName('li');
                ul.innerHTML = ul.innerHTML + ul.innerHTML;
                ul.style.width = li[0].offsetWidth * li.length + 'px';

                // console.log(li[0].offsetWidth);
                // console.log(li.length);
                // console.log(ul.style.width);
                // console.log(ul.offsetWidth);
                // console.log(ul.offsetLeft);
                setInterval(() => {
                    // let long = parseInt(ul.style.left) - 500;
                    // ul.style.left =long + 'px';
                    // if(long == -500){
                    //     ul.appendChild(document.images[0]);
                    //     ul.style.left = "0px";
                    // }
                    if (ul.offsetLeft == -500) {
                        ul.style.left = 0;
                        console.log(1222223);
                    }
                    ul.style.left = ul.offsetLeft - 500 + 'px';
                }, 1000)
            },
            box() {

                let img_g = document.getElementsByClassName('img-g')[0];
                setInterval(function () {
                    if (parseInt(img_g.style.left) > -1200) {
                        img_g.style.left = parseInt(img_g.style.left) - 300 + 'px';
                        img_g.style.transition = 'left 1s';
                        if (parseInt(img_g.style.left) <= -1200) {
                            console.log(123);
                            setTimeout(() => {
                                img_g.style.left = '0px';
                                img_g.style.transition = 'left 0s';
                            }, 2000);
                        }
                    } else {
                        img_g.style.left = '0px';
                        img_g.style.transition = 'left 0s';
                    }
                }, 2000);

            },

            onSwiper(swiper) {
                console.log(swiper)
            },
            onSlideChange() {
                console.log('slide change')
            },
        },
        created() {
            // this.rollpic();
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
        mounted() {
            // this.box();
            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                // direction: 'vertical',
                loop: true,
                autoplay: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        }
    }
    // window.onload = function () {
    //     let roll = document.querySelector('.roll');
    //     let oul = document.getElementsByTagName('ul')[0];
    //     let oli = document.getElementsByTagName('li');
    //     oul.innerHTML = oul.innerHTML + oul.innerHTML;
    //     oul.style.width = oli[0].offsetWidth * oli.length + 'px';
    //     console.log(132);
    //     setInterval(function () {
    //         if (oul.offsetLeft < -oul.offsetLeft / 2) {
    //             oul.style.left = 0;
    //         }
    //         oul.style.left = oul.offsetLeft - 2 + 'px';
    //     }, 30)
    //     console.log(321);
    // }

    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // })
</script>

<style scoped lang="scss">
    * {
        padding: 0;
        margin: 0;
    }

    .swiper-container {
        width: 100%;
        max-width: 1500px;
        height: calc(100vh - 40px);
        max-height: 843.75px;

        img {
            width: 100vw;
            max-width: 1500px;
            height: 100%;
            max-height: 843.75px;
        }
    }

    .box {
        width: 300px;
        height: 200px;
        // overflow: hidden;
        margin: 100px auto;
        position: relative;

        .img-g {
            width: 1500px;
            height: 200px;
            position: absolute;
            // transition: left .5s;
        }

        img {
            width: 300px;
            height: 200px;
        }
    }

    .roll {
        margin: auto;
        width: 1000px;
        min-height: calc(100vh - 40px);
        position: relative;
        // overflow: hidden;

        ul {
            position: absolute;
            top: 0;
            left: 25px;
        }

        img {
            vertical-align: middle;
            width: 100%;
        }
    }

    .pressdiv {
        width: 500px;
        height: 200px;
        border: 1px solid #000;
        position: relative;
        margin-left: 100px;

        // overflow: hidden;

        ul {
            transition: .5s;
            list-style: none;
            padding: 0;
            // height: 100%;
            background-color: #000;
            position: absolute;
            display: flex;
        }

        li:nth-child(1) {
            height: 50%;
            // width: 200px;
            background-color: red;
        }

        li:nth-child(2) {
            height: 50%;
            // width: 200px;
            background-color: green;
        }

        img {
            width: 500px;
            height: 200px;
        }
    }

    // .owl-theme .item {
    //     height: 100%;
    //     height: 200px;
    //     background-color: lawngreen;
    // }

    // .carousel-banner1 {
    //     width: 100%;
    //     min-height: calc(100vh - 40px);
    //     background: url(../../assets/photos/chocolate-cake.jpg) no-repeat center;
    //     background-size: cover;
    // }

    // .carousel-banner2 {
    //     width: 100%;
    //     min-height: calc(100vh - 40px);
    //     background: url(../../assets/photos/chocolate-glossy.jpg) no-repeat center;
    //     background-size: cover;
    // }

    // .carousel-banner3 {
    //     width: 100%;
    //     min-height: calc(100vh - 40px);
    //     background: url(../../assets/photos/chocolate-cake.jpg) no-repeat center;
    //     background-size: cover;
    // }

    // .carousel-banner4 {
    //     width: 100%;
    //     min-height: calc(100vh - 40px);
    //     background: url(../../assets/photos/chocolate-cake.jpg) no-repeat center;
    //     background-size: cover;
    // }
</style>