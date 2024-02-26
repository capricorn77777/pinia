<script setup lang="ts">
import { VueElement } from 'vue';
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
import {useWeatherStore} from "@/stores/weather";
import type {City} from "@/stores/weather";

const weatherStore = useWeatherStore();
weatherStore.prepareCityList();

const cityList = computed(
    (): Map<string, City> => {
        return weatherStore.cityList;
    }
);
</script>

<template>
    <ul>
        <li
            v-for="[id, city] in cityList"
            v-vind:key="id">
        <RouterLink v-bind:to="{name: 'WeatherInfo', params: {id: id}}">
        {{ city.name }}の天気</RouterLink>
        </li>
    </ul>
</template>