<template>
    <div class="flex flex-col flex-1 items-center">
        <!-- banner-->
        <div 
        v-if="route.query.preview"
        class="text-white p-4 bg-weather-secondary w-full text-center"
        >
        <p>
            You are currently previewing this city, click the "+"
            icon to start tracking this city.
        </p>
        </div>
        <!-- weather overview -->
        <div class="flex flex-col items-center text-white py-12">
            <h1 class="text-4xl mb-2"> {{ route.params.city }}</h1>
            <p class="text-sm mb-12">
                {{
                    new Date(weatherData.currentTime).toLocaleDateString(
                        "en-uk",
                        {
                            weekday: "short",
                            day: "2-digit",
                            month: 'long'
                        }
                    )
                }}
                {
                    
                }
            </p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`
        );

        //Cal current date and Time
        const localOffset = new Date().getTimezoneOffset() * 60000;
        const utc = weatherData.data.current.dt * 1000 + localOffset;
        weatherData.data.currentTime = utc + 1000 * weatherData.data.timezone_offset;

        //calc hourly weahter offset
        weatherData.data.hourly.forEach((hour) => {
            const utc = hour.dt * 1000 + localOffset;
            hour.currentTime;
            utc + 1000 * weatherData.data.timezone_offset;
        });

        return weatherData.data
    }
    catch(err) {
        console.log(err)
    }
}

const weatherData = await getWeatherData();
console.log(weatherData)
</script>