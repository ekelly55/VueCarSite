
<script setup>
    //useroute is a composable, which we'll revisit later
    import {useRoute, useRouter, RouterView} from "vue-router"
    //useRouter is a composable that allows us to extract info from the route we're on. but how different from useRoute? you can't modify the path with useRoute. useRouter contains methods you can use on the route

    import cars from "../data/cars.json"
    import ContactView from "./ContactView.vue";

    const route = useRoute()
    //can check what the params are

 
    
    const carId = parseInt(route.params.id)

    const car = cars.find(c => c.id === parseInt(route.params.id))

    //another possible way to do it which allows you to set conditions (like user doesn't want something shows, for ex.) you can make a function with the router.push method in it.

  

    
</script>

<template>
    <div class="div">
        <h1> Car View </h1>
        <p>{{ car.name }}</p>
        <p>{{ car.model }}</p>
        <p>{{ car.year }}</p>
        <p>${{ car.price }}</p>
        <RouterView/>
        <!-- alt way using the function:
         -->
         <!-- <button @click="showContact">Click for contact info</button><RouterView /> -->
        <!-- //RouterView will look in the routes for any child routes. But routerview is not a component like ContactView, so we'll need to pass data another way. see above. -->
        
    </div>
</template>

