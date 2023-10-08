<script setup>
    import cars from "../data/cars.json"
    import {RouterLink} from "vue-router"
</script>


<template>
    <div>
        <h1>Home View</h1>
        <div class="cars">
            <!-- very weird. need backtick for template literal inside of regular quotes.  -->
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
                {{car.name}}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

   .cars {
        display: flex;
   }
    .cars a {
        text-decoration: none;
        color: white;
        width: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        margin: 10
    }

</style>