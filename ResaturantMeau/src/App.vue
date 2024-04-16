<script setup>
import { RouterLink, RouterView } from 'vue-router'

const RestaurantInfor = {
  name: '六角西餐廳',
  address: '123 Main St, City, Country'
}
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="restaurant-info">
        <div class="restaurant-name"><router-link to="/">{{ RestaurantInfor.name }}</router-link></div>
        <div class="info-item">
          <div class="info"><router-link to="/contact">特色</router-link></div>
          <div class="info">主廚</div>
          <div class="info"><router-link to="/menu">Menu</router-link></div>
        </div>
      </div>
      <div>
        <div>咬一口就無法忘懷的漢堡</div>
        <div>七夕絕對無法錯過的好滋味
          六角大漢堡 </div>
      </div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <footer>
      <div class="contact-info">
        <div>Email: example@example.com</div>
        <div>Phone: 123-456-7890 (Monday to Friday 9:30-18:00, except holidays)</div>
      </div>
      <div class="footer-center">
        <div>&copy; {{ RestaurantInfor.name }}</div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 420px;
  opacity: 100%;
  background-color: #333;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Noto Sans TC", sans-serif;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.restaurant-info {
  position: absolute;
  top: 0;
  display: flex;
  width: 1024px;
  height: 56px;
  justify-content: space-between;
}

.restaurant-name {
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
}

.info-item {
  margin-right: 20px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
}

.body {
  position: relative;
}

footer {
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.contact-info {
  display: flex;
  justify-content: space-around;
}

.contact-info div {
  margin-bottom: 5px;
}

.footer-center {
  text-align: center;
}

/* Add your other styles here */
</style>
