<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
        <Navbar></Navbar>

                </div>
                <Sidebar></Sidebar>
                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-5">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/back_end/Navbar_dashboard';
    import Sidebar from '../components/back_end/Sidebar_dashboard';

    export default {
        name: 'Dashboard',
        components: {
            Navbar,
            Sidebar,
        },
    }
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
</style>