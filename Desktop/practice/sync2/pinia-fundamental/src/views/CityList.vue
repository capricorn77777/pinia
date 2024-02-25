<script setup lang="ts">
import { VueElement } from 'vue';
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
import {useWeatherSrore} from "@/stores/weather";
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
        <RouterLink v-bind:to="{name: 'weatherInfo', params: {id: id}}"></RouterLink>
        </li>
    </ul>
</template>