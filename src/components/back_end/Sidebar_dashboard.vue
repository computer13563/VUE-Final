<template>
    <div>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="users"></span>
                            <router-link to="/admin/order">訂單列表</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="bar-chart-2"></span>
                            <router-link to="/admin/products">產品列表</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="layers"></span>
                            <router-link to="/admin/coupon">優惠券</router-link>
                        </a>
                    </li>
                </ul>                
            </div>
        </nav>
    </div>
</template>

<style lang="scss">
</style>