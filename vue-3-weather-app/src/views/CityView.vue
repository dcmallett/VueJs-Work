<template>
    <div>
        <Suspense>
             <AsyncCityView />
             <!-- template for our fallback content in case the main component fails for some reason to load the data -->
             <template #fallback>
                <p>Loading...</p>
             </template>
        </Suspense>
       
    </div>
</template>

<script setup>
import AsyncCityView from '../components/AsyncCityView/AsyncCityView.vue';
</script>
