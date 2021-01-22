<template>
    <div>
        <NavbarSixthStyle></NavbarSixthStyle>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavbarSixthStyle from '@/components/front_end/navbar/navbar_sixth_style.vue'

    export default {
        name:'NewsPage',
        components: {
        },
            components: {
            NavbarSixthStyle
        },

        data() {
            return {}
        },

    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
</style>