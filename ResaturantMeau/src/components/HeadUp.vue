<script setup>
import { RouterLink, RouterView } from 'vue-router'

const RestaurantInfor = {
    name: '六角西餐廳',
    address: '123 Main St, City, Country'
}
</script>

<template>
    <div class="header">
        <div class="restaurant-info">
            <div class="restaurant-name"><router-link to="/">{{ RestaurantInfor.name }}</router-link></div>
            <div class="info-item">
                <div class="info"><router-link to="/contact">特色</router-link></div>
                <div class="info">主廚</div>
                <div class="info"><router-link to="/menu">Menu</router-link></div>
            </div>
            <!-- 當視窗寬度小於800px時，顯示選單按鈕 -->
            <div class="info-nav-toggle">
                <!-- 引用Font Awesome的icon -->
                <font-awesome-icon icon="fa-solid fa-bars" />
            </div>
            <!-- <div class="links">
                <div><router-link to="/contact">特色</router-link> </div>
                <div>主廚 </div>
                <div><router-link to="/menu">Menu</router-link> </div>
            </div> -->
        </div>
        <div class="head-center">
            <div class="restaurant-describe">
                <div class="describe-head">咬一口就無法忘懷的漢堡</div>
                <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
                <div class="describe-body">
                    <div>七夕絕對無法錯過的好滋味
                        <i class="fa fa-cutlery" style="font-size:16px"></i>
                        六角大漢堡
                        <i class="fa fa-cutlery" style="font-size:16px"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 420px;
    background-image: url('/src/assets/header_desktop@2x.png');
    background-size: cover;
    background-position: center;
    // padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Noto Sans TC", sans-serif;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.head-center {
    align-content: center;
}

.restaurant-info {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.restaurant-name {
    font-optical-sizing: auto;
    font-weight: bolder;
    font-style: normal;
    font-size: 1.6rem;
    margin-left: 20px;
}

.restaurant-describe {
    position: relative;
    background: rgba(0, 0, 0, 0.35);
    // width: 460px;
    // height: 152px;
    padding: 15px;
}

.describe-head {
    width: 100%;
    padding: 20px 0 16px 0;
    text-align: center;
    font-family: 微軟正黑體;
    font-size: 36px;
}

.describe-body {
    width: 192px;
    height: 42px;
    align-content: center;
    text-align: center;
    margin: auto;
}

.info-nav-toggle {
    display: none;
}

.info-item {
    margin-right: 20px;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    align-content: center;
}

.info {
    padding: 18px 31px;
}

/* Add your other styles here */
@media screen and (min-width: 1200px) {
    .restaurant-name {
        padding: 16px 0 0 120px;
    }

    .info-item {
        padding: 16px 120px 0 0;
    }
}

@media screen and (min-width: 1025px) {
    .restaurant-info {
        padding: 1rem 8rem;
    }
}

@media screen and (max-width :576px) {
    .header {
        background-image: url('/src/assets/header_mobile@2x.png');
        background-position: center;
        background-size: cover;
    }

    .info-item {
        display: none;
    }

    .info-nav-toggle {
        font-size: 1.5rem;
        color: var(--clr-primary-5);
        background: transparent;
        border-color: transparent;
        transition: var(--transition);
        cursor: pointer;
        display: block;
    }
}
</style>
