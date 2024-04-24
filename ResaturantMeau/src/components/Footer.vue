<script setup>

const RestaurantInfor = {
    name: '六角西餐廳',
    address: '123 Main St, City, Country'
}
</script>

<template>
    <div class="footer">
        <div class="footer-info">
            <div class="footer-h">關於 六角西餐廳</div>
            <div>Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim,
                pulvinar
                lobortis nibh lacinia at. </div>
        </div>
        <div class="footer-info">
            <div class="footer-h">聯絡方式</div>
            <div>• 高雄市中正五路到底</div>
            <div>• +886 886 886</div>
            <div>• service@hexschool.com</div>
        </div>
        <div>
            <div class="footer-center">
                {{ RestaurantInfor.name }}
            </div>
            <div class="footer-icon">
                <img :src="'/src/assets/icons8-facebook-48.png'" />
                <img :src="'/src/assets/icons8-twitter-48.png'" />
                <img :src="'/src/assets/icons8-instagram-48.png'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #eee9e9;
    padding: 20px 49px;
    font-family: 微軟正黑體;
    color: #3D1101;
    display: flex;
}

// .footer-info {
//     width: 299px;
//     padding: 0 21px 0 0;
//     justify-content: space-around;
// }

.footer-h {
    font-size: 24px;
    padding: 30px 0 16px 0;
}

.footer-center {
    width: calc(100% - 2 * 299px);
    min-width: 299px;
    text-align: right;
    font-size: 49px;
    letter-spacing: 0px;
}

.footer-icon {
    text-align: right;
}

@media screen and (max-width: 576px) {
    .footer {
        display: inline-block;
        padding: 11px;
    }

    .footer-center {
        width: 100%;
    }
}
</style>
