<template>
    <div >
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script>
    // import Navbar from '@/components/front_end/navbar.vue'
    import Navbar from '@/components/front_end/navbar/navbar_fir_style.vue'
    import Footer from '@/components/front_end/footer.vue'
    import Indexcontent from '@/components/front_end/indexcontent.vue'

    export default {
        name: 'FrontSide',
        components: {
            Navbar,
            Footer,
            Indexcontent
        }
    }
</script>

<style scoped lang="scss">
    header {
        width: 100%;
    }
</style>