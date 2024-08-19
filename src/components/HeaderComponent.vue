<template>
    <v-app-bar
    height="70"
    color="deep-purple darken-2"
    :image="imageSrc"
    >
      
 <!-- title label ---->
 <v-toolbar-title class="font-weight-bold ml-12 ">GAME BASE</v-toolbar-title>
 <!-- desktop version routing ---->
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

 
 <!-- router page links ---->
 <div>
  <v-btn @click="onPath" class="font-weight-bold">Home</v-btn>
  <v-btn @click="onPath" class="font-weight-bold  mr-n4">About</v-btn>
</div>

 <!-- icons ---->
      <v-btn icon class="ml-7" >
        <v-icon class="error"> mdi-heart</v-icon>
      </v-btn>

    </v-app-bar>


</template>


<script setup  >
import imageSrc from '@/assets/images/bg/header.png';
import { useRouter } from 'vue-router'

    const router = useRouter()
    const onPath = e => {
      let path = e.target.innerText.toLowerCase()
      router.push(path == 'home' ? '/' : path)  
    }

</script>





<style scoped></style>


