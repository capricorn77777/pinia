<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {reactive, provide} from "vue";
import type {Member} from "@/interfaces";
import { useMembersStore } from '@/stores/member';

const memberStore = useMembersStore();
memberStore.initList();

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35,
note: "初回入会特典あり。"});
memberList.set(47783, {id: 47783, name: "田中太郎２", email: "bow2@example.com", points: 53
});
provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>piniaサンプル</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  border: blue 1px solid;
  padding: 10px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
