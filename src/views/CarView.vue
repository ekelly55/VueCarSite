<script setup>
    //useroute is a composable, which we'll revisit later
    import {useRoute, RouterView} from "vue-router"
    import cars from "../data/cars.json"
    import ContactView from "./ContactView.vue";

    const route = useRoute()
    //can check what the params are
    console.log(route.params)

    const car = cars.find(c => c.id === parseInt(route.params.id))
    
</script>

<template>
    <div class="div">
        <h1> Car View </h1>
        <p>{{ car.name }}</p>
        <p>{{ car.model }}</p>
        <p>{{ car.year }}</p>
        <p>${{ car.price }}</p>
        <RouterView />
        <!-- //RouterView will look in the routes for any child routes. But routerview is not a component like ContactView, so we'll need to pass data another way. see above.  -->
        
    </div>
</template>

