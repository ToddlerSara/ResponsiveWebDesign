<script setup>
import { ref, reactive } from 'vue';

const feature = ref([
  { url: '/src/assets/feature_1@2x.png', name: '台灣本土蔬菜', text: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.' },
  { url: '/src/assets/feature_2@2x.png', name: '專業米其林廚師', text: 'Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.' },
  { url: '/src/assets/feature_3@2x.png', name: '對於專業不能退讓', text: 'Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.' }
]
)

const avatar = ref([
  { url: '/src/assets/avatar_1@2x.png', name: '高雄一口吃', text: '自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。', from: ' -- 產品經理' },
  { url: '/src/assets/avatar_2@2x.png', name: '廟口小霸王', text: '自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。', from: ' -- 金身道士' },
  { url: '/src/assets/avatar_3@2x.png', name: '春天也來了', text: '自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。', from: ' -- 美麗萬分' }
])

const form = reactive({
  name: '',
  phone: '',
  date1: '',
  date2: '',
  Veganuary: ''
})

const onSubmit = () => {
  console.log('submit!')
}
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
    <div class="up">
      <div class="avatar-up">聽聽別人的感想</div>
    </div>
    <div class="avatar">
      <div v-for="(item, index) in avatar" :key="index" class="avatar">
        <img :src="item.url" class="avatar-img" />
        <div>
          <div>{{ item.name }}</div>
          <div class="avatar-text">{{ item.text }}</div>
          <div class="avatar-from">{{ item.from }}</div>
        </div>
      </div>
    </div>
    <div class="order-up">我們的位置不太夠坐要不要先定位呢？</div>
    <div class="order">
      <div class="order-img"></div>
      <div class="order-info">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="Name"> <el-input v-model="form.name" /> </el-form-item>
          <el-form-item label="Telephone"> <el-input v-model="form.phone" /> </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center"> <span class="text-gray-500">-</span> </el-col>
            <el-col :span="11"> <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
          </el-form-item>
          <el-form-item label="People">
            <el-select v-model="form.region" placeholder="please select number">
              <el-option label="one" value="shanghai" />
              <el-option label="two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Veganuary">
            <el-radio-group v-model="form.Veganuary">
              <el-radio value="Yes">Yes</el-radio>
              <el-radio value="No">No</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.up {
  background-color: #eee9e9;
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
  background-color: #eee9e9;
  border: 13px solid #eee9e9;
}

.inner {
  display: flex;
  border: 25px solid #eee9e9;
  text-align: center;
  background-color: #eee9e9;
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

.avatar-up {
  width: 216px;
  text-align: center;
  font-family: 微軟正黑體;
  font-size: 24px;
  color: #3D1101;
  margin: auto;
}

.avatar {
  background-color: #eee9e9;
  display: flex;
  font-family: 微軟正黑體;
  color: #3D1101;
  font-size: 18px;
}

.avatar-img {
  width: 67px;
  height: 67px;
  border-radius: 50%;
  margin: 13px;
}

.avatar-text {
  margin: 22px 0 16px 0;
  font-size: 16px;
  line-height: 24px;
}

.avatar-from {
  font-size: 16px;
  text-align: right;
  margin: 0 0 50px 0;
}

.order {
  display: flex;
  margin: 38px 42px 50px 42px;
}

.order-up {
  padding: 50px 0 0 0;
  width: 216px;
  text-align: center;
  font-family: 微軟正黑體;
  font-size: 24px;
  color: #3D1101;
  margin: auto;
}

.order-img {
  flex: 1;
  width: 460px;
  height: 386px;
  background-image: url('/src/assets/Map@2x.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 20px 0 0;
}

.order-info {
  flex: 1;
}
</style>
