<script setup>
// import TheWelcome from '../components/TheWelcome.vue'

const menuItems = [
    { id: 1, name: 'Burger', price: '$10' },
    { id: 2, name: 'Pizza', price: '$12' },
    { id: 3, name: 'Salad', price: '$8' }
]
</script>

<template>
    <div>
        <h2>Menu</h2>
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                {{ item.name }} - {{ item.price }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
/* Add your styles here */
</style>
