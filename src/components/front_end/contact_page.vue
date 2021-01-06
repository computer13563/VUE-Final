<template>
    <div>
        <div class="container-fluid contact_title_container">

            <NavbarSecStyle></NavbarSecStyle>

            <div class="row contact_title_row">

                <div class="col-12 contact_title_col">
                    <ContactTitle></ContactTitle>
                </div>

                <div class="col-12 contact_connect_block_col">
                    <ContactConnectBlock></ContactConnectBlock>
                </div>

                <div class="col-12 contact_info_col">
                    <ContactInfo></ContactInfo>
                </div>

            </div>
            <ContactTotop></ContactTotop>
            <!-- 聯絡頁面的footer -->
            <section class="recipient_footer">
                <p class="recipient_copyright">Copyright &copy; 2020 虛擬甜點</p>
                <p class="footer_decoration"></p>
            </section>

        </div>
    </div>
</template>

<script>
    import NavbarSecStyle from '@/components/front_end/navbar_sec_style.vue'

    import ContactTitle from '@/components/front_end/contact/contact_title.vue'
    import ContactConnectBlock from '@/components/front_end/contact/contact_connect_block.vue'
    import ContactTotop from '@/components/front_end/contact/contact_totop.vue'
    import ContactInfo from '@/components/front_end/contact/contact_info.vue'

    export default {
        components: {
            NavbarSecStyle,

            ContactTitle,
            ContactConnectBlock,
            ContactInfo,
            ContactTotop
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

    .contact_title_container {
        overflow: hidden;

        .contact_title_row {
            max-width: 1440px;
            overflow: hidden;
            margin: 120px auto 0;
        }

        .contact_connect_block_col {
            border-top: 2px solid #ccc;
        }

        .contact_info_col {
            background: #f1f1f1;
        }
    }

    // 聯絡頁面的footer
    @at-root .recipient_footer {
        width: 100%;

        // FOOTER版權聲明
        .recipient_copyright {
            text-align: center;
            color: #ccc;
            background: #fdfdfd;
            border-top: 1px solid #ccc;
            padding: 10px 0;
        }

        // footer最底下裝飾線
        .footer_decoration {
            height: 3px;
            background: #558464;
        }
    }
</style>