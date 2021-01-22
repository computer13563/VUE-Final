import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../views/Homepage.vue'
import Login from '@/components/login.vue'
import Dashboard from '@/views/DashBoard.vue'
import Products from '@/components/back_end/Products_dashboard.vue'
import Coupon from '@/components/back_end/Coupon_dashboard.vue'
import Order from '@/components/back_end/Order_dashboard.vue'

// 首頁的內容
import Indexcontent from '@/components/front_end/index_content.vue'
// 所有商品頁面
import Allproduct from '@/components/front_end/all_product.vue'
// 商品詳細
import ProductDetail from '@/components/front_end/product/product_detail.vue'

// 消息頁面
import News from '@/components/front_end/news_page.vue'
// 全部消息
import AllNews from '@/components/front_end/news/all_news.vue'
// 消息詳細資訊
import NewsDetail from '@/components/front_end/news/news_detail.vue'

// 關於我們頁面
import AboutUs from '@/components/front_end/about/about_us.vue'

// 購物車
import Cart from '@/components/front_end/cart_page.vue'
// 結帳填寫收件人
import Recipient from '@/components/front_end/recipient_page.vue'
// 結帳頁面
import Checkout from '@/components/front_end/checkout_page.vue'

// 訂購流程頁面
import ShoppingProcessPage from '@/components/front_end/shopping_process_page.vue'

// 聯絡我們頁面
import Contact from '@/components/front_end/contact_page.vue'

// 商店列表頁面
import Shop from '@/components/front_end/shop_page.vue'
// 商店地點
import ShopLocation from '@/components/front_end/shop/shop_location.vue'
// 商店詳細資訊頁面
import ShopDetail from '@/components/front_end/shop/shop_detail.vue'

// 404頁面
import Page404 from '@/components/front_end/page404.vue'

import {
  user_status
} from '@/components/api/account_uploadpic_api.js'

Vue.use(VueRouter)

const routes = [
  // 首頁以及產品頁面
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    redirect: '/',
    children: [{
        path: '',
        name: 'IndexContent',
        component: Indexcontent
      },
      {
        path: 'allproduct',
        name: 'AllProduct',
        component: Allproduct
      },
    ]
  },
  {
    path:'/product/:product_id',
    name:'ProductDetail',
    component:ProductDetail
  },
  // 消息頁面
  {
    path: '/news',
    name: 'News',
    component: News,
    redirect:'/news',
    children:[
      {
        path:'',
        name:'AllNews',
        component:AllNews
      },
      {
        path:':news_id',
        name:'NewsDetail',
        component:NewsDetail
      }
    ]
  },
  // 購物流程頁面
  {
    path:'/process',
    name:'ShoppingProcessPage',
    component:ShoppingProcessPage
  },
  // 關於我們頁面
  {
    path:'/about',
    name:'AboutUs',
    component:AboutUs
  },
  // 購物車
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  // 收件人頁面
  {
    path: '/recipient',
    name: 'Recipient',
    component: Recipient
  },
  // 結帳頁面
  {
    path: '/checkout/:order_id',
    name: 'Checkout',
    component: Checkout
  },
  // 聯絡頁面
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // 商店位置跟商店詳細
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    redirect: '/shop',
    children: [{
        path: '',
        name: 'ShopLocation',
        component: ShopLocation
      },
      {
        path: ':shop_id',
        name: 'ShopDetail',
        component: ShopDetail
      }
    ]
  },

  // 登入頁面
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 後台頁面
  {
    path: '/admin',
    name: '',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '',
        redirect: '/admin/products',
        meta: {
          requiresAuth: true
        }
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
  // 404頁面
  {
    path: '/page404',
    name: 'Page404',
    component: Page404
  },
  {
    path: '*',
    redirect: '/page404',
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