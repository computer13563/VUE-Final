<template>
    <div class="w-100 navbar_dashboard">
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import {user_logout} from '@/components/api/account_uploadpic_api'
export default{
    name:'Navbar_dashboard',
    data(){
        return {};
    },
    methods:{
        signout(){
            const vm = this;
            user_logout().then(response => {
                console.log(response.data);
                if(response.data.success){
                    vm.$router.push("/login");
                }
            });
        },
    },
}
</script>
<style lang="scss">
.navbar_dashboard{
    position: fixed;
    width: 100vw;
    z-index: 1000;
}
</style>