<template>
  <div
    v-for="hero in heros"
    class="col-3 border border-primary elevation-2"
    :class="{
      'bg-warning': hero.health < 25 && hero.health != 0,
      'bg-danger': hero.health == 0,
    }"
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
    <button
      :disabled="hero.health == 0"
      class="btn btn-info"
      @click="heal(hero)"
    >
      heal 👛10
    </button>
  </div>

  <div class="col-12">
    <button
      v-if="!allHerosDead"
      @click="attackBoss"
      class="btn btn-primary m-5"
    >
      attack boss
    </button>
    <div v-else class="m-5 bg-danger p-2">They Got Got</div>
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
export default {
  setup() {
    return {
      heros: computed(() => AppState.heros),
      allHerosDead: computed(() => AppState.heros.every((h) => h.health == 0)),
      heal(hero) {
        if (AppState.gold >= 10) {
          logger.log("bought potion for", hero);
          AppState.gold -= 10;
          hero.health += 5;
          if (hero.health >= 100) hero.health = 100;
        }
      },
      attackBoss() {
        let damage = 0;
        let boss = AppState.bosses[0];
        AppState.heros.forEach((h) => {
          if (h.health > 0) {
            damage += h.damage;
          }
        });
        boss.health -= damage;
        if (boss.health <= 0) {
          AppState.gold += boss.damage;
          Pop.toast("gottem");
          let deadBoss = AppState.bosses.shift();
          deadBoss.level++;
          deadBoss.damage += deadBoss.damage;
          deadBoss.maxHealth += deadBoss.maxHealth;
          deadBoss.health = deadBoss.maxHealth;
          AppState.bosses.push(deadBoss);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
