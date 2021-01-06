<template>
    <div>
        <section class="contact_title_bg">
            <div class="contact_title_text">
                <p>
                    任何問題
                    <span></span>
                </p>
                <p>
                    CONTACT US
                </p>
                <p>
                    | FORM & EMAIL & TEL |
                </p>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    .contact_title_bg {
        width: 100%;
        height: 90vh;
        padding: 30vh 50px;
        background: url('../../../assets/photos/contact_img.jpg') top right 30%/cover no-repeat;
        overflow: hidden;

        @at-root .contact_title_text {
            display: inline-block;
            background: rgba(255, 255, 255, .4);
            padding: 30px;

            p {
                color: #3e515a;
                padding: 10px 20px;
                letter-spacing: 3px;
            }

            p:nth-child(1) {
                font-size: 16px;
                font-weight: 500;

                span {
                    display: inline-block;
                    width: 50px;
                    height: 1px;
                    background: #3e515a;
                    padding: 0;
                    margin-bottom: 5px;
                }
            }

            p:nth-child(2) {
                font-size: 60px;
                font-weight: 300;
                line-height: 50px;
            }

            p:nth-child(3) {
                font-size: 20px;
                font-weight: 100;
            }
        }
    }
</style>