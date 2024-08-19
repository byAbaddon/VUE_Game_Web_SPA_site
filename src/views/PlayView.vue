<template>
  <div>
    <h1 class="neon-text">You play: {{ gameName }}</h1>   
    <!-- <h1>This is an play page</h1> -->
    <div class="game"> 
      <iframe v-if="gameName == 'TrumpMania'" :src="gameUrl" width="1280px" height="745px" frameborder="10" ref="gameIframe"></iframe>
      <iframe v-else :src="gameUrl" width="1280px" height="720px" frameborder="10" ref="gameIframe" ></iframe>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted} from "vue";
import router from "@/router"

const gameUrl = ref('')
const gameName = ref('')
const gameIframe = ref(null)

onBeforeMount(() => {
  gameName.value = router.currentRoute.value.query.game 
})


onMounted(() => {
  gameUrl.value = `../assets/games/${gameName.value}/WEB/index.html`
  addIframeEventListener();
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});


const handleKeydown = event => {
  if (event.code == 'Space') event.preventDefault() 
}


const addIframeEventListener = () => {
  const iframe = gameIframe.value;
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.addEventListener('keydown', handleKeydown);
  }
}

</script>




<style scoped>
.game {
  display: flex;
  justify-content: center; 
  cursor:none;
}

@font-face {
  font-family: "Shojumaru-Regular";
  src: url("/src/assets/fonts/Shojumaru-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

.neon-text {
  text-align: center;
  font-family: 'Shojumaru-Regular', sans-serif;
  color: black;
  text-shadow:
    1px 1px 0 #fff,
    2px 2px 0 #ddd,
    3px 3px 0 #bbb,
    4px 4px 0 #999,
    5px 5px 0 #777;
}


</style>