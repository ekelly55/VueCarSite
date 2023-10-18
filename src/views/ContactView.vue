<script setup>
    import {useRoute} from "vue-router"
    import cars from "../data/cars.json"

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))
//b/c RouterView on the CarView page is not a component, so we can't pass data through it as props, we can access the right car for each of these components by grabbing the car id that matches the id in the route params.

</script>

<template>
    <div v-if="car.contact">
        <h1>Contact Info</h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.phone }}</p>
    </div>
    <div v-else>
        <h1>Contact unavailable</h1>
    </div>

</template>

