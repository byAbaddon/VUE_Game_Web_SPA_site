<template>
  <div>
    <h2 class="text-center my-6 text-uppercase "><span>Choose a game from the cards list</span></h2>
    <GameListComponent />

  </div>
</template>

<script setup>
// Components
import GameListComponent from '@/components/GameListComponent.vue';

</script>



<style scoped>

h2 {
  text-shadow: 0 0 5px #15aaff, 0 0 15px #15aaff, 0 0 20px #15aaff, 0 0 40px #15aaff, 0 0 60px #ff0000, 0 0 10px #15aaff, 0 0 98px #ff0000;
    color: #b8b7b0;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;

}

h2 span{
 border:2px rgb(28, 14, 221) dotted;
 padding:6px;
} 


@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: 11;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {

  text-shadow: 0 0 5px #15aaff, 0 0 15px #15aaff, 0 0 20px #15aaff, 0 0 40px #15aaff, 0 0 60px #ff0000, 0 0 10px #15aaff, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #fcf7f7;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {

  text-shadow: 0 0 5px #15aaff, 0 0 15px #15aaff, 0 0 20px #15aaff, 0 0 40px #15aaff, 0 0 60px #ff0000, 0 0 10px #15aaff, 0 0 98px #ff0000;
    color: #1511aa;
  }
}

</style>