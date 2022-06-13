<template>
  <div class="elevation-2 boss p-2">
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
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
export default {
  setup() {
    return {
      boss: computed(() => AppState.bosses[0]),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
