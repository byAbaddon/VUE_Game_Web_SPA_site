<template>
  <v-app class="container">
    <HeaderComponent class="item" />
    <v-main class="item">
      <router-view />
    </v-main>
    <FooterComponent class="item" />
  </v-app>
</template>


<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import router from "@/router"
import {onBeforeMount} from "vue"


onBeforeMount(() => {
  console.log('Page mounted')
  router.push("/").catch(() => { })
})

</script>



<style>
body {
  user-select: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1;
  margin: 0px;
}
</style>