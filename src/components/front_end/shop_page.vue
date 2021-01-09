<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <NavbarThird></NavbarThird>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <router-view></router-view>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import NavbarThird from '@/components/front_end/navbar/navbar_third_style.vue'

    export default {
        components: {
            NavbarThird,
        },
        data() {
            return {}
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.container-fluid{
    background: #e5cda0;
    overflow: hidden;
    .col:nth-child(1){
        margin: 10px 0 0 0;
    }
}
</style>