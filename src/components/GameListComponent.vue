<template>
  <div>
    <v-row>
      <v-col v-for="(item,) in games" :key="item.id" cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img :draggable="false" class="align-end text-white" height="200" :src="item.img" cover>
            <v-card-title></v-card-title>
          </v-img>

          <v-card-text :style="{ display: 'none' }">

            <div><span style="color: rgb(161, 34, 34); text-decoration: underline; font-weight: bold">Name:</span>
              {{ item.name }} </div>
            <div> {{ item.info }} </div>
            <div><span style="color: rgb(161, 34, 34); text-decoration: underline; font-weight: bold">Controls:</span>
              {{ item.controls }} </div>
          </v-card-text>

          <v-card-actions>

            <v-btn color="pink" size="default" border="true" variant="outlined" @click="getInfoBtn">
              Info
            </v-btn>

            <v-btn color="brown" size="default" border="true" variant="outlined" @click="startGameByIndex(item.name)">
              Play
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref} from "vue"
import router from "@/router"

const games = [
    { id: 0, name: "SpaceBattle", img: "../assets/gamesLogo/SpaceBattle.png", controls: "Arrow controls: left, right, up and shoot with spacebar.", info: "You are the pilot of a spaceship traveling through interstellar space. On your way, you encounter enemy UFO fleets, with which you enter into battle and finally face the final battle with the mother ship. If you defeat him, the game starts over, continuing to score points as long as you can. Captivating music and effects." },
    { id: 1, name: "TrumpMania", img: "../assets/gamesLogo/TrumpMania.png", controls: "Arrow controls: left, right, and spacebar jump.", info: "You are in the role of the cartoon character Donald Trump. Your goal is to get to the door /exit of the level/, and for this you need to get a key, being careful of the emigrants chasing you who want to capture you. During the levels, you can collect bonus coins. The game requires logic to pass each new one." },
    { id: 2, name: "", img: "../assets/gamesLogo/NoGame.png", controls: "", info: "" },
    { id: 3, name: "", img: "../assets/gamesLogo/NoGame.png", controls: "", info: "" },
    { id: 4, name: "", img: "../assets/gamesLogo/NoGame.png", controls: "", info: "" },
    { id: 5, name: "", img: "../assets/gamesLogo/NoGame.png", controls: "", info: "" },
  ]



const getInfoBtn = (event) => {
  const cardInfo = event.target.closest('.v-card').children[2]
  cardInfo.style.display = cardInfo.style.display == 'block' ? 'none' : 'block'
}


const startGameByIndex = nameGame => {
  if (nameGame.length) {
    router.push({
      name: 'play',
      query: {game: nameGame }
    }).catch((event) => {})
  }
}










</script>





<style scoped>
.mx-auto {
  background: rgba(50, 151, 100, 0.20)
}
</style>