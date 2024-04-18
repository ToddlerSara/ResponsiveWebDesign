<script setup>
import { ref } from 'vue';

const feature = ref([
  { url: '/src/assets/feature_1@2x.png?1713274890216', name: '台灣本土蔬菜', text: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.' },
  { url: '/src/assets/feature_2@2x.png?1713274890216', name: '專業米其林廚師', text: 'Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.' },
  { url: '/src/assets/feature_3@2x.png?1713274890216', name: '對於專業不能退讓', text: 'Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.' }
]
)
</script>

<template>
  <div>
    <div class="up">
      <div class="border-line"></div>
      <div class="up-contanct">
        <div>客人總是在詢問</div>
        <div>這麼好吃的秘訣是什麼</div>
      </div>
    </div>
    <div class="inner">
      <div v-for="(item, index) in feature" :key="index" class="inner-box">
        <img :src="item.url" class="inner-img" />
        <div class="inner-name">{{ item.name }}</div>
        <div class="inner-text">{{ item.text }}</div>
      </div>
    </div>
    <div class="main-chef">
      <div class="main-chef-img"></div>
      <div class="main-chef-text">
        <div class="main-chef-text-h">今日主廚：帕金森、梅在帕</div>
        <div>Tody Chef: Plum in Shock</div>
        <div class="main-chef-text-des">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
          posuere vulputate. Etiam elit
          elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies
          sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed
          ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula
          eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a
          molestie bibendum.</div>
      </div>
    </div>
    <div>聽聽別人的感想</div>
    <div>
      <div>圖</div>
      <div>
        <div>name</div>
        <div>描述</div>
        <div>by</div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.up {
  padding: 50px 281px 31px 281px;
  position: relative;
  /* Add this */
}

.border-line {
  width: 461px;
  border: 1px solid #979797;
}

.up-contanct {
  height: 64px;
  font-family: 微軟正黑體;
  font-size: 20px;
  color: #3D1101;
  line-height: 32px;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #ffffff;
  border: 13px solid #ffffff;
}

.inner {
  display: flex;
  border: 25px solid #ffffff;
  text-align: center;
}

.inner-box {
  width: 35%;
}

.inner-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 6px 0 20px 0;
}

.inner-name {
  font-family: 微軟正黑體;
  font-size: 18px;
  color: #3D1101;
}

.inner-text {
  font-family: 微軟正黑體;
  font-size: 16px;
  color: #3D1101;
  margin: 11px 0 0 0;
  padding: 0 30px;
}

.main-chef {
  display: flex;
  background: #3D1101;
  width: 1024px;
  height: 420px;
  padding: 0 42px;
  font-family: 微軟正黑體;
  color: #EFE9E7;
  font-size: 15px;
}

.main-chef-img {
  flex: 1;
  width: 470px;
  height: 460px;
  background-image: url('/src/assets/main_chef_brown@2x.png');
  background-size: 96.5%;
  background-repeat: no-repeat;
}

.main-chef-text {
  flex: 1;
  padding: 80px 25px 70px 25px;
}

.main-chef-text-h {
  font-size: 20px;
  line-height: 32px;
}

.main-chef-text-des {
  padding: 16px 0;
}
</style>
