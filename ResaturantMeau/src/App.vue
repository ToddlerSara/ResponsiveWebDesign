<script setup>
import { RouterLink, RouterView } from 'vue-router'

const RestaurantInfor = {
  name: '六角西餐廳',
  address: '123 Main St, City, Country'
}
</script>

<template>
  <div id="app">
    <header>
      <div class="restaurant-name"><router-link to="/">{{ RestaurantInfor.name }}</router-link></div>
      <div class="restaurant-info">
        <div class="info-item"><router-link to="/contact">特色</router-link></div>
        <div class="info-item">主廚</div>
        <div class="info-item"><router-link to="/menu">Menu</router-link></div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="contact-info">
        <div>Email: example@example.com</div>
        <div>Phone: 123-456-7890 (Monday to Friday 9:30-18:00, except holidays)</div>
      </div>
      <div class="contact-name">
        <div>&copy; {{ RestaurantInfor.name }}</div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.restaurant-info {
  display: flex;
}

.info-item {
  margin-right: 20px;
}

nav {
  margin-top: 50px;
  /* To offset the fixed header */

}

footer {
  position: fixed;
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

.contact-name {
  text-align: center;
}

/* Add your other styles here */
</style>
