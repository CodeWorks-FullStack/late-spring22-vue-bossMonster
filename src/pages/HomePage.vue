<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="row w-100">
      <!-- NOTE v-for repeats the block of code it is on creating an alias for the element it is iterating over -->
      <!-- <div
        v-for="hero in heros"
        class="col-3 border border-primary elevation-2"
        :key="hero.name"
      >
        <h4>{{ hero.name }}</h4>
        <img class="img-fluid" :src="hero.img" alt="" />
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="'width:' + hero.health + '%'"
          >
            {{ hero.health }}
          </div>
        </div>
      </div> -->
      <Heros />
    </div>

    <!-- <button
      v-if="!allHerosDead"
      @click="attackBoss"
      class="btn btn-primary m-5"
    >
      attack boss
    </button>
    <div v-else class="m-5 bg-danger p-2">They Got Got</div> -->
    <!-- <div class="elevation-2 boss p-2">
      <h2 class="text-light">{{ boss.name }}</h2>
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          :style="
            'width:' + Math.round((boss.health / boss.maxHealth) * 100) + '%'
          "
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ boss.health }}
        </div>
      </div>
      <img class="" :src="boss.img" alt="" />
    </div> -->
    <Boss />
  </div>
</template>

<script>
import switchAxe from "../assets/Boss Monster/SwitchAxe.webp";
import palamute from "../assets/Boss Monster/palamute.gif";
import { computed, ref } from "vue";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    // NOTE before we moved to appstate

    // const boss = ref({
    //   name: "Erwin",
    //   health: 100,
    //   damage: 5,
    // });
    // const heros = ref([
    //   {
    //     name: "Eren",
    //     health: 100,
    //     damage: 5,
    //     img: switchAxe,
    //   },
    //   {
    //     name: "Eli",
    //     health: 100,
    //     damage: 5,
    //     img: palamute,
    //   },
    // ]);
    function damageHeros() {
      let heros = AppState.heros;
      heros.forEach((h) => {
        h.health -= AppState.bosses[0].damage;
        if (h.health <= 0) h.health = 0;
      });
    }
    const interval = setInterval(damageHeros, 1000);
    return {
      // boss: computed(() => AppState.bosses[0]),
      // heros: computed(() => AppState.heros),
      // allHerosDead: computed(() => AppState.heros.every((h) => h.health == 0)),
      // attackBoss() {
      //   let damage = 0;
      //   let boss = AppState.bosses[0];
      //   AppState.heros.forEach((h) => {
      //     if (h.health > 0) {
      //       damage += h.damage;
      //     }
      //   });
      //   boss.health -= damage;
      //   if (boss.health <= 0) {
      //     boss.health = 0;
      //     Pop.toast("gottem");
      //     let deadBoss = AppState.bosses.shift();
      //     deadBoss.level++;
      //     deadBoss.damage += deadBoss.damage;
      //     deadBoss.maxHealth += deadBoss.maxHealth;
      //     deadBoss.health = deadBoss.maxHealth;
      //     AppState.bosses.push(deadBoss);
      //   }
      // },
    };
  },
};
</script>

<style scoped lang="scss">
.boss {
  background: var(--bs-dark);
  width: 30vw;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
