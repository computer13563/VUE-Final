import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Homepage from '../views/Homepage.vue'
import Login from '@/components/login.vue'
import Dashboard from '@/views/DashBoard.vue'
import Products from '@/components/back_end/Products_dashboard.vue'
import Coupon from '@/components/back_end/Coupon_dashboard.vue'
import Order from '@/components/back_end/Order_dashboard.vue'

// 首頁的內容
import Indexcontent from '@/components/front_end/indexcontent.vue'
// 所有商品頁面
import Allproduct from '@/components/front_end/all_product.vue'
// 購物車
import Cart from '@/components/front_end/cart.vue'
// 結帳填寫收件人
import Recipient from '@/components/front_end/recipient.vue'
// 結帳頁面
import Checkout from '@/components/front_end/checkout.vue'
// 聯絡我們頁面
import Contact from '@/components/front_end/contact_page.vue'
// 商店列表頁面
import Shop from '@/components/front_end/shop_page.vue'
import ShopLocation from '@/components/front_end/shop/shop_location.vue'
import ShopDetail from '@/components/front_end/shop/shop_detail.vue'

import Carousel from '@/components/front_end/homepage/carousel.vue'

import {
  user_status
} from '@/components/api/account_uploadpic_api.js'
Vue.use(VueRouter)

const routes = [{
    path: '/index',
    name: 'Homepage',
    component: Homepage,
    children: [{
        path: '',
        name: 'Indexcontent',
        component: Indexcontent
      },
      {
        path: 'allproduct',
        name: 'Allproduct',
        component: Allproduct
      },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/recipient',
    name: 'Recipient',
    component: Recipient
  },
  {
    path: '/checkout/:order_id',
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    redirect:'/shop',
    children: [{
        path: '',
        name: 'ShopLocation',
        component:ShopLocation
      },
      {
        path:':shop_id',
        name:'ShopDetail',
        component:ShopDetail
      }
    ]
  },

  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
        path: '',
        redirect: 'products'
      },
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: Coupon,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: Order,
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '*?',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    user_status().then(res => {
      if (res.data.success) {
        next();
      } else {
        next({
          path: '/login'
        });
      }
    });
  } else {
    next();
  }
})

export default router