<template>
    <div>
        <Suspense>
            <template #default>
                <AsyncCityView />
            </template>
            <template #fallback>
                <CityViewSkeleton />
            </template>
        </Suspense>
    </div>


</template>
<script setup>
import AsyncCityView from '../components/AsyncCityView/AsyncCityView.vue';
import CityViewSkeleton from '../components/AnimatedPlaceholder/CityViewSkeleton.vue';
</script>