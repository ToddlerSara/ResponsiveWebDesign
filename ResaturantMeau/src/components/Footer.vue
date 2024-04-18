<script setup>

const RestaurantInfor = {
    name: '六角西餐廳',
    address: '123 Main St, City, Country'
}
</script>

<template>
    <footer>
        <div class="contact-info">
            <div>Email: example@example.com</div>
            <div>Phone: 123-456-7890 (Monday to Friday 9:30-18:00, except holidays)</div>
        </div>
        <div class="footer-center">
            <div>&copy; {{ RestaurantInfor.name }}</div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
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
