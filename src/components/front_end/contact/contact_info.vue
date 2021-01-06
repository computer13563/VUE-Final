<template>
    <div>

        <section class="contact_info">
            <form class="">
                <div class="form-group">
                    <label for="user_email">Email</label>
                    <input type="text" required id="user_email" v-model="question.data.email">
                </div>
                <div class="form-group">
                    <label for="user_name">聯絡姓名</label>
                    <input type="text" required id="user_name" v-model="question.data.name">
                </div>
                <div class="form-group">
                    <label for="user_tel">聯絡電話</label>
                    <input type="text" required id="user_tel" v-model="question.data.tel">
                </div>
                <div class="form-group">
                    <label for="remark">詢問事項</label>
                    <textarea name="" id="remark" cols="50" rows="5" v-model="question.data.message"></textarea>
                </div>
                <div>
                    <button>確認送出</button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                question: {
                    data: {
                        email: '',
                        name: '',
                        tel: '',
                        message: ''
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    @at-root .contact_info {
        width: 30%;
        margin:0 auto 30px;
        padding-top: 30px;

        // form表單
        // 輸入聯絡人資料
        label,
        input {
            display: block;
        }

        label {
            font-size: 17px;
            padding: 15px 0 8px 10px;
            color: #3e515a;
        }

        input,
        textarea {
            width: 100%;
            height: 60px;
            font-size: 20px;
            padding: 5px 0 5px 15px;
            border: #b0bec5 2px solid;
            border-radius: 10px;
            background: #f7f9f9;

            &:focus {
                outline: none;
                border-color: #94233e;
            }
        }

        textarea {
            padding: 10px 0 5px 15px;
            height: 100px;
        }

        button {
            width: 100%;
            margin-top: 40px;
            font-size: 30px;
            height: 60px;
            align-items: center;
            border: none;
            background: #558464;
            color: #fff;

            &:hover {
                color: #ddd;
            }

            &:focus {
                outline: none;
            }

            &:active {
                filter: brightness(150%);
            }
        }
    }
</style>